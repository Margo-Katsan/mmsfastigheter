import "server-only";

import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { createHash } from "node:crypto";

type FormType = "contact" | "fault-report";

function createLimiters() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }

  const redis = Redis.fromEnv();

  return {
    contact: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: false,
      prefix: "mms:contact",
    }),

    "fault-report": new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "10 m"),
      analytics: false,
      prefix: "mms:fault-report",
    }),

    global: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(50, "10 m"),
      analytics: false,
      prefix: "mms:global",
    }),
  };
}

const limiters = createLimiters();

export async function checkRateLimit(
  type: FormType,
  email: string
): Promise<boolean> {
  if (!limiters) {
    return (
      process.env.NODE_ENV === "development" &&
      process.env.FORM_SECURITY_MODE === "development"
    );
  }

  const identifier = createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex");

  try {
    const individual = await limiters[type].limit(identifier);

    if (!individual.success ||
        individual.reason === "timeout") {
      return false;
    }

    const global = await limiters.global.limit("all");

    return global.success && global.reason !== "timeout";
  } catch {
    console.error("Rate limit verification failed.");

    return false;
  }
}
"use client";

import { useActionState, useState } from "react";
import { TurnstileWidget } from "@/components/security/TurnstileWidget";
import Link from "next/link";

import {
  ArrowRight,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

import { submitContact } from "@/actions/contact";
import { properties } from "@/data/properties";

import type { ContactFormState } from "@/types/contact";

type ContactFormProps = {
  selectedObject?: string;
};

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

const objectOptions = [
  {
    label: "Allmän förfrågan",
    value: "",
  },

  ...properties.map((property) => ({
    label: `${property.title} – ${property.location}`,
    value: property.id,
  })),
];

export function ContactForm({
  selectedObject = "",
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );
  const [turnstileToken, setTurnstileToken] = useState("");
const [turnstileVersion, setTurnstileVersion] = useState(0);

function handleSubmit(formData: FormData) {
  formData.set("turnstileToken", turnstileToken);

  setTurnstileToken("");
  setTurnstileVersion((version) => version + 1);

  formAction(formData);
}

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex min-h-110 flex-col items-center justify-center rounded-card border border-border bg-surface p-8 text-center shadow-card"
      >
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2
            size={40}
            strokeWidth={1.5}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-6 font-display text-3xl text-foreground">
          Tack för ditt meddelande!
        </h2>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
          {state.message}
        </p>

        <Link
          href="/fastigheter"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Se våra fastigheter
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8 lg:p-10">
      {/* Form heading */}
      <div className="flex size-12 items-center justify-center rounded-full bg-primary/8">
        <Send
          size={23}
          strokeWidth={1.5}
          className="text-primary"
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-5 font-display text-3xl text-foreground">
        Skicka en förfrågan
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        Fyll i formuläret nedan så återkommer vi
        till dig så snart vi kan.
      </p>

      <form action={handleSubmit} className="mt-8">
        <fieldset disabled={pending} className="space-y-6">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>

            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Input
            name="name"
            label="Namn"
            placeholder="För- och efternamn"
            autoComplete="name"
            defaultValue={state.values?.name}
            maxLength={100}
            error={state.errors?.name?.[0]}
            required
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              name="email"
              label="E-post"
              type="email"
              placeholder="namn@exempel.se"
              autoComplete="email"
              defaultValue={state.values?.email}
              maxLength={254}
              error={state.errors?.email?.[0]}
              required
            />

            <Input
              name="phone"
              label="Telefon"
              type="tel"
              placeholder="+46 ..."
              autoComplete="tel"
              defaultValue={state.values?.phone}
              maxLength={30}
              error={state.errors?.phone?.[0]}
            />
          </div>

          <Select
            name="object"
            label="Fastighet eller projekt"
            options={objectOptions}
            defaultValue={
              state.values?.object ?? selectedObject
            }
            error={state.errors?.object?.[0]}
          />

          <Textarea
            name="message"
            label="Meddelande"
            placeholder="Berätta hur vi kan hjälpa dig..."
            rows={5}
            defaultValue={state.values?.message}
            minLength={10}
            maxLength={3000}
            error={state.errors?.message?.[0]}
            required
          />

          {/* Privacy policy */}
          <div>
            <div className="flex items-start gap-3">
              <input
                id="contact-privacy"
                name="privacy"
                type="checkbox"
                required
                defaultChecked={state.values?.privacy}
                aria-invalid={Boolean(state.errors?.privacy)}
                aria-describedby={
                  state.errors?.privacy
                    ? "contact-privacy-error"
                    : undefined
                }
                className="mt-1 size-4 shrink-0 cursor-pointer accent-primary"
              />

              <label
                htmlFor="contact-privacy"
                className="text-sm leading-relaxed text-muted"
              >
                Jag har läst MMS Fastigheters{" "}
                <Link
                  href="/integritetspolicy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline"
                >
                  integritetspolicy
                </Link>
                .
              </label>
            </div>

            {state.errors?.privacy && (
              <p
                id="contact-privacy-error"
                className="mt-2 text-xs text-red-600"
              >
                {state.errors.privacy[0]}
              </p>
            )}
          </div>
        </fieldset>

        {/* Error message */}
        {state.status === "error" && (
          <div
            role="alert"
            className="mt-6 flex items-start gap-3 rounded-button border border-red-200 bg-red-50 p-4 text-red-700"
          >
            <AlertCircle
              size={19}
              className="shrink-0"
              aria-hidden="true"
            />

            <p className="text-sm">
              {state.message}
            </p>
          </div>
        )}
        <div className="mt-6">
  {!pending && (
    <TurnstileWidget
      key={turnstileVersion}
      action="contact"
      onVerify={setTurnstileToken}
      onExpire={() => setTurnstileToken("")}
      onError={() => setTurnstileToken("")}
    />
  )}
</div>

        {/* Submit button */}
        <Button
  type="submit"
  size="lg"
  disabled={pending || !turnstileToken}
  className="mt-8 w-full"
>
          {pending ? (
            <>
              <LoaderCircle
                size={19}
                className="animate-spin"
                aria-hidden="true"
              />
              Skickar...
            </>
          ) : (
            <>
              Skicka förfrågan
              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </>
          )}
        </Button>

        <p className="mt-4 text-center text-xs text-muted">
          Fält markerade med * är obligatoriska.
        </p>
      </form>
    </div>
  );
}
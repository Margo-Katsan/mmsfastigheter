"use cache";

import { cacheLife } from "next/cache";

export async function CurrentYear() {
  cacheLife("days");

  return <>{new Date().getFullYear()}</>;
}
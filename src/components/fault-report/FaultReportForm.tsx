"use client";

import { useActionState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import { Button, buttonStyles } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

import { ImageUpload } from "./ImageUpload";

import { submitFaultReport } from "@/actions/fault-report";
import { faultCategories } from "@/data/fault-report";

import type { FaultReportState } from "@/types/fault-report";

const initialState: FaultReportState = {
  status: "idle",
  message: "",
};

function FormSectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7 flex items-start gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
        {number}
      </div>

      <div>
        <h2 className="font-display text-2xl text-foreground">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FaultReportForm() {
  const [state, formAction, pending] = useActionState(
    submitFaultReport,
    initialState
  );

  const values = state.values;
  const errors = state.errors;

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
          Tack för din felanmälan!
        </h2>

        <p className="mt-4 max-w-md leading-relaxed text-muted">
          {state.message}
        </p>

        <Link
          href="/"
          className={buttonStyles({
            className: "mt-8",
          })}
        >
          Till startsidan
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8 lg:p-10">
      <form action={formAction}>
        <fieldset disabled={pending}>
          {/* Honeypot */}
          <div hidden aria-hidden="true">
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* 01 - Contact details */}
          <section>
            <FormSectionHeading
              number="01"
              title="Dina kontaktuppgifter"
              description="Ange dina uppgifter så att vi kan kontakta dig."
            />

            <div className="space-y-5">
              <Input
                name="name"
                label="Namn / Företag"
                autoComplete="name"
                defaultValue={values?.name}
                error={errors?.name?.[0]}
                maxLength={100}
                required
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  name="email"
                  label="E-post"
                  type="email"
                  autoComplete="email"
                  defaultValue={values?.email}
                  error={errors?.email?.[0]}
                  maxLength={254}
                  required
                />

                <Input
                  name="phone"
                  label="Telefon"
                  type="tel"
                  autoComplete="tel"
                  defaultValue={values?.phone}
                  error={errors?.phone?.[0]}
                  maxLength={30}
                  required
                />
              </div>

              <Input
                name="address"
                label="Fastighetens adress"
                placeholder="Gatuadress och ort"
                autoComplete="street-address"
                defaultValue={values?.address}
                error={errors?.address?.[0]}
                maxLength={200}
                required
              />

              <Input
                name="unit"
                label="Lägenhetsnummer / Lokal"
                placeholder="Om tillämpligt"
                defaultValue={values?.unit}
                error={errors?.unit?.[0]}
                maxLength={50}
              />
            </div>
          </section>

          {/* 02 - Fault details */}
          <section className="mt-10 border-t border-border pt-10">
            <FormSectionHeading
              number="02"
              title="Information om felet"
              description="Beskriv problemet så tydligt som möjligt."
            />

            <div className="space-y-5">
              <Select
                name="category"
                label="Typ av fel"
                options={faultCategories}
                defaultValue={values?.category ?? ""}
                error={errors?.category?.[0]}
                required
              />

              <Input
                name="subject"
                label="Ämne"
                placeholder="Exempel: Värmen fungerar inte"
                defaultValue={values?.subject}
                error={errors?.subject?.[0]}
                maxLength={150}
                required
              />

              <Input
                name="serialNumber"
                label="Serienummer för vitvaror"
                placeholder="Om tillämpligt"
                defaultValue={values?.serialNumber}
                error={errors?.serialNumber?.[0]}
                maxLength={100}
              />

              <Textarea
                name="description"
                label="Beskriv felet"
                placeholder="Vad har hänt? Var finns felet? När upptäcktes problemet?"
                rows={6}
                defaultValue={values?.description}
                error={errors?.description?.[0]}
                minLength={10}
                maxLength={5000}
                required
              />
            </div>
          </section>

          {/* 03 - Attachments */}
          <section className="mt-10 border-t border-border pt-10">
            <FormSectionHeading
              number="03"
              title="Bifoga bilder"
              description="Bilder kan hjälpa oss att förstå problemet bättre. Detta är frivilligt."
            />

            <ImageUpload
              key={state.status === "error" ? "retry" : "initial"}
              disabled={pending}
              error={errors?.images?.[0]}
            />

            {state.status === "error" && (
              <p className="mt-3 text-xs text-muted">
                Kontrollera och välj vid behov dina bilder igen.
              </p>
            )}
          </section>

          {/* Privacy */}
          <div className="mt-10 border-t border-border pt-7">
            <div className="flex items-start gap-3">
              <input
                id="fault-privacy"
                name="privacy"
                type="checkbox"
                defaultChecked={values?.privacy}
                required
                aria-invalid={Boolean(errors?.privacy)}
                aria-describedby={
                  errors?.privacy
                    ? "fault-privacy-error"
                    : undefined
                }
                className="mt-1 size-4 shrink-0 accent-primary"
              />

              <label
                htmlFor="fault-privacy"
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

            {errors?.privacy && (
              <p
                id="fault-privacy-error"
                className="mt-2 text-xs text-red-600"
              >
                {errors.privacy[0]}
              </p>
            )}
          </div>
        </fieldset>

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

        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="mt-8 w-full"
        >
          {pending ? (
            <>
              <LoaderCircle
                size={19}
                className="animate-spin"
                aria-hidden="true"
              />
              Skickar felanmälan...
            </>
          ) : (
            <>
              Skicka felanmälan
              <ArrowRight size={18} aria-hidden="true" />
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
export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  object: string;
  message: string;
  privacy: boolean;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  values?: ContactFormValues;
  errors?: Partial<
    Record<keyof ContactFormValues, string[]>
  >;
};
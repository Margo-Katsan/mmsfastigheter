export type FaultReportValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  unit: string;
  category: string;
  serialNumber: string;
  subject: string;
  description: string;
  privacy: boolean;
};

export type FaultReportState = {
  status: "idle" | "success" | "error";
  message: string;
  values?: FaultReportValues;
  errors?: Partial<
    Record<
      keyof FaultReportValues | "images",
      string[]
    >
  >;
};
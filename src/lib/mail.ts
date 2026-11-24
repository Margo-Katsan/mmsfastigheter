import "server-only";

import nodemailer from "nodemailer";

type SendMailOptions = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[];
};

export async function sendMail({
  to,
  subject,
  text,
  attachments,
  replyTo,
}: SendMailOptions) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_USER ||
    !SMTP_PASS ||
    !MAIL_FROM
  ) {
    throw new Error("SMTP configuration is missing.");
  }

  const port = Number(SMTP_PORT || 587);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("Invalid SMTP port.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,

    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },

    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  const result = await transporter.sendMail({
    from: {
      name: "MMS Fastigheter",
      address: MAIL_FROM,
    },
    to,
    replyTo,
    subject,
    attachments,
    text,
  });

  if (result.accepted.length === 0) {
    throw new Error("SMTP server rejected the message.");
  }

  return result;
}
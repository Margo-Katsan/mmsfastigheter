"use client";

import { useEffect, useRef, useState } from "react";
import { UploadCloud, X, ImageIcon } from "lucide-react";

import {
  MAX_FILES,
  MAX_FILE_SIZE,
  ALLOWED_IMAGE_TYPES,
} from "@/data/fault-report";

type ImageUploadProps = {
  error?: string;
  disabled?: boolean;
};

function ImagePreview({ file }: { file: File }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);

    setUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!url) {
    return <ImageIcon size={22} aria-hidden="true" />;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={url}
      alt={file.name}
      className="size-full object-cover"
    />
  );
}

export function ImageUpload({
  error,
  disabled = false,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [localError, setLocalError] = useState("");

  function updateFiles(nextFiles: File[]) {
    const transfer = new DataTransfer();

    nextFiles.forEach((file) => {
      transfer.items.add(file);
    });

    if (inputRef.current) {
      inputRef.current.files = transfer.files;
    }

    setFiles(nextFiles);
  }

  function handleFiles(incomingFiles: File[]) {
    setLocalError("");

    const nextFiles = [...files];

    for (const file of incomingFiles) {
      const allowed = ALLOWED_IMAGE_TYPES.some(
        (type) => type === file.type
      );

      if (!allowed) {
        setLocalError("Endast JPG, PNG och WEBP tillåts.");
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        setLocalError("Varje bild får vara högst 2 MB.");
        continue;
      }

      if (nextFiles.length >= MAX_FILES) {
        setLocalError("Du kan bifoga högst 3 bilder.");
        break;
      }

      nextFiles.push(file);
    }

    updateFiles(nextFiles);
  }

  function removeFile(index: number) {
    updateFiles(
      files.filter((_, fileIndex) => fileIndex !== index)
    );

    setLocalError("");
  }

  const displayError = localError || error;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">
          Bifoga bilder
        </p>

        <span className="text-xs text-muted">
          {files.length} / {MAX_FILES} bilder
        </span>
      </div>

      <input
        ref={inputRef}
        name="images"
        type="file"
        multiple
        hidden
        disabled={disabled}
        accept={ALLOWED_IMAGE_TYPES.join(",")}
        onChange={(event) =>
          handleFiles(
            Array.from(event.target.files ?? [])
          )
        }
      />

      <button
        type="button"
        disabled={disabled || files.length >= MAX_FILES}
        onClick={() => inputRef.current?.click()}
        className="flex w-full flex-col items-center rounded-card border-2 border-dashed border-border bg-background px-5 py-10 text-center transition-colors hover:border-primary/50 hover:bg-primary/5 disabled:opacity-50"
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
          <UploadCloud
            size={28}
            strokeWidth={1.5}
            className="text-primary"
            aria-hidden="true"
          />
        </div>

        <span className="mt-4 text-sm font-semibold text-primary">
          Klicka för att välja bilder
        </span>

        <span className="mt-2 text-xs text-muted">
          JPG, PNG eller WEBP. Max 2 MB per bild.
        </span>
      </button>

      {files.length > 0 && (
        <ul className="space-y-3">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.lastModified}-${index}`}
              className="flex items-center gap-3 rounded-button border border-border bg-background p-3"
            >
              <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-primary/10 text-primary">
                <ImagePreview file={file} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                  {file.name}
                </p>

                <p className="mt-1 text-xs text-muted">
                  {(file.size / 1024).toFixed(0)} KB
                </p>
              </div>

              <button
                type="button"
                disabled={disabled}
                onClick={() => removeFile(index)}
                aria-label={`Ta bort ${file.name}`}
                className="rounded-md p-2 text-muted hover:bg-red-50 hover:text-red-600"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {displayError && (
        <p role="alert" className="text-sm text-red-600">
          {displayError}
        </p>
      )}
    </div>
  );
}
import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#122b22",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -5,
              lineHeight: 1,
            }}
          >
            MMS
          </div>

          <div
            style={{
              fontSize: 20,
              letterSpacing: 7,
              marginTop: 10,
            }}
          >
            FASTIGHETER
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#b49a70",
              fontSize: 23,
              letterSpacing: 5,
              marginBottom: 24,
            }}
          >
            SEDAN 1984
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 500,
              lineHeight: 1.15,
              maxWidth: 950,
            }}
          >
            Fastigheter med värde idag och i morgon.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#b6c8bd",
            fontSize: 26,
          }}
        >
          MMS Fastigheter · Skåne, Sverige
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4ED",
          borderRadius: 36,
        }}
      >
        <svg
          viewBox="0 0 40 44"
          width="120"
          height="132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
            fill="#2F4A3A"
            opacity="0.15"
          />
          <path
            d="M20 2L4 10v12c0 8.8 6.8 17 16 20 9.2-3 16-11.2 16-20V10L20 2z"
            stroke="#2F4A3A"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 26l8-12 8 12"
            stroke="#2F4A3A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="17.5" y="22" width="5" height="6" rx="1" fill="#2F4A3A" opacity="0.3" />
          <circle cx="25" cy="16" r="2.5" fill="#C49A4A" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

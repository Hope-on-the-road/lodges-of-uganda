"use client";

import { useState, useEffect } from "react";

export function ProtectedContact({
  value,
  type,
  icon,
  className,
}: {
  value: string;
  type: "email" | "phone";
  icon?: React.ReactNode;
  className?: string;
}) {
  const [decoded, setDecoded] = useState<string | null>(null);

  useEffect(() => {
    try {
      setDecoded(atob(value));
    } catch {
      setDecoded(value);
    }
  }, [value]);

  if (!decoded) {
    return (
      <span className={className} aria-label={type === "email" ? "Email address" : "Phone number"}>
        {icon}
        <span className="text-olive-dark/40 italic text-xs">Click to reveal</span>
      </span>
    );
  }

  const href =
    type === "email"
      ? `mailto:${decoded}`
      : `tel:${decoded.replace(/\s/g, "")}`;

  return (
    <a href={href} className={className}>
      {icon}
      {decoded}
    </a>
  );
}

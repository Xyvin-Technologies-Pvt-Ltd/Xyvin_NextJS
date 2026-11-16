"use client";

import { useEffect, useState } from "react";

// Keeps email addresses out of the HTML that scrapers harvest. The address is passed in
// encoded (see encodeEmail in @/lib/email-obfuscation) and only decoded in the browser.
// Before hydration (or without JS) visitors see the given label, or "Email us".

function decodeEmail(encoded: string) {
  try {
    return atob(encoded).split("").reverse().join("");
  } catch {
    return "";
  }
}

interface ProtectedEmailProps {
  /** Output of encodeEmail(address) from @/lib/email-obfuscation. */
  encoded: string;
  /** Link text. Defaults to the address itself. */
  children?: React.ReactNode;
  subject?: string;
  className?: string;
  [data: `data-${string}`]: string | undefined;
}

export default function ProtectedEmail({ encoded, children, subject, className, ...rest }: ProtectedEmailProps) {
  const [email, setEmail] = useState("");
  useEffect(() => setEmail(decodeEmail(encoded)), [encoded]);

  const label = email || "Email us";
  const href = email ? `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}` : undefined;

  return (
    <a href={href} className={className} {...rest}>
      {children ?? label}
    </a>
  );
}

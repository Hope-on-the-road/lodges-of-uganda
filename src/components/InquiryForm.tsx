"use client";

import { useState } from "react";

const inputClass =
  "w-full px-3 py-2 bg-white rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm text-olive-dark placeholder:text-olive-dark/30";

export function InquiryForm({ lodgeName }: { lodgeName: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    travelDates: "",
    message: `I'm interested in ${lodgeName}. Please help me plan my stay.`,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Lodge Inquiry: ${lodgeName}`,
          from_name: form.name,
          Name: form.name,
          Email: form.email,
          "Travel Dates": form.travelDates || "Not specified",
          Message: form.message,
          Lodge: lodgeName,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <div className="text-center py-4">
          <svg className="w-10 h-10 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-forest font-semibold text-sm mb-1">Inquiry sent!</p>
          <p className="text-olive-dark/60 text-xs">We will get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <h3 className="text-forest font-semibold text-sm mb-3">Send an Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-olive-dark/70 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-olive-dark/70 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-olive-dark/70 mb-1">
            Travel Dates
          </label>
          <input
            type="text"
            value={form.travelDates}
            onChange={set("travelDates")}
            placeholder="e.g. July 15–22, 2026"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-olive-dark/70 mb-1">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={set("message")}
            rows={3}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending" || !form.name || !form.email}
          className="w-full px-4 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
        {status === "error" && (
          <p className="text-red-600 text-xs">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}

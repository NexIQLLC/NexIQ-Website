"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget as HTMLFormElement;
    const formData = new FormData(formEl);

    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const domain = String(formData.get("domain") || "");
    const description = String(formData.get("description") || "").trim();

    if (!firstName || !email || !domain || !description) {
      toast("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          domain,
          description,
        }),
      });

      if (response.ok) {
        toast.success("Thanks! We've received your inquiry and will get back to you soon.");
        formEl.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Sorry, something went wrong. Please email us directly.');
      }
    } catch (err: any) {
      console.error('Contact form submission failed', err);
      toast.error(err.message || 'Failed to submit form. Please try again later.');
      console.error("Contact form submission failed", err);
      toast("Sorry, something went wrong. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="text-sm font-medium">First name *</label>
        <input id="firstName" name="firstName" type="text" required className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="John" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="lastName" className="text-sm font-medium">Last name *</label>
        <input id="lastName" name="lastName" type="text" required className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Doe" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="you@company.com" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="(555) 555-5555" />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="domain" className="text-sm font-medium">Domain of inquiry *</label>
        <select id="domain" name="domain" required className="h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring" defaultValue="">
          <option value="" disabled>Select a domain</option>
          <option value="HRIS_CRM_Integration">HRIS & CRM Integration</option>
          <option value="API_Creation">API Creation</option>
          <option value="Automation_Development">Automation Development</option>
          <option value="Web_App_Development">Web App Development</option>
          <option value="AI_Automation">AI-based Automation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="description" className="text-sm font-medium">Describe your inquiry *</label>
        <textarea id="description" name="description" required rows={6} className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Project goals, timelines, integrations, budget range, etc." />
      </div>

      <div className="md:col-span-2">
        <Button type="submit" disabled={isSubmitting} className="px-6 py-5 text-base dark:text-black">
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}



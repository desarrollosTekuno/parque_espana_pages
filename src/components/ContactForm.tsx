import { useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { ContactContent as contactParque1 } from "../constants/ParkSpain_1/Contact";
import { ContactContent as contactParque2 } from "../constants/ParkSpain_2/Contact";
import { submitClubContact, CLUB_IDS } from "../services/api";

export default function ContactForm() {
  const location = useLocation();
  const isParque2 = location.pathname.startsWith("/parque-espana-2");
  const clubId = isParque2 ? CLUB_IDS.PARQUE_2 : CLUB_IDS.PARQUE_1;

  const content = isParque2 ? contactParque2 : contactParque1;
  const { form } = content;

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitClubContact(clubId, values);
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error enviando contacto:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
      <div>
        <label htmlFor="name" className="mb-2 block font-bold text-[#3C3C3C]">
          {form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder={form.namePlaceholder}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#4A93A8]"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-bold text-[#3C3C3C]">
          {form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder={form.emailPlaceholder}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#4A93A8]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-bold text-[#3C3C3C]">
          {form.subjectLabel}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder={form.subjectPlaceholder}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#4A93A8]"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-bold text-[#3C3C3C]">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder={form.messagePlaceholder}
          required
          rows={6}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#4A93A8]"
        />
      </div>

      <button
        type="submit"
        disabled={status == "submitting"}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-500 py-3 font-bold text-white transition hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status == "submitting" && <Loader2 className="h-5 w-5 animate-spin" />}
        {status == "submitting" ? "Enviando..." : form.submitLabel}
      </button>

      {status == "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <p className="text-[14px] font-bold text-green-700">
            ¡Tu mensaje fue enviado correctamente! Nos pondremos en contacto pronto.
          </p>
        </div>
      )}

      {status == "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <p className="text-[14px] font-bold text-red-700">
            Ocurrió un error al enviar tu mensaje. Intenta de nuevo.
          </p>
        </div>
      )}
    </form>
  );
}
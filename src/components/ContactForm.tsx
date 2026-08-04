import { useState, type FormEvent } from "react";
import { ContactContent } from "../constants/ParkSpain_1/Contact";

export default function ContactForm() {
  const { form } = ContactContent;

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: conectar a API / servicio de envío (EmailJS, Formspree, endpoint propio, etc.)
    console.log("Contacto enviado:", values);
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
        className="mt-2 w-full rounded-lg bg-gray-500 py-3 font-bold text-white transition hover:bg-gray-600 sm:w-auto sm:px-10"
      >
        {form.submitLabel}
      </button>
    </form>
  );
}
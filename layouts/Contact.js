"use client";
import config from "@config/config.json";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import { useState } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const [status, setStatus] = useState(""); // Stato per messaggi di successo o errore

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset(); // Resetta il form
      } else {
        const { error } = await res.json();
        setStatus(`Error: ${error}`);
      }
    } catch (err) {
      setStatus("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <form
              onSubmit={handleSubmit}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Invia Un Messaggio</h2>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Nome
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Nome Azienda"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Indirizzo Email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="subject"
                >
                  Oggetto
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="message"
                >
                  Messaggio
                </label>
                <textarea
                  className="form-textarea w-full"
                  name="message"
                  rows="6"
                  required
                />
              </div>
              <button className="btn btn-primary block w-full">Invia</button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

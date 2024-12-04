import mailgun from "mailgun-js";

// Configura le chiavi API e il dominio Mailgun
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Validazione dei campi
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
    }

    try {
      const data = {
        from: "noreply@sandbox76f4bfdc8ed6463ea5267bb959fd9f0b.mailgun.org", // Usa il dominio sandbox
        to: "scinfu@gmail.com", // Sostituisci con un indirizzo verificato
        subject: `New message from ${name}: ${subject}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      };

      await mg.messages().send(data);

      res.status(200).json({ success: "Email inviata con successo!" });
    } catch (error) {
      console.error("Errore durante l'invio dell'email:", error);
      res.status(500).json({ error: "Errore durante l'invio dell'email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Metodo ${req.method} non consentito.`);
  }
}

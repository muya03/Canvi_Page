import { Router } from "express";
import { getUncachableResendClient } from "../lib/resend";
import { logger } from "../lib/logger";

const router = Router();

const roleLabels: Record<string, string> = {
  delegado: "Candidato/a a delegado/a de clase",
  consell: "Miembro del Consell de l'Estudiantat",
  eventos: "Organización de eventos",
  comunicacion: "Comunicación y redes sociales",
  otro: "Otro",
};

router.post("/join", async (req, res) => {
  const { name, email, role, message } = req.body as {
    name?: string;
    email?: string;
    role?: string;
    message?: string;
  };

  if (!name || !email || !role || !message) {
    res.status(400).json({ success: false, error: "Faltan campos obligatorios." });
    return;
  }

  try {
    const { client, fromEmail } = await getUncachableResendClient();

    const from = fromEmail ?? "onboarding@resend.dev";
    const roleLabel = roleLabels[role] ?? role;

    await client.emails.send({
      from,
      to: ["info@canvi.es"],
      replyTo: email,
      subject: `Solicitud de unión a Canvi — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #3f2160; border-bottom: 3px solid #ff8c00; padding-bottom: 12px;">
            Nueva solicitud de unión a Canvi
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 160px;">Nombre</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ff8c00;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Área de interés</td>
              <td style="padding: 8px 0;">${roleLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-left: 4px solid #ff8c00; border-radius: 4px;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Mensaje:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Enviado desde el formulario web de canvi.es · Responde directamente a este email para contactar con ${name}
          </p>
        </div>
      `,
    });

    logger.info({ name, email, role }, "Join request email sent");
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send join request email");
    res.status(500).json({ success: false, error: "Error al enviar el mensaje." });
  }
});

export default router;

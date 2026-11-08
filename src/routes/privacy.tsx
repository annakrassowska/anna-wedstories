import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { title: "Privacy Policy — Anna WedStories" },
      { name: "description", content: "How Anna WedStories handles the personal details you share through the inquiry form." },
      { property: "og:title", content: "Privacy Policy — Anna WedStories" },
      { property: "og:description", content: "How Anna WedStories handles your personal details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24">
      <Link to="/" className="eyebrow text-taupe">← Anna WedStories</Link>
      <h1 className="headline mt-8">Privacy Policy</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
        <p>{`POLÍTICA DE PRIVACIDAD

Anna WedStories

Última actualización: 8 de noviembre de 2026

1. Responsable del tratamiento

En cumplimiento del Reglamento General de Protección de Datos (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), se informa de que los datos personales recogidos a través de esta página web serán tratados por:

Responsable: [Nombre y apellidos de la titular o razón social]

Nombre comercial: Anna WedStories

Domicilio: [Dirección profesional o domicilio fiscal]

Ubicación: Málaga, España

Correo electrónico: annawedstories@gmail.com

Sitio web: https://anna-wedstories.com/

2. ¿Qué datos personales recopilamos?

A través de nuestra página web y del formulario de contacto podemos recopilar los siguientes datos:

Nombre y apellidos.

Dirección de correo electrónico.

Número de teléfono o WhatsApp.

Fecha de la boda.

Lugar de celebración de la boda.

Información adicional que el usuario decida compartir voluntariamente en su mensaje.

No solicitamos intencionadamente datos personales especialmente protegidos.

3. ¿Con qué finalidad utilizamos tus datos?

Los datos personales se utilizan exclusivamente para las siguientes finalidades:

Atender las consultas y solicitudes de información recibidas.

Comprobar la disponibilidad para la fecha de celebración de la boda.

Enviar información sobre nuestros servicios de creación de contenido audiovisual para bodas.

Preparar presupuestos y propuestas personalizadas.

Gestionar la relación profesional y contractual con los clientes.

Cumplir las obligaciones legales y fiscales correspondientes.

No utilizaremos tus datos para enviarte comunicaciones comerciales no solicitadas.

4. ¿Cuál es la base legal para el tratamiento?

El tratamiento de los datos personales se realiza sobre las siguientes bases jurídicas:

Medidas precontractuales: cuando solicitas información sobre nuestros servicios o un presupuesto.

Ejecución de un contrato: cuando contratas nuestros servicios.

Cumplimiento de obligaciones legales: cuando sea necesario conservar determinados datos por motivos fiscales o administrativos.

Consentimiento: cuando sea necesario para finalidades adicionales que requieran tu autorización.

En los casos en los que el tratamiento se base en el consentimiento, podrás retirarlo en cualquier momento.

5. ¿Durante cuánto tiempo conservamos tus datos?

Los datos personales se conservarán durante el tiempo necesario para atender tu solicitud y gestionar la posible relación comercial.

Cuando exista una relación contractual, los datos se conservarán mientras dure la prestación del servicio y posteriormente durante los plazos exigidos por la legislación aplicable.

Los datos utilizados para atender consultas que no den lugar a una contratación se conservarán durante el plazo de [indicar plazo] y posteriormente serán eliminados, salvo que exista una obligación legal que justifique su conservación.

6. ¿Compartimos tus datos con terceros?

Anna WedStories no vende ni cede datos personales a terceros con fines comerciales.

No obstante, para el funcionamiento de la página web y la gestión de las solicitudes, pueden intervenir proveedores tecnológicos que prestan servicios de alojamiento, mantenimiento y gestión de formularios.

En particular, el formulario de contacto está gestionado mediante la plataforma Tally.

Estos proveedores podrán tratar los datos personales únicamente en la medida necesaria para prestar sus servicios y conforme a las garantías y condiciones de protección de datos aplicables.

Cuando sea necesario, se formalizarán los correspondientes acuerdos de tratamiento de datos.

Asimismo, los datos podrán comunicarse a las autoridades públicas cuando exista una obligación legal.

7. Transferencias internacionales de datos

Algunos proveedores tecnológicos utilizados para el funcionamiento de la página web podrían tratar o almacenar información fuera del Espacio Económico Europeo.

En caso de que se produzcan transferencias internacionales de datos, estas se realizarán de conformidad con los requisitos establecidos en el RGPD, utilizando las garantías adecuadas, como decisiones de adecuación o cláusulas contractuales tipo, cuando corresponda.

8. ¿Cuáles son tus derechos?

Como usuario, tienes derecho a:

Acceso: conocer qué datos personales estamos tratando.

Rectificación: solicitar la corrección de datos incorrectos o incompletos.

Supresión: solicitar la eliminación de tus datos cuando corresponda.

Oposición: oponerte a determinados tratamientos.

Limitación: solicitar la limitación del tratamiento en los casos previstos legalmente.

Portabilidad: recibir tus datos en un formato estructurado cuando resulte aplicable.

Retirar el consentimiento: cuando el tratamiento se base en tu consentimiento.

Para ejercer cualquiera de estos derechos puedes enviar una solicitud a:

annawedstories@gmail.com

La solicitud deberá indicar el derecho que deseas ejercer y permitir verificar tu identidad cuando sea necesario.

También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):

https://www.aepd.es/

9. Seguridad de los datos

Anna WedStories adopta las medidas técnicas y organizativas razonables y apropiadas para proteger los datos personales frente a accesos no autorizados, pérdida, alteración, divulgación o tratamiento indebido.

El acceso a los datos personales estará limitado a las personas y proveedores que necesiten conocerlos para prestar los servicios correspondientes.

10. Fotografías y vídeos de bodas

En el desarrollo de nuestros servicios profesionales de creación de contenido para bodas podemos realizar fotografías y vídeos en los que aparezcan los novios, invitados y otras personas asistentes.

El tratamiento, almacenamiento, entrega y posible publicación de este material se realizará de acuerdo con las condiciones contractuales, la normativa de protección de datos y los derechos de imagen aplicables.

La utilización de fotografías y vídeos de clientes o invitados con fines promocionales, publicitarios o de publicación en redes sociales requerirá la correspondiente autorización cuando sea legalmente necesaria.

11. Enlaces a redes sociales y páginas externas

Nuestra página web puede contener enlaces a plataformas externas, especialmente Instagram.

Al acceder a estas plataformas, el usuario queda sujeto a sus propias políticas de privacidad y condiciones de uso.

Anna WedStories no es responsable de las prácticas de privacidad de dichas plataformas.

12. Cookies

Esta página web no utiliza cookies publicitarias ni herramientas de analítica web, según la configuración actualmente declarada.

No obstante, pueden existir cookies técnicas necesarias para el funcionamiento de la web o cookies y tecnologías de terceros asociadas a servicios externos.

Para obtener información detallada sobre las cookies utilizadas y su gestión, consulta nuestra Política de Cookies.

13. Modificaciones de la Política de Privacidad

Anna WedStories se reserva el derecho de actualizar esta Política de Privacidad cuando resulte necesario para adaptarla a cambios legislativos, técnicos o en los servicios ofrecidos.

La versión vigente estará siempre disponible en:

https://anna-wedstories.com/privacy

14. Contacto

Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes ponerte en contacto con nosotros a través de:

Anna WedStories

Email: annawedstories@gmail.com

Web: https://anna-wedstories.com/

Málaga, España.`}</p>
        <p className="italic text-taupe">{`Anna WedStories

Email: annawedstories@gmail.com

Web: https://anna-wedstories.com/

Málaga, España.`}</p>
        <p>This website does not use advertising or analytics cookies.</p>
      </div>
    </main>
  );
}

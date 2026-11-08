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
      <h1 className="headline mt-8">POLÍTICA DE PRIVACIDAD</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <p>{"Anna WedStories"}</p>
        <p>{"Última actualización: 8 de noviembre de 2026"}</p>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"1. Responsable del tratamiento"}</h2>
          <p>{"En cumplimiento del Reglamento General de Protección de Datos (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), se informa de que los datos personales recogidos a través de esta página web serán tratados por:"}</p>
          <p>{"Responsable: Anna Krassowska"}</p>
          <p>{"Nombre comercial: Anna WedStories"}</p>
          <p>{"Domicilio: Calle Cortes El Viejo 4"}</p>
          <p>{"Ubicación: Málaga, España"}</p>
          <p>{"Correo electrónico: annawedstories@gmail.com"}</p>
          <p>{"Sitio web: https://anna-wedstories.com/"}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"2. ¿Qué datos personales recopilamos?"}</h2>
          <p>{"A través de nuestra página web y del formulario de contacto podemos recopilar los siguientes datos:"}</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>{"Nombre y apellidos."}</li>
            <li>{"Dirección de correo electrónico."}</li>
            <li>{"Número de teléfono o WhatsApp."}</li>
            <li>{"Fecha de la boda."}</li>
            <li>{"Lugar de celebración de la boda."}</li>
            <li>{"Información adicional que el usuario decida compartir voluntariamente en su mensaje."}</li>
          </ul>
          <p>{"No solicitamos intencionadamente datos personales especialmente protegidos."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"3. ¿Con qué finalidad utilizamos tus datos?"}</h2>
          <p>{"Los datos personales se utilizan exclusivamente para las siguientes finalidades:"}</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>{"Atender las consultas y solicitudes de información recibidas."}</li>
            <li>{"Comprobar la disponibilidad para la fecha de celebración de la boda."}</li>
            <li>{"Enviar información sobre nuestros servicios de creación de contenido audiovisual para bodas."}</li>
            <li>{"Preparar presupuestos y propuestas personalizadas."}</li>
            <li>{"Gestionar la relación profesional y contractual con los clientes."}</li>
            <li>{"Cumplir las obligaciones legales y fiscales correspondientes."}</li>
          </ul>
          <p>{"No utilizaremos tus datos para enviarte comunicaciones comerciales no solicitadas."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"4. ¿Cuál es la base legal para el tratamiento?"}</h2>
          <p>{"El tratamiento de los datos personales se realiza sobre las siguientes bases jurídicas:"}</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>{"Medidas precontractuales: cuando solicitas información sobre nuestros servicios o un presupuesto."}</li>
            <li>{"Ejecución de un contrato: cuando contratas nuestros servicios."}</li>
            <li>{"Cumplimiento de obligaciones legales: cuando sea necesario conservar determinados datos por motivos fiscales o administrativos."}</li>
            <li>{"Consentimiento: cuando sea necesario para finalidades adicionales que requieran tu autorización."}</li>
          </ul>
          <p>{"En los casos en los que el tratamiento se base en el consentimiento, podrás retirarlo en cualquier momento."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"5. ¿Durante cuánto tiempo conservamos tus datos?"}</h2>
          <p>{"Los datos personales se conservarán durante el tiempo necesario para atender tu solicitud y gestionar la posible relación comercial."}</p>
          <p>{"Cuando exista una relación contractual, los datos se conservarán mientras dure la prestación del servicio y posteriormente durante los plazos exigidos por la legislación aplicable."}</p>
          <p>{"Los datos utilizados para atender consultas que no den lugar a una contratación se conservarán durante el plazo de [indicar plazo] y posteriormente serán eliminados, salvo que exista una obligación legal que justifique su conservación."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"6. ¿Compartimos tus datos con terceros?"}</h2>
          <p>{"Anna WedStories no vende ni cede datos personales a terceros con fines comerciales."}</p>
          <p>{"No obstante, para el funcionamiento de la página web y la gestión de las solicitudes, pueden intervenir proveedores tecnológicos que prestan servicios de alojamiento, mantenimiento y gestión de formularios."}</p>
          <p>{"En particular, el formulario de contacto está gestionado mediante la plataforma Tally."}</p>
          <p>{"Estos proveedores podrán tratar los datos personales únicamente en la medida necesaria para prestar sus servicios y conforme a las garantías y condiciones de protección de datos aplicables."}</p>
          <p>{"Cuando sea necesario, se formalizarán los correspondientes acuerdos de tratamiento de datos."}</p>
          <p>{"Asimismo, los datos podrán comunicarse a las autoridades públicas cuando exista una obligación legal."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"7. Transferencias internacionales de datos"}</h2>
          <p>{"Algunos proveedores tecnológicos utilizados para el funcionamiento de la página web podrían tratar o almacenar información fuera del Espacio Económico Europeo."}</p>
          <p>{"En caso de que se produzcan transferencias internacionales de datos, estas se realizarán de conformidad con los requisitos establecidos en el RGPD, utilizando las garantías adecuadas, como decisiones de adecuación o cláusulas contractuales tipo, cuando corresponda."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"8. ¿Cuáles son tus derechos?"}</h2>
          <p>{"Como usuario, tienes derecho a:"}</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>{"Acceso: conocer qué datos personales estamos tratando."}</li>
            <li>{"Rectificación: solicitar la corrección de datos incorrectos o incompletos."}</li>
            <li>{"Supresión: solicitar la eliminación de tus datos cuando corresponda."}</li>
            <li>{"Oposición: oponerte a determinados tratamientos."}</li>
            <li>{"Limitación: solicitar la limitación del tratamiento en los casos previstos legalmente."}</li>
            <li>{"Portabilidad: recibir tus datos en un formato estructurado cuando resulte aplicable."}</li>
            <li>{"Retirar el consentimiento: cuando el tratamiento se base en tu consentimiento."}</li>
          </ul>
          <p>{"Para ejercer cualquiera de estos derechos puedes enviar una solicitud a:"}</p>
          <p>{"annawedstories@gmail.com"}</p>
          <p>{"La solicitud deberá indicar el derecho que deseas ejercer y permitir verificar tu identidad cuando sea necesario."}</p>
          <p>{"También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):"}</p>
          <p>{"https://www.aepd.es/"}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"9. Seguridad de los datos"}</h2>
          <p>{"Anna WedStories adopta las medidas técnicas y organizativas razonables y apropiadas para proteger los datos personales frente a accesos no autorizados, pérdida, alteración, divulgación o tratamiento indebido."}</p>
          <p>{"El acceso a los datos personales estará limitado a las personas y proveedores que necesiten conocerlos para prestar los servicios correspondientes."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"10. Fotografías y vídeos de bodas"}</h2>
          <p>{"En el desarrollo de nuestros servicios profesionales de creación de contenido para bodas podemos realizar fotografías y vídeos en los que aparezcan los novios, invitados y otras personas asistentes."}</p>
          <p>{"El tratamiento, almacenamiento, entrega y posible publicación de este material se realizará de acuerdo con las condiciones contractuales, la normativa de protección de datos y los derechos de imagen aplicables."}</p>
          <p>{"La utilización de fotografías y vídeos de clientes o invitados con fines promocionales, publicitarios o de publicación en redes sociales requerirá la correspondiente autorización cuando sea legalmente necesaria."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"11. Enlaces a redes sociales y páginas externas"}</h2>
          <p>{"Nuestra página web puede contener enlaces a plataformas externas, especialmente Instagram."}</p>
          <p>{"Al acceder a estas plataformas, el usuario queda sujeto a sus propias políticas de privacidad y condiciones de uso."}</p>
          <p>{"Anna WedStories no es responsable de las prácticas de privacidad de dichas plataformas."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"12. Cookies"}</h2>
          <p>{"Esta página web no utiliza cookies publicitarias ni herramientas de analítica web, según la configuración actualmente declarada."}</p>
          <p>{"No obstante, pueden existir cookies técnicas necesarias para el funcionamiento de la web o cookies y tecnologías de terceros asociadas a servicios externos."}</p>
          <p>{"Para obtener información detallada sobre las cookies utilizadas y su gestión, consulta nuestra Política de Cookies."}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"13. Modificaciones de la Política de Privacidad"}</h2>
          <p>{"Anna WedStories se reserva el derecho de actualizar esta Política de Privacidad cuando resulte necesario para adaptarla a cambios legislativos, técnicos o en los servicios ofrecidos."}</p>
          <p>{"La versión vigente estará siempre disponible en:"}</p>
          <p>{"https://anna-wedstories.com/privacy"}</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">{"14. Contacto"}</h2>
          <p>{"Si tienes alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de tus datos personales, puedes ponerte en contacto con nosotros a través de:"}</p>
          <p>{"Anna WedStories"}</p>
          <p>{"Email: annawedstories@gmail.com"}</p>
          <p>{"Web: https://anna-wedstories.com/"}</p>
          <p>{"Málaga, España."}</p>
        </section>
        <p className="whitespace-pre-line italic text-taupe">{`Anna WedStories

Email: annawedstories@gmail.com

Web: https://anna-wedstories.com/

Málaga, España.`}</p>
        <p>This website does not use advertising or analytics cookies.</p>
      </div>
    </main>
  );
}

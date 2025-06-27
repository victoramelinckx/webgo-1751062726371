
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="WebGo crea tu sitio de ventas rápido y con soporte 24/7, para que puedas expandir tu negocio sin complicaciones." cta1="Solicita Ahora" />
<How step1Title="Comienza Rápido" step1Desc="Envía tu idea y detalles del negocio." step2Title="Web en 24 Horas" step2Desc="Creamos tu sitio de ventas eficiente." step3Title="Soporte 24/7" step3Desc="Solución continua para aumentar tus ventas." />
<Aboutus headline="WebGo: Impulsa tus ventas digitales" subheadline="Transformamos tu negocio con estrategias digitales que maximizan ventas online sin complicaciones." beneficiotitulo1="Curso Express" beneficio1="Simplifica ventas online rápidamente." beneficiotitulo2="Gestión Eficiente" beneficio2="Ahorra tiempo optimizando tu web." />
<Services heading="Optimiza y Expande Tus Ventas en Santiago" description="Express (Precio: 111) - Curso crea ventas online sin complicaciones ni pérdida de tiempo." services={[{"name":"Diseño Web Express","icon":"bolt","description":"Web lista para vender en 24 horas."},{"name":"SEO Local","icon":"map-marker","description":"Atrae clientes de Santiago fácilmente."},{"name":"Estrategia Digital","icon":"chart-line","description":"Planes personalizados que aumentan ventas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia constante para tu tranquilidad."},{"name":"Gestión de Contenido","icon":"edit","description":"Mantenemos tu web siempre fresca."},{"name":"Integración de Plataformas","icon":"puzzle-piece","description":"Conecta todas tus herramientas digitales."}]} />
<BeforeAndAfter subheadline="Proyectos que transforman ideas en impresionantes realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a generar ventas online si no tengo tiempo para gestionar un sitio web?","respuesta":"WebGo ofrece un servicio Express que se encarga de todo por ti. Puedes centrarte en tu negocio mientras nosotros gestionamos tu presencia en línea, asegurando que atraigas más clientes potenciales sin esfuerzo adicional de tu parte."},{"pregunta":"¿Qué beneficios obtengo al tomar el curso de WebGo para optimizar mis procesos de venta?","respuesta":"El curso de WebGo te enseña estrategias digitales efectivas para expandir tu alcance. Aprenderás a llegar a más clientes potenciales y aumentar tus ventas de manera sostenible, todo sin depender únicamente de recomendaciones."},{"pregunta":"¿Cuáles son las ventajas de elegir el servicio Express de WebGo para mi pequeño negocio?","respuesta":"El servicio Express de WebGo, a un precio accesible de 111, proporciona una solución completa para llevar tu negocio al mundo digital. Te permite aumentar tu visibilidad y ventas online sin tener que preocuparte por la gestión diaria de la web."},{"pregunta":"¿Cómo ayuda WebGo a dueños de negocios que no saben cómo generar ventas online?","respuesta":"WebGo se especializa en diseñar estrategias personalizadas que facilitan la venta online. Ya sea a través de cursos o servicios gestionados, te guiamos paso a paso para que puedas captar más clientes y aumentar tus ingresos."},{"pregunta":"¿Por qué debería elegir WebGo para implementar estrategias digitales en mi negocio?","respuesta":"WebGo entiende los desafíos de los dueños de pequeños negocios y ofrece soluciones adaptadas a tus necesidades. Con nuestro apoyo, puedes transformar tu presencia online y ver un crecimiento real en tus ventas."}]} />
<BookAppointment 
                      heading="Desbloquea Ventas Digitales Ahora" 
                      description="Aprende estrategias de venta online con nuestro curso Express y expande tu negocio sin complicaciones. ¡Inscríbete y transforma tu presencia digital hoy!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}

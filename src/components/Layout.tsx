import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Sectores",
    "href": "#expertise"
  },
  {
    "name": "Sobre Nosotros",
    "href": "#about"
  },
  {
    "name": "Testimonios",
    "href": "#testimonials"
  },
  {
    "name": "Resultados",
    "href": "#metrics"
  },
  {
    "name": "Preguntas",
    "href": "#faq"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Meridian"
      ctaButton={{
        text: "Contactar",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Meridian Agency"
      columns={[
        {
          title: "Empresa",
          items: [
            {
              label: "Sobre Nosotros",
              href: "#about",
            },
            {
              label: "Sectores",
              href: "#expertise",
            },
          ],
        },
        {
          title: "Servicios",
          items: [
            {
              label: "Restaurantes",
              href: "#expertise",
            },
            {
              label: "Clínicas",
              href: "#expertise",
            },
            {
              label: "Gimnasios",
              href: "#expertise",
            },
            {
              label: "Comercios",
              href: "#expertise",
            },
          ],
        },
      ]}
      copyright="© 2024 Meridian Agency. Todos los derechos reservados."
      links={[
        {
          label: "Política de Privacidad",
          href: "#",
        },
        {
          label: "Términos de Servicio",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

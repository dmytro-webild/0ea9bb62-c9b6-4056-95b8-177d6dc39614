import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Meridian Agency"
      description="We build high-performance digital experiences for modern businesses. From restaurants to clinics, we scale your brand online."
      primaryButton={{
        text: "Start Project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "See Work",
        href: "#expertise",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301562.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="Digital presence is no longer optional; it's the foundation of modern commerce. We bridge the gap between your brand's vision and your customers' digital reality."
      author="Elena Vance"
      role="Founder, Meridian Agency"
      imageSrc="http://img.b2bpic.net/free-photo/diverse-business-colleagues-with-digital-tablet-discussing-project_74855-1778.jpg"
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="expertise" data-section="expertise">
    <SectionErrorBoundary name="expertise">
          <FeaturesImageBento
      tag="Expertise"
      title="Solutions for every sector"
      description="We specialize in high-conversion web solutions for diverse industries."
      items={[
        {
          title: "Restaurants",
          description: "Menus and booking systems that increase tables turnover.",
          imageSrc: "http://img.b2bpic.net/free-photo/wine-glass_1203-2992.jpg",
        },
        {
          title: "Clinics",
          description: "Patient portals and secure booking for healthcare providers.",
          imageSrc: "http://img.b2bpic.net/free-photo/living-room-with-white-couch-coffee-table_188544-18668.jpg",
        },
        {
          title: "Gyms",
          description: "Membership platforms and scheduling for fitness centers.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-gym-equipment_23-2148197730.jpg",
        },
        {
          title: "Retail",
          description: "E-commerce solutions for modern commerce.",
          imageSrc: "http://img.b2bpic.net/free-photo/turquoise-wooden-table-front-shopping-mall_23-2147907236.jpg",
        },
        {
          title: "Salons",
          description: "Appointment management and service catalogs.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-woman-with-makeup-brushes_23-2148113369.jpg",
        },
        {
          title: "Cafes",
          description: "Local presence optimization and digital ordering.",
          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-6425.jpg",
        },
        {
          title: "Co-working",
          description: "Desks booking and space management platforms.",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-with-headset-using-computer_482257-120429.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Social Proof"
      title="Client Success"
      description="Don't take our word for it."
      testimonials={[
        {
          name: "David M.",
          role: "Restaurant Owner",
          quote: "Meridian boosted our table bookings by 40% in just two months.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-with-crossed-arms_23-2147955274.jpg",
        },
        {
          name: "Sarah P.",
          role: "Clinic Director",
          quote: "Seamless patient portal. Best investment we've made this year.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-corporate-woman-beige-suit-standing-street-city-with-wireless-headphones_1258-194021.jpg",
        },
        {
          name: "Marcus L.",
          role: "Gym Founder",
          quote: "Modern design, easy to use. Our members love the new app.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-business-worker-using-vr-glasses-working-office_839833-10645.jpg",
        },
        {
          name: "Elena R.",
          role: "Boutique Owner",
          quote: "Conversion rates have doubled since we launched with Meridian.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-middle-aged-business-woman_1262-3085.jpg",
        },
        {
          name: "Lucas F.",
          role: "Cafe Owner",
          quote: "The local presence they built has driven more foot traffic.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Results"
      title="By the numbers"
      description="Measurable impact on every project we take on."
      metrics={[
        {
          value: "150+",
          description: "Projects Delivered",
        },
        {
          value: "40%",
          description: "Average Revenue Growth",
        },
        {
          value: "95%",
          description: "Client Retention Rate",
        },
        {
          value: "24h",
          description: "Average Support Response",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Knowledge Hub"
      title="Frequently asked questions"
      description="Everything you need to know about working with us."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "How long does a typical project take?",
              answer: "Most web builds take between 4-8 weeks depending on complexity.",
            },
            {
              question: "Do you offer maintenance?",
              answer: "Yes, we provide ongoing maintenance and security support packages.",
            },
          ],
        },
        {
          name: "Process",
          items: [
            {
              question: "How do we get started?",
              answer: "Simply fill out our contact form and we'll schedule a discovery call.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get in touch"
      text="Ready to scale your digital presence? Let's build something great together."
      primaryButton={{
        text: "Schedule Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:hello@meridian.agency",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

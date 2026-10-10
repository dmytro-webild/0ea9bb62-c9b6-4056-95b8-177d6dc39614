// AUTO-GENERATED shell by per-section-migrate.
// Sectores
ection bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSectores
ection from './HomePage/sections/Hero';
import AboutSectores
ection from './HomePage/sections/About';
import ExpertiseSectores
ection from './HomePage/sections/Expertise';
import TestimonialsSectores
ection from './HomePage/sections/Testimonials';
import MetricsSectores
ection from './HomePage/sections/Metrics';
import FaqSectores
ection from './HomePage/sections/Faq';
import ContactSectores
ection from './HomePage/sections/Contact';

export default function HomePage(): React.JSectores
X.Element {
  return (
<>
  <HeroSectores
ection />

  <AboutSectores
ection />

  <ExpertiseSectores
ection />

  <TestimonialsSectores
ection />

  <MetricsSectores
ection />

  <FaqSectores
ection />

  <ContactSectores
ection />
    </>
  );
}

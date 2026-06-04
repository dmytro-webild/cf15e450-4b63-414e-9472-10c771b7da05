"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, CheckCircle, Star, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Trusted By",
          id: "#trusted",
        },
        {
          name: "Why Choose Us",
          id: "#metrics",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414731.jpg"
      logoAlt="Gold Plumbing & Repiping Logo"
      brandName="Gold Plumbing & Repiping"
      bottomLeftText="Southern California"
      bottomRightText="Built to Last. Trusted to Perform."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Gold Plumbing & Repiping"
      description="Southern California's Premium Plumbing & Repiping Specialists.\nWhether you're dealing with recurring leaks, aging pipes, clogged drains, failing fixtures, or a complete home repipe, Gold Plumbing & Repiping delivers expert workmanship with white-glove service from start to finish."
      buttons={[
        {
          text: "REQUEST SERVICE",
          href: "#contact",
        },
        {
          text: "CALL NOW",
          href: "tel:+1-555-123-4567",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/aerator-closeup-copper-glow-modern-faucet_169016-69020.jpg",
          imageAlt: "Luxury bathroom with golden fixtures",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-interior-mall_23-2151591534.jpg",
          imageAlt: "Professional plumber working in upscale house",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/matte-black-kitchen-faucet-sink-with-drying-rack-blue-kitchen-minimal-interior_169016-69329.jpg",
          imageAlt: "Sleek modern kitchen sink plumbing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-mechanical-screws_23-2148557965.jpg",
          imageAlt: "Plumber giving consultation in luxury home",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/porcelain-apartment-elegant-home-english_1203-4745.jpg",
          imageAlt: "Technician checking water pressure in a clean home",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721530.jpg",
          imageAlt: "Plumber installing water filtration system",
        },
      ]}
    />
  </div>

  <div id="trusted" data-section="trusted">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Ritz-Carlton Residences",
        "The Peninsula Beverly Hills",
        "Four Seasons Properties",
        "Luxury Estates Group",
        "Pacific Coast Developers",
        "Elite Home Builders",
        "Premium Property Management",
      ]}
      title="Trusted By Homeowners Across Southern California"
      description="We're honored to be the trusted plumbing partner for prestigious properties and discerning homeowners across the region."
      tag="OUR PARTNERS"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "rating",
          value: "5.0",
          title: "Star Average",
          description: "Consistently exceeding expectations with top-tier service.",
          icon: Star,
        },
        {
          id: "experience",
          value: "20+",
          title: "Years Expertise",
          description: "Decades of proven experience in luxury plumbing solutions.",
          icon: Award,
        },
        {
          id: "satisfaction",
          value: "100%",
          title: "Satisfaction Rate",
          description: "Our commitment to quality ensures every job is done right.",
          icon: CheckCircle,
        },
        {
          id: "emergency",
          value: "24/7",
          title: "Emergency Service",
          description: "Available around the clock for urgent plumbing needs.",
          icon: Wrench,
        },
      ]}
      title="Your Home Deserves Better Plumbing."
      description="Discover why homeowners across Southern California choose Gold Plumbing & Repiping for lasting solutions and unparalleled service."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Honest Recommendations",
          description: "We explain the issue clearly and present the best solution—not the most expensive one.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990691.jpg",
          imageAlt: "Plumber explaining plumbing issue to homeowner with transparent recommendations",
          titleImageSrc: "",
          buttonText: "",
        },
        {
          title: "Clean Workmanship",
          description: "Our technicians respect your property and leave your home cleaner than they found it.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-plumber_23-2150746386.jpg",
          imageAlt: "Professional plumber cleaning up work area leaving it spotless",
          titleImageSrc: "",
          buttonText: "",
        },
        {
          title: "Long-Term Results",
          description: "We fix the root cause of problems rather than applying temporary patches.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg",
          imageAlt: "New copper piping installation ensuring long-term plumbing solutions",
          titleImageSrc: "",
          buttonText: "",
        },
        {
          title: "Premium Customer Experience",
          description: "Professional communication, punctual arrivals, and detailed workmanship every step of the way.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-white-bathrobe-filling-bath-with-water_259150-59743.jpg",
          imageAlt: "Plumber shaking hands with a satisfied client after premium service",
          titleImageSrc: "",
          buttonText: "",
        },
      ]}
      title="Precision Plumbing. Luxury-Level Service."
      description="Every home deserves a plumbing system that works flawlessly. Our team combines technical expertise with exceptional customer care to create an experience homeowners rarely find in the plumbing industry."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Lindsey D.",
          date: "2024",
          title: "Satisfied Homeowner",
          quote: "We had a loose toilet that rocked when sitting down. Their crew reset it properly and secured it tightly. They ensured the base was sealed well. It feels stable again. I'm very satisfied.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-portrait-smiling-happy-short-haired-girl-with-perfect-white-teeth-having-fun-windy-hairs-autumn-mood_273443-1541.jpg",
          avatarAlt: "Lindsey D. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/simply-bright-clean-design-bathroom_53876-146252.jpg",
          imageAlt: "Toilet repair in a luxury bathroom",
        },
        {
          id: "2",
          name: "Kevin E.",
          date: "2024",
          title: "Happy Client",
          quote: "Standing water in the bathtub made it hard to shower. Their plumbing team cleared the clog and flushed the drain. Water now empties quickly.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/stylish-bearded-male-dressed-suit-sunglasses-dark-grey-background_613910-12505.jpg",
          avatarAlt: "Kevin E. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-luxury-bathroom-interior-with-natural-stone-tiles-bathtub_1194-640320.jpg",
          imageAlt: "Bathtub drain clearing",
        },
        {
          id: "3",
          name: "Sophia B.",
          date: "2024",
          title: "Valued Customer",
          quote: "I contacted their crew once the kitchen pipes began vibrating loudly. They identified unsecured brackets, stabilized the lines properly and I truly value the quiet performance now.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-designer-looking-some-prints-choose-best-one-agency-employee_482257-32975.jpg",
          avatarAlt: "Sophia B. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-kitchen-drawer-with-wooden-dividers-interior-detail-modern-kitchen-island_169016-72791.jpg",
          imageAlt: "Kitchen pipe repair",
        },
        {
          id: "4",
          name: "Miah R.",
          date: "2024",
          title: "Trusted Service",
          quote: "The sink drain kept coming loose after use. The plumber reinstalled it correctly and secured it. No issues since then.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg",
          avatarAlt: "Miah R. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/solution-top-view-man-plumber-overalls-fixing-breakdown-sink_259150-58267.jpg",
          imageAlt: "Kitchen sink drain repair",
        },
        {
          id: "5",
          name: "Annabelle E.",
          date: "2024",
          title: "Efficient & Effective",
          quote: "Useful service that solved my issue fast. My drain was clogged. They cleared it properly. No more problems.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-caucasian-woman-closes-eyes-with-pleasure-smiles-gently_273609-17904.jpg",
          avatarAlt: "Annabelle E. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-view-camera-shutter_23-2150473160.jpg",
          imageAlt: "Cleared drain with flowing water",
        },
        {
          id: "6",
          name: "John M.",
          date: "2024",
          title: "Problem Solved",
          quote: "My upstairs bathroom drain was causing water noise downstairs. Their experts checked the vertical pipe system. The technician cleared blockage in the shared line. Everything is quiet and flowing properly.",
          tag: "5-Star Review",
          avatarSrc: "http://img.b2bpic.net/free-photo/elderly-man_23-2148138699.jpg",
          avatarAlt: "John M. avatar",
          imageSrc: "http://img.b2bpic.net/free-photo/prosthetist-man-making-prosthetic-leg-while-working-laboratory_627829-7187.jpg",
          imageAlt: "Bathroom vertical pipe system inspection",
        },
      ]}
      title="What Our Customers Say"
      description="Real feedback from satisfied homeowners who experienced the Gold Plumbing & Repiping difference."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Built on Craftsmanship. Driven by Integrity.",
        },
      ]}
      description="Gold Plumbing & Repiping was founded on a simple belief: Homeowners deserve plumbing professionals they can trust. We understand that plumbing problems create stress, disrupt daily life, and can cause costly property damage when left unresolved. That's why our team is committed to delivering dependable solutions with exceptional attention to detail, professionalism, and customer care. Whether we're clearing a drain, repairing a leak, or repiping an entire home, our mission remains the same: Deliver quality work that lasts. We take pride in building long-term relationships with homeowners who value honesty, reliability, and expert craftsmanship."
      imageSrc="http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721552.jpg"
      imageAlt="Professional plumber inspecting pipes in a luxury home"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready For A Permanent Solution?"
      description="Stop living with recurring plumbing issues. Let Gold Plumbing & Repiping restore comfort, reliability, and peace of mind to your home. Schedule Your Service Today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help you?",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990727.jpg"
      imageAlt="Luxury bathroom with professional plumbing tools"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="BOOK AN APPOINTMENT"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414731.jpg"
      logoAlt="Gold Plumbing & Repiping Logo"
      logoText="Gold Plumbing & Repiping"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Repiping Services",
              href: "#services",
            },
            {
              label: "Drain Solutions",
              href: "#services",
            },
            {
              label: "Plumbing Repairs",
              href: "#services",
            },
            {
              label: "Maintenance",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Gold Plumbing & Repiping. All rights reserved. Licensed • Insured • Residential • Commercial • Repiping Specialists ★★★★★ Trusted By Local Homeowners Since Day One."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

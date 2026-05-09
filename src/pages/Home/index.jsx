import { motion } from 'framer-motion'
import { pageTransition } from '../../animations/transitions'

import Navbar            from '../../components/layout/Navbar'
import Footer            from '../../components/layout/Footer'
import FloatingTicker    from '../../components/ui/FloatingTicker'

import HeroSection       from '../../sections/Hero'
import AboutSection      from '../../sections/About'
import ProgramsSection   from '../../sections/Programs'
import SessionPreview    from '../../sections/SessionPreview'
import WeeklyJourney     from '../../sections/WeeklyJourney'
import HowWeTeach        from '../../sections/HowWeTeach'
import ParentsLove       from '../../sections/ParentsLove'
import WhySanskaram      from '../../sections/WhySanskaram'
import FounderSection    from '../../sections/Founder'
import VoicesComing      from '../../sections/VoicesComing'
import ContactSection    from '../../sections/ContactSection'

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Navbar />
      <HeroSection />
      <FloatingTicker />
      <AboutSection />
      <ProgramsSection />
      <SessionPreview />
      <WeeklyJourney />
      <HowWeTeach />
      <ParentsLove />
      <WhySanskaram />
      <FounderSection />
      <VoicesComing />
      <ContactSection />
      <Footer />
    </motion.div>
  )
}

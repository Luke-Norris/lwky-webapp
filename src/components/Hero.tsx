import { motion } from 'framer-motion'
import DiscordIcon from './DiscordIcon'
import logo from '/images/lwkyLogoEnhanced.png'

const DISCORD_LINK = '#discord'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <motion.img
          src={logo}
          alt="Lwky"
          className="hero-logo"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        />

        <motion.p
          className="hero-tagline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Fortnite Creative Studios — building worlds worth playing.
          <br />
          Join the community and drop into our latest creations.
        </motion.p>

        <motion.div
          className="hero-actions"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href={DISCORD_LINK} className="btn-discord" target="_blank" rel="noopener noreferrer">
            <DiscordIcon />
            Join our Discord
          </a>
          <a href="#maps" className="btn-secondary">
            Explore Maps
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="#maps" className="hero-scroll-indicator">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>
  )
}

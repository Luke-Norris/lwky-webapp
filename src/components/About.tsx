import { motion } from 'framer-motion'
import DiscordIcon from './DiscordIcon'

const DISCORD_LINK = '#discord'

const stats = [
  { value: '6+', label: 'Maps Released' },
  { value: '50K+', label: 'Players' },
  { value: '2024', label: 'Founded' },
  { value: '10+', label: 'Creators' },
]

export default function About() {
  return (
    <>
      <section className="section about" id="about">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Built by players,<br />for players.</h2>
            <p>
              Lwky is a Fortnite creative studio and community focused on crafting
              unique, high-quality experiences. From competitive arenas to immersive
              adventures, we push the boundaries of what's possible in Creative mode.
            </p>
            <p>
              Our team of creators, designers, and builders work together to deliver
              maps that players actually want to come back to. We're always cooking
              something new — join us on Discord to stay in the loop.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Discord CTA Banner */}
      <motion.div
        className="cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">Ready to drop in?</h2>
          <p className="cta-banner-desc">
            Join our Discord to find squads, get early access to new maps,
            and connect with the Lwky community.
          </p>
          <a href={DISCORD_LINK} className="btn-discord" target="_blank" rel="noopener noreferrer">
            <DiscordIcon />
            Join our Discord
          </a>
        </div>
      </motion.div>
    </>
  )
}

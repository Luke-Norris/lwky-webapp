import { motion } from 'framer-motion'
import DiscordIcon from './DiscordIcon'
import logo from '/images/lwkyLogoEnhanced.png'

const DISCORD_LINK = '#discord'

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <a href="#" className="navbar-logo">
        <img src={logo} alt="Lwky" />
      </a>

      <ul className="navbar-links">
        <li><a href="#maps">Maps</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a href={DISCORD_LINK} className="navbar-discord" target="_blank" rel="noopener noreferrer">
            <DiscordIcon size={18} />
            Discord
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}

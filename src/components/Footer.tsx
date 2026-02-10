import logo from '/images/lwkyLogoEnhanced.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img src={logo} alt="Lwky" />
          <span>Lwky Creative Studios</span>
        </div>
        <div className="footer-right">
          &copy; {new Date().getFullYear()} Lwky. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

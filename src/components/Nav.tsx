import { useState } from 'react'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
]

type NavProps = { name: string }

export default function Nav({ name }: NavProps) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="nav-logo" href="#about" onClick={closeMenu} aria-label={`${name} homepage`}>
          {name}
        </a>
        <ul className="nav-links" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-nav${open ? ' open' : ''}`} id="mobile-nav" aria-hidden={!open}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu} tabIndex={open ? 0 : -1}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
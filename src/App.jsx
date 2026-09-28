import { useState, useEffect } from 'react'
import './App.css'

const WA_URL = 'https://wa.me/51914022340?text=Hola%2C%20quiero%20consultar%20sobre%20sus%20servicios'
const IG_URL = 'https://www.instagram.com/jaeautomotriz/'
const FB_URL = 'https://www.facebook.com/jaeautomotrizoficial/'
const TK_URL = 'https://www.tiktok.com/@jaeautomotriz'
const PHONE = '+51 914 022 340'
const ADDRESS = 'Carr. Fernando Belaunde Terry 840, Juanjui'

/* ===== SVG ICONS ===== */

function WaIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function IgIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function FbIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function TkIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

function PhoneIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  )
}

function MapIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function WrenchIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
    </svg>
  )
}

function EngineIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10h10v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z"/><path d="M9 10V7a1 1 0 011-1h4a1 1 0 011 1v3"/><path d="M5 14h-2"/><path d="M21 14h-2"/><path d="M12 6V4"/><path d="M10 18v2"/><path d="M14 18v2"/>
    </svg>
  )
}

function LightningIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function SuspensionIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="19" r="2"/><path d="M12 17V8"/><path d="M7 5l5 3 5-3"/><path d="M7 5v3"/><path d="M17 5v3"/>
    </svg>
  )
}

function SnowflakeIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M20 16l-4-4 4-4"/><path d="M4 8l4 4-4 4"/><path d="M16 4l-4 4-4-4"/><path d="M8 20l4-4 4 4"/>
    </svg>
  )
}

function GearIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

function CheckIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

function ShieldIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function WalletIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="5" width="22" height="16" rx="2" ry="2"/><path d="M1 10h22"/><circle cx="18" cy="15" r="1"/>
    </svg>
  )
}

function ScanIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>
    </svg>
  )
}

function StarIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function QuoteIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z"/>
    </svg>
  )
}

function ImagePlaceholder({ text = 'Foto' }) {
  return (
    <div className="img-placeholder">
      <span>{text}</span>
    </div>
  )
}

/* ===== DATA ===== */

const services = [
  { icon: WrenchIcon, title: 'Mantenimiento Preventivo', desc: 'Cambio de aceite, filtros, bujias, revision de frenos y mas. Mantiene tu vehiculo en optimas condiciones.' },
  { icon: EngineIcon, title: 'Reparacion de Motor', desc: 'Diagnostico y reparacion completa de motores. Trabajo especializado con garantia en cada servicio.' },
  { icon: LightningIcon, title: 'Sistema Electrico', desc: 'Diagnostico computarizado, reparacion de alternadores, arrancadores y todo el sistema electrico.' },
  { icon: SuspensionIcon, title: 'Suspension y Direccion', desc: 'Alineamiento, balanceo, cambio de amortiguadores y reparacion del sistema de suspension.' },
  { icon: SnowflakeIcon, title: 'Aire Acondicionado', desc: 'Recarga de gas, mantenimiento y reparacion del sistema de climatizacion vehicular.' },
  { icon: GearIcon, title: 'Caja de Cambios', desc: 'Revision, mantenimiento y reparacion de cajas mecanicas y automaticas. Servicio multimarca.' },
]

const testimonials = [
  { name: 'Carlos M.', initials: 'CM', vehicle: 'Toyota Hilux', text: 'Excelente servicio. Llevaron mi camioneta y me la entregaron como nueva. Muy profesionales y puntuales con los tiempos.' },
  { name: 'Maria L.', initials: 'ML', vehicle: 'Hyundai Accent', text: 'El mejor taller de Juanjui sin duda. Precios justos y siempre explican con detalle todo lo que le hacen al auto.' },
  { name: 'Jorge P.', initials: 'JP', vehicle: 'Nissan Frontier', text: 'Llevo anos confiando en JAE para todos mis vehiculos. Trabajo de calidad y siempre con repuestos originales.' },
]

const galleryItems = [
  { title: 'Mantenimiento' },
  { title: 'Motores' },
  { title: 'Electrico' },
  { title: 'Frenos' },
  { title: 'Transmision' },
  { title: 'Multimarca' },
]

const brands = ['Toyota', 'Hyundai', 'Nissan', 'Kia', 'Chevrolet', 'Suzuki', 'Mitsubishi', 'Honda', 'Ford', 'Mazda', 'Volkswagen', 'Renault']

/* ===== APP ===== */

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-contact">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}><PhoneIcon size={14} /> <span>{PHONE}</span></a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"><WaIcon size={14} /> <span>WhatsApp</span></a>
          </div>
          <div className="topbar-social">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon size={16} /></a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IgIcon size={16} /></a>
            <a href={TK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TkIcon size={16} /></a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">JAE</div>
            <div>
              <div className="nav-logo-text">JAE Automotriz</div>
              <div className="nav-logo-sub">Taller Multimarca</div>
            </div>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#servicios" onClick={close}>Servicios</a>
            <a href="#nosotros" onClick={close}>Nosotros</a>
            <a href="#galeria" onClick={close}>Galeria</a>
            <a href="#testimonios" onClick={close}>Opiniones</a>
            <a href="#ubicacion" onClick={close}>Contacto</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-accent nav-cta" onClick={close}>
              <WaIcon size={16} /> Cotizar
            </a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && <div className="nav-overlay" onClick={close} />}
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-bg-image" style={{ backgroundImage: 'url(/hero.png)' }} />
        </div>
        <div className="hero-gradient" />
        <div className="hero-diagonal" />
        <div className="hero-line" />
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-content">
            <h1>
              JAE<br/>
              <span className="highlight">Automotriz</span>
            </h1>
            <p className="hero-slogan">
              Calidad, tecnologia y confianza en cada servicio.
            </p>
            <p className="hero-desc">
              Taller multimarca especializado en brindar soluciones mecanicas integrales. Diagnostico computarizado, reparacion y mantenimiento con garantia en Juanjui.
            </p>
            <div className="hero-buttons">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WaIcon size={20} /> Reserva tu cita
              </a>
              <a href="#servicios" className="btn btn-ghost">
                Nuestros servicios
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>100<span>+</span></h3>
                <p>Clientes</p>
              </div>
              <div className="hero-stat">
                <h3>10<span>+</span></h3>
                <p>Anos exp.</p>
              </div>
              <div className="hero-stat">
                <h3>100<span>%</span></h3>
                <p>Garantia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <div className="brands">
        <div className="brands-track">
          {[...brands, ...brands].map((b, i) => (
            <span className="brand-item" key={i}>{b}</span>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="section services">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Servicios</div>
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="section-subtitle">Soluciones completas para mantener tu vehiculo en perfecto estado.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div className="service-card" key={i}>
                  <div className="service-icon-wrap">
                    <Icon size={26} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section about">
        <div className="container">
          <div className="about-content">
            <div className="about-visual">
              <div className="about-visual-main">
                <ImagePlaceholder text="Foto del taller" />
              </div>
              <div className="about-visual-badge">
                <h4>10+</h4>
                <p>Anos de experiencia</p>
              </div>
            </div>
            <div className="about-text">
              <div className="section-tag">Sobre nosotros</div>
              <h2>Pasion por los vehiculos, compromiso con la calidad</h2>
              <p>
                En JAE Automotriz combinamos experiencia, tecnologia y dedicacion para ofrecer el mejor servicio automotriz en Juanjui. Trabajamos con todas las marcas y modelos.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><CheckIcon size={20} /></div>
                  <div>
                    <h4>Tecnicos certificados</h4>
                    <p>Personal capacitado y actualizado</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><ShieldIcon size={20} /></div>
                  <div>
                    <h4>Garantia total</h4>
                    <p>Todos los trabajos con garantia</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><WalletIcon size={20} /></div>
                  <div>
                    <h4>Precios justos</h4>
                    <p>Sin costos ocultos ni sorpresas</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><ScanIcon size={20} /></div>
                  <div>
                    <h4>Scanner automotriz</h4>
                    <p>Diagnostico computarizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Galeria</div>
            <h2 className="section-title">Nuestros trabajos</h2>
            <p className="section-subtitle">Cada vehiculo recibe atencion personalizada y un trabajo impecable.</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div className="gallery-item" key={i}>
                <ImagePlaceholder text={item.title} />
                <div className="gallery-item-overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="section testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Opiniones</div>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-subtitle">La satisfaccion de nuestros clientes es nuestra mayor recompensa.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote"><QuoteIcon /></div>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => (
                    <span className="testimonial-star" key={j}><StarIcon size={16} /></span>
                  ))}
                </div>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.vehicle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-inner">
            <h2>¿Tu vehiculo necesita atencion?</h2>
            <p>Contactanos ahora y recibe un diagnostico profesional. Estamos listos para ayudarte.</p>
            <div className="cta-buttons">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WaIcon size={20} /> Escribir por WhatsApp
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="btn btn-outline">
                <PhoneIcon /> Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="section location">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Contacto</div>
            <h2 className="section-title">Encuentranos en Juanjui</h2>
            <p className="section-subtitle">Visitanos y conoce nuestro taller. Estamos listos para atenderte.</p>
          </div>
          <div className="location-content">
            <div className="location-info">
              <div className="location-item">
                <div className="location-item-icon"><MapIcon size={22} /></div>
                <div>
                  <h4>Direccion</h4>
                  <p>{ADDRESS}</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon"><PhoneIcon size={22} /></div>
                <div>
                  <h4>Telefono / WhatsApp</h4>
                  <p><a href={WA_URL} target="_blank" rel="noopener noreferrer">{PHONE}</a></p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon"><ClockIcon size={22} /></div>
                <div>
                  <h4>Horario</h4>
                  <p>Lunes a Sabado: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-item-icon"><MapIcon size={22} /></div>
                <div>
                  <h4>Redes Sociales</h4>
                  <div className="location-socials">
                    <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FbIcon size={20} /></a>
                    <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><IgIcon size={20} /></a>
                    <a href={TK_URL} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok"><TkIcon size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15920.944752879696!2d-76.72976!3d-7.1784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b9085e4d7b5b05%3A0x8b2eb18e4eaa2dd5!2sJuanju%C3%AD!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion JAE Automotriz"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-logo">
                <div className="nav-logo-icon">JAE</div>
                <div>
                  <div className="nav-logo-text">JAE Automotriz</div>
                  <div className="nav-logo-sub">Taller Multimarca</div>
                </div>
              </a>
              <p>Taller automotriz multimarca especializado en brindar un servicio de calidad con soluciones mecanicas integrales en Juanjui.</p>
            </div>
            <div className="footer-col">
              <h4>Navegacion</h4>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#galeria">Galeria</a>
              <a href="#testimonios">Opiniones</a>
            </div>
            <div className="footer-col">
              <h4>Servicios</h4>
              <a href="#servicios">Mantenimiento</a>
              <a href="#servicios">Reparacion</a>
              <a href="#servicios">Electrico</a>
              <a href="#servicios">Suspension</a>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">{PHONE}</a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#ubicacion">Juanjui, Peru</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} JAE Automotriz. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <WaIcon size={34} />
      </a>
    </>
  )
}

export default App

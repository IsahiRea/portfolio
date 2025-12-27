import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../utils/portfolioHelpers'
import {
  CheckIcon,
  ZoomIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
  ArrowIcon
} from '../assets/icons'
import '../styles/components/PortfolioItem.css'


export default function PortfolioItem() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Memoized callbacks to prevent unnecessary re-renders
  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setCurrentImageIndex(0)
  }, [])

  const nextImage = useCallback(() => {
    if (project?.images?.screenshots) {
      setCurrentImageIndex((prev) =>
        (prev + 1) % project.images.screenshots.length
      )
    }
  }, [project])

  const prevImage = useCallback(() => {
    if (project?.images?.screenshots) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.screenshots.length - 1 : prev - 1
      )
    }
  }, [project])

  // Handle body overflow when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [lightboxOpen])

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, nextImage, prevImage])

  // Early return for not found case
  if (!project) {
    return (
      <div className="case-study">
        <div className="case-study__not-found">
          <span className="case-study__not-found-code">404</span>
          <h1>Project Not Found</h1>
          <p>The case study you're looking for doesn't exist or has been moved.</p>
          <Link to="/#work" className="case-study__back-link">
            <ArrowIcon />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    )
  }

  const hasScreenshots = project.images?.screenshots?.length > 0
  const hasMultipleScreenshots = project.images?.screenshots?.length > 1

  // Calculate total tech count
  const techCount = (project.technologies?.frontend?.length || 0) +
    (project.technologies?.backend?.length || 0) +
    (project.technologies?.tools?.length || 0)

  return (
    <article className="case-study">
      {/* Hero Section */}
      <header className="case-study__hero">
        <div className="case-study__hero-bg">
          <img
            src={project.images.hero || project.images.thumbnail}
            alt=""
            className="case-study__hero-bg-img"
          />
          <div className="case-study__hero-overlay" />
        </div>

        <div className="case-study__hero-content">
          <div className="case-study__breadcrumb">
            <Link to="/#work">Work</Link>
            <span className="case-study__breadcrumb-sep">/</span>
            <span>{project.title}</span>
          </div>

          <div className="case-study__hero-text">
            <p className="case-study__category">{project.subtitle}</p>
            <h1 className="case-study__title">{project.title}</h1>
            <p className="case-study__tagline">{project.shortDescription}</p>
          </div>

          <div className="case-study__hero-meta">
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Year</span>
              <span className="case-study__meta-value">
                {project.date ? new Date(project.date).getFullYear() : 'N/A'}
              </span>
            </div>
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Type</span>
              <span className="case-study__meta-value">{project.category}</span>
            </div>
            <div className="case-study__meta-item">
              <span className="case-study__meta-label">Technologies</span>
              <span className="case-study__meta-value">{techCount} tools</span>
            </div>
          </div>
        </div>

        <div className="case-study__scroll-indicator">
          <span>Scroll to explore</span>
          <div className="case-study__scroll-line" />
        </div>
      </header>

      {/* Main Content */}
      <div className="case-study__body">

        {/* Overview Section */}
        <section className="case-study__section case-study__overview">
          <div className="case-study__section-header">
            <span className="case-study__section-number">01</span>
            <h2 className="case-study__section-title">Overview</h2>
          </div>

          <div className="case-study__overview-content">
            <div className="case-study__overview-main">
              <p className="case-study__description">{project.fullDescription}</p>
            </div>

            {(project.links.live || project.links.github) && (
              <aside className="case-study__overview-links">
                <h3 className="case-study__links-title">Project Links</h3>
                <div className="case-study__links-list">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study__link case-study__link--primary"
                    >
                      <ExternalLinkIcon />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="case-study__link case-study__link--secondary"
                    >
                      <GitHubIcon />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </aside>
            )}
          </div>
        </section>

        {/* Hero Image Section */}
        {project.images.hero && (
          <section className="case-study__section case-study__showcase">
            <figure className="case-study__showcase-figure">
              <img
                src={project.images.hero}
                alt={`${project.title} showcase`}
                className="case-study__showcase-img"
              />
              <figcaption className="case-study__showcase-caption">
                Main interface view
              </figcaption>
            </figure>
          </section>
        )}

        {/* Highlights Section */}
        {project.highlights?.length > 0 && (
          <section className="case-study__section case-study__highlights">
            <div className="case-study__section-header">
              <span className="case-study__section-number">02</span>
              <h2 className="case-study__section-title">Key Features</h2>
            </div>

            <ul className="case-study__highlights-list">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="case-study__highlight"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="case-study__highlight-marker">
                    <CheckIcon />
                  </span>
                  <span className="case-study__highlight-text">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Technologies Section */}
        {project.technologies && (
          <section className="case-study__section case-study__tech">
            <div className="case-study__section-header">
              <span className="case-study__section-number">03</span>
              <h2 className="case-study__section-title">Tech Stack</h2>
            </div>

            <div className="case-study__tech-grid">
              {project.technologies.frontend && (
                <div className="case-study__tech-category">
                  <h3 className="case-study__tech-label">Front-end</h3>
                  <div className="case-study__tech-tags">
                    {project.technologies.frontend.map((tech, index) => (
                      <span key={index} className="case-study__tech-tag case-study__tech-tag--frontend">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.backend && (
                <div className="case-study__tech-category">
                  <h3 className="case-study__tech-label">Back-end</h3>
                  <div className="case-study__tech-tags">
                    {project.technologies.backend.map((tech, index) => (
                      <span key={index} className="case-study__tech-tag case-study__tech-tag--backend">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.tools && (
                <div className="case-study__tech-category">
                  <h3 className="case-study__tech-label">Tools</h3>
                  <div className="case-study__tech-tags">
                    {project.technologies.tools.map((tech, index) => (
                      <span key={index} className="case-study__tech-tag case-study__tech-tag--tools">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {hasScreenshots && (
          <section className="case-study__section case-study__gallery">
            <div className="case-study__section-header">
              <span className="case-study__section-number">04</span>
              <h2 className="case-study__section-title">Gallery</h2>
            </div>

            <div className="case-study__gallery-grid">
              {project.images.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  className="case-study__gallery-item"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${project.title} screenshot ${index + 1} in fullscreen`}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="case-study__gallery-img-wrapper">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="case-study__gallery-img"
                      loading="lazy"
                    />
                    <div className="case-study__gallery-overlay">
                      <ZoomIcon />
                      <span>View Full</span>
                    </div>
                  </div>
                  <span className="case-study__gallery-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        {(project.links.live || project.links.github) && (
          <section className="case-study__section case-study__cta">
            <div className="case-study__cta-content">
              <h2 className="case-study__cta-title">Explore This Project</h2>
              <p className="case-study__cta-text">
                See the live application in action or dive into the source code.
              </p>
              <div className="case-study__cta-buttons">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study__cta-btn case-study__cta-btn--primary"
                  >
                    <ExternalLinkIcon />
                    <span>View Live Demo</span>
                    <ArrowIcon />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study__cta-btn case-study__cta-btn--secondary"
                  >
                    <GitHubIcon />
                    <span>View on GitHub</span>
                    <ArrowIcon />
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Back to Portfolio */}
        <nav className="case-study__nav">
          <Link to="/#work" className="case-study__nav-link">
            <ArrowIcon />
            <span>Back to All Projects</span>
          </Link>
        </nav>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && hasScreenshots && (
        <div className="case-study__lightbox" onClick={closeLightbox}>
          <button
            className="case-study__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <CloseIcon />
          </button>

          {hasMultipleScreenshots && (
            <>
              <button
                className="case-study__lightbox-nav case-study__lightbox-nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Previous image"
              >
                <ChevronLeftIcon />
              </button>

              <button
                className="case-study__lightbox-nav case-study__lightbox-nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Next image"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          <div className="case-study__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images.screenshots[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="case-study__lightbox-img"
            />
            {hasMultipleScreenshots && (
              <div className="case-study__lightbox-info">
                <span className="case-study__lightbox-counter">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(project.images.screenshots.length).padStart(2, '0')}
                </span>
                <span className="case-study__lightbox-hint">
                  Use arrow keys to navigate
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

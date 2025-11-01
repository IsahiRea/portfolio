import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
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

//TODO: Replace portfolio.json with my own projects

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
  }, [project?.images?.screenshots])

  const prevImage = useCallback(() => {
    if (project?.images?.screenshots) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.screenshots.length - 1 : prev - 1
      )
    }
  }, [project?.images?.screenshots])

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
      <div className="portfolio-item-individual">
        <div className="project-not-found">
          <h1>Portfolio item not found.</h1>
          <p>The project you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const hasScreenshots = project.images?.screenshots?.length > 0
  const hasMultipleScreenshots = project.images?.screenshots?.length > 1

  return (
    <>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          <strong>{project.title}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">{project.subtitle}</p>
        <img src={project.images.thumbnail} alt={project.title} className='portfolio-intro__img' />
      </section>

      <div className='portfolio-item-individual'>
        {/* Project Description Section */}
        <section className="project-section project-description">
          <div className="project-description__content">
            <h2 className="project-section__title">Project Overview</h2>
            <p className="project-description__text">{project.fullDescription}</p>
          </div>
        </section>

        {/* Hero Image Section */}
        {project.images.hero && (
          <section className="project-section project-hero-image">
            <div className="project-hero-image__container">
              <img
                src={project.images.hero}
                alt={`${project.title} details`}
                className="project-hero-image__img"
              />
            </div>
          </section>
        )}

        {/* Key Highlights Section */}
        {project.highlights?.length > 0 && (
          <section className="project-section project-highlights">
            <h2 className="project-section__title">Key Highlights</h2>
            <div className="highlights-grid">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-card__icon">
                    <CheckIcon />
                  </div>
                  <p className="highlight-card__text">{highlight}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots Section */}
        {hasScreenshots && (
          <section className="project-section project-screenshots">
            <h2 className="project-section__title">Screenshots</h2>
            <div className="screenshots-grid">
              {project.images.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  className="screenshot-item"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${project.title} screenshot ${index + 1} in fullscreen`}
                >
                  <div className="screenshot-item__wrapper">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="screenshot-item__img"
                      loading="lazy"
                    />
                    <div className="screenshot-item__overlay">
                      <ZoomIcon />
                      <span className="screenshot-item__hint">Click to enlarge</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox Modal */}
        {lightboxOpen && hasScreenshots && (
          <div className="lightbox" onClick={closeLightbox}>
            <button
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <CloseIcon />
            </button>

            {hasMultipleScreenshots && (
              <>
                <button
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon />
                </button>

                <button
                  className="lightbox__nav lightbox__nav--next"
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

            <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
              <img
                src={project.images.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="lightbox__img"
              />
              {hasMultipleScreenshots && (
                <div className="lightbox__counter">
                  {currentImageIndex + 1} / {project.images.screenshots.length}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Technologies Section */}
        {project.technologies && (
          <section className="project-section project-technologies">
            <h2 className="project-section__title">Technologies Used</h2>
            <div className="tech-categories">
              {project.technologies.frontend && (
                <div className="tech-category">
                  <h3 className="tech-category__title">Front-end</h3>
                  <div className="tech-tags">
                    {project.technologies.frontend.map((tech, index) => (
                      <span key={index} className="tech-tag tech-tag--frontend">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.backend && (
                <div className="tech-category">
                  <h3 className="tech-category__title">Back-end</h3>
                  <div className="tech-tags">
                    {project.technologies.backend.map((tech, index) => (
                      <span key={index} className="tech-tag tech-tag--backend">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies.tools && (
                <div className="tech-category">
                  <h3 className="tech-category__title">Tools & Others</h3>
                  <div className="tech-tags">
                    {project.technologies.tools.map((tech, index) => (
                      <span key={index} className="tech-tag tech-tag--tools">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Project Links Section */}
        {(project.links.live || project.links.github) && (
          <section className="project-section project-links">
            <h2 className="project-section__title">View Project</h2>
            <div className="project-links__container">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--primary"
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
                  className="project-link project-link--secondary"
                >
                  <GitHubIcon />
                  <span>View on GitHub</span>
                  <ArrowIcon />
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

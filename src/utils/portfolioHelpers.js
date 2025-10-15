import portfolioData from '../data/portfolio.json'

/**
 * Validates that a project has all required fields
 * @param {Object} project - The project object to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export function validateProject(project) {
  const required = ['id', 'slug', 'title', 'shortDescription', 'category']

  for (const field of required) {
    if (!project[field]) {
      console.error(`Missing required field: ${field} in project ${project.id || 'unknown'}`)
      return false
    }
  }

  return true
}

/**
 * Get all portfolio projects
 * @returns {Array} - Array of all projects
 */
export const getAllProjects = () => {
  return portfolioData.projects.filter(validateProject)
}

/**
 * Get only featured projects
 * @returns {Array} - Array of featured projects
 */
export const getFeaturedProjects = () => {
  return portfolioData.projects.filter(project => project.featured && validateProject(project))
}

/**
 * Get a single project by its slug
 * @param {string} slug - The project slug
 * @returns {Object|undefined} - The project object or undefined
 */
export const getProjectBySlug = (slug) => {
  return portfolioData.projects.find(project => project.slug === slug)
}

/**
 * Get a single project by its ID (for backwards compatibility)
 * @param {string|number} id - The project ID
 * @returns {Object|undefined} - The project object or undefined
 */
export const getProjectById = (id) => {
  return portfolioData.projects.find(project => project.id === String(id) || project.id === Number(id))
}

/**
 * Get projects by category
 * @param {string} category - The category to filter by
 * @returns {Array} - Array of projects in the category
 */
export const getProjectsByCategory = (category) => {
  return portfolioData.projects.filter(project =>
    project.category === category && validateProject(project)
  )
}

/**
 * Get projects by tag
 * @param {string} tag - The tag to filter by
 * @returns {Array} - Array of projects with the tag
 */
export const getProjectsByTag = (tag) => {
  return portfolioData.projects.filter(project =>
    project.tags && project.tags.includes(tag) && validateProject(project)
  )
}

/**
 * Get all unique tags from all projects
 * @returns {Array} - Sorted array of unique tags
 */
export const getAllTags = () => {
  const tags = new Set()
  portfolioData.projects.forEach(project => {
    if (project.tags) {
      project.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
}

/**
 * Get all categories
 * @returns {Array} - Array of category objects
 */
export const getCategories = () => {
  return portfolioData.categories
}

/**
 * Get sorted projects
 * @param {string} sortBy - Sort field ('date', 'title', 'featured')
 * @returns {Array} - Sorted array of projects
 */
export const getSortedProjects = (sortBy = 'date') => {
  const projects = getAllProjects()

  switch (sortBy) {
    case 'date':
      return projects.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB - dateA // Most recent first
      })
    case 'title':
      return projects.sort((a, b) => a.title.localeCompare(b.title))
    case 'featured':
      return projects.sort((a, b) => {
        if (a.featured === b.featured) return 0
        return a.featured ? -1 : 1 // Featured first
      })
    default:
      return projects
  }
}

/**
 * Get projects by status
 * @param {string} status - The status to filter by ('completed', 'in-progress', 'archived')
 * @returns {Array} - Array of projects with the status
 */
export const getProjectsByStatus = (status) => {
  return portfolioData.projects.filter(project =>
    project.status === status && validateProject(project)
  )
}

/**
 * Search projects by title or description
 * @param {string} query - The search query
 * @returns {Array} - Array of matching projects
 */
export const searchProjects = (query) => {
  const lowerQuery = query.toLowerCase()
  return portfolioData.projects.filter(project => {
    const titleMatch = project.title.toLowerCase().includes(lowerQuery)
    const descMatch = project.shortDescription.toLowerCase().includes(lowerQuery)
    const tagMatch = project.tags && project.tags.some(tag =>
      tag.toLowerCase().includes(lowerQuery)
    )
    return (titleMatch || descMatch || tagMatch) && validateProject(project)
  })
}

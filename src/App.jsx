import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/useScrollToTop'
import PageLayout from './components/PageLayout'
import Body from './components/Body'
import PortfolioItem from './components/PortfolioItem'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Body />} />
          <Route path="portfolio/:slug" element={<PortfolioItem />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

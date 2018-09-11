// lib/styleguide/StyleGuideRenderer.js
import React from 'react'
export const StyleGuideRenderer = ({
  title,
  version,
  homepageUrl,
  components,
  toc,
  hasSidebar
}) => (
  <div className="root" id="app">
    <h1>{title}</h1>
    {version && <h2>{version}</h2>}
    <main className="wrapper">
      <div className="content">
        {components}
      </div>
      {hasSidebar && <div className="sidebar">{toc}</div>}
    </main>
  </div>
)

export default StyleGuideRenderer
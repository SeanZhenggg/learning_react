import React, { useState } from 'react'
import Link from './Link'
const Header = () => {
  const [active, setActive] = useState(window.location.pathname)
  return (
    <div className="ui secondary pointing menu">
      <Link
        href="/" 
        className={`item ${active === '/' ? 'active' : ''}`}
        setActive={setActive}
      >
        Accordion
      </Link>
      <Link
        href="/list" 
        className={`item ${active === '/list' ? 'active' : ''}`}
        setActive={setActive}
      >
        Search
      </Link>
      <Link
        href="/dropdown" 
        className={`item ${active === '/dropdown' ? 'active' : ''}`}
        setActive={setActive}
      >
        dropdown
      </Link>
      <Link
        href="/translate" 
        className={`item ${active === '/translate' ? 'active' : ''}`}
        setActive={setActive}
      >
        Translate
      </Link>
    </div>
  )
}

export default Header
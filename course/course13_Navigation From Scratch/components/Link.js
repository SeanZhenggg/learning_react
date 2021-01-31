import React from 'react'

const Link = ({ className, href, children, setActive}) => {

  const onClick = (event) => {
    if(event.metaKey || event.ctrlKey) {
      return
    } else {
      event.preventDefault() // PREVENT PAGE RELOAD
      window.history.pushState({}, '', href)

      const navEvent = new PopStateEvent('popstate')
      window.dispatchEvent(navEvent)
      setActive(window.location.pathname)
    }
  }
  return (
    <a 
    href={href} 
    className={className} 
    onClick={onClick}
  >
    {children}
  </a>
  )
}

export default Link
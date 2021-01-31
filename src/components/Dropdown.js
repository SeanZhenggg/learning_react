import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, label, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if(ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick)
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])
  
  const renderOptions = options.map(option => {
    if(option.value === selected.value) {
      return null
    } else {
      return (
        <div
          key={option.value} 
          className="item" 
          onClick={() => onSelectedChange(option)}
        >
          { option.label }
        </div>
      )
    }
  })

  return (
  <div ref={ref} className="ui form">
    <div className="field">
      <label className="label">{label}</label>
      <div 
        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        onClick={() => setOpen(!open)}>
        <i className="dropdown icon"></i>
        <div className="text">{selected.label}</div>
        <div className={`menu ${open ? 'visible transition' : ''}`}>
          {renderOptions}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dropdown
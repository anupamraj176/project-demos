import React from 'react'

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input 
          onChange={handleChange}  
          type="radio" 
          value={value} 
          name={name} 
        />
        <span 
          className="checkmark" 
          style={color ? { backgroundColor: color } : {}}
        ></span>
        <span className="label-text">{title}</span>
      </label>
    </div>
  )
}

export default Input

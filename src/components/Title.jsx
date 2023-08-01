import React from 'react'

const Title = (props) => {
    const {firstword,secword} = props
  return (
    <div className="section-title">
      <h2>
        {firstword} <span>{secword}</span>
      </h2>
    </div>
  )
}

export default Title
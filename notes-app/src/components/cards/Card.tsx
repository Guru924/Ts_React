import React from 'react'
import './card.css'

interface CardProps {
    children: React.ReactNode;
    bgColor? : string;
    height?: string;
    padding?: string;
}

const Card : React.FC<CardProps>= ({children, bgColor, height, padding}) => {
  return (
    <div className='card' style={{backgroundColor:bgColor, height: `${height}rem`, padding: `${padding}rem`}}>
      {children}
    </div>
  )
}

export default Card

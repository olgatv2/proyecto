import React from "react";

interface footerProps {
title: string
}

const Column: React.FC<footerProps> = ({ title }) => {
  return (
    <div className='column'>
      <h3>{title}</h3>
      <p>Enlace</p>
      <p>Enlace</p>
      <p>Enlace</p>
    </div>
  )
}

export default Column
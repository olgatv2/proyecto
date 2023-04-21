import React from "react";

interface footerProps {
title: string
}

const Column: React.FC<footerProps> = ({ title }) => {
  return (
    <div className='column'>
      <h3>{title}</h3>

    </div>
  )
}

export default Column
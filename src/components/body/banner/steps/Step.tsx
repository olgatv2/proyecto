import React from "react";

interface stepProps {
  srcStep : string
  stepNumber: string
  stepDescription: string
}

const Step: React.FC<stepProps> = ({srcStep, stepNumber, stepDescription}) => {
  return (
    <div>
      <img src={srcStep} className="icon"/>
      <h2>Paso {stepNumber}</h2>
      <p>{stepDescription}</p>
    </div>
  )
}

export default Step
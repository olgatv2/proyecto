import React from "react";
import './step.css'

interface stepProps {
  srcStep : string
  stepNumber: string
  stepDescription: string
}

const Step: React.FC<stepProps> = ({srcStep, stepNumber, stepDescription}) => {
  return (
    <div className="step">
      <img src={srcStep} />
      <h2>Paso {stepNumber}</h2>
      <p>{stepDescription}</p>
    </div>
  )
}

export default Step
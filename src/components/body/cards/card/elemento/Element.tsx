import React from "react";
import './element.css'
interface elementProps {
  data: string
  icon : string
}
const Element: React.FC<elementProps> = ({data, icon}) => {
  return (
    <div className="card__element">
      <img className="icon" src={icon} />
      {data}
    </div>
  )
}
 export default Element
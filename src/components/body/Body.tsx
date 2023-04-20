import React from "react";
import Card from "./Card";


const Body: React.FC = () => {
  // const [cards, setCards] = useState(CARDS)

  return (
    <div className="bodyCards">
      {
      <Card />
      }
    </div>
  )
}

export default Body
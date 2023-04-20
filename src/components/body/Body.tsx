import React from "react";
import Cards from "./Cards";
import Banner from "./Banner";

const Body: React.FC = () => {

  return (
    <div>
      <div className="bodyCards">
        {
          <Cards />
        }
      </div>
      <Banner />
    </div>
  )
}

export default Body
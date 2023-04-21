import React, { useState } from "react";
import Cards from "./cards/Cards";
import Banner from "./banner/Banner";
import Nav from "./nav/Nav";

const Body: React.FC = () => {

  const [type, setType] = useState('')

  const selectType = (selectType: string) => {
    setType(selectType)
  }

  return (
    <div>
      <Nav filter={selectType} />
      <div className="bodyCards">
        {
          <Cards type={type} />
        }
      </div>
      <Banner />
    </div>
  )
}

export default Body

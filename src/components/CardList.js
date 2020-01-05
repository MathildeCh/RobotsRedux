import React from 'react';
import Card from "./Card";


const CardList = ({ robot }) => {
  return (
    <div className="tc">
    {
      robot.map(item => {
        return <Card robot={item}  />
      })
    }
    </div>
  );
}

export default CardList;

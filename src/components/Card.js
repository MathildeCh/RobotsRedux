import React from 'react';
import 'tachyons';

const Card = ({robot}) => {
  const {id,name,username,email} = robot;
  return (
    <div className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img className="robots" alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
      <div className="robot-desc">
        <h2 className="">{name}</h2>
        <p className="">{username}</p>
        <p className="robot-email">{email}</p>
      </div>
    </div>
  );
}


export default Card;

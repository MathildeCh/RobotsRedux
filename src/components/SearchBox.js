import React from 'react';
import 'tachyons';



const SearchBox = ({searchChange, buttonClick}) => {
  return(
    <div className=' input-container'>
      <input
        className='input-box'
        type='search'
        placeholder="search Robots"
        onChange={searchChange}
      />
      <button
        type='button'
        className='br4 pa2 ba b--blue bg-blue'
        onClick={buttonClick}> Search
      </button>
    </div>
  );
}

export default SearchBox;

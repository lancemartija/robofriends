import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
  return ( 
    <div className='pa2 mb4'>
      <input className='pa3 bg-near-white br-pill b--none shadow-5' type='search' placeholder='Search Robots' onChange={searchChange} />
    </div>
  );
}
 
export default SearchBox;

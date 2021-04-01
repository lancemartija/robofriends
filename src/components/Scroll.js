import React from 'react';

const Scroll = (props) => {
  return (
    <div className='ma4 br4 bg-light-gray shadow-5' style={{overflowY: 'scroll', scrollbarWidth: 'none', height: '560px'}}>
      { props.children }
    </div>
  );
}
 
export default Scroll;
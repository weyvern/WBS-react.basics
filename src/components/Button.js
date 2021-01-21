import React from 'react';

const Button = ({ style, onClick }) => {
  return (
    <button style={style} onClick={() => console.log('Hello')}>
      Hello
    </button>
  );
};

export default Button;

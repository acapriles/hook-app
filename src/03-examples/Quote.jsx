import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ quote, author }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  });
  
  useLayoutEffect(() => {
    console.log( pRef.current.getBoundingClientRect());

    const { width, height } = pRef.current.getBoundingClientRect()

    setBoxSize({
      width,
      height
    });

  }, [author]);


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

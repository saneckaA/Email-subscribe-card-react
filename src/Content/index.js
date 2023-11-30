import React from 'react';
import image from '../images/image.jpg';

const Content = () => {
  return (
    <div className="flex flex-row gap-4">
        <img src={image} />
    </div>
  )
}

export default Content;
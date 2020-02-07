import React from 'react';
import './styles.css';

import ReviewPlaceholder from '../ReviewPlaceholder';

export default function BusinessPlaceholder({ limit }) {
  function renderBoxes() {
    const boxes = [];

    for (let i = 0; i < limit; i++) {
      boxes.push(
        <div className="box-loader" key={i}>
          <div className="image">
            <img alt="" />
          </div>
          <div className="details">
            <div className="name"></div>
            
            <div className="address"></div>

            <ReviewPlaceholder />
          </div>
        </div>
      );
    }

    return boxes
  }

  return (
    renderBoxes()
  );
}

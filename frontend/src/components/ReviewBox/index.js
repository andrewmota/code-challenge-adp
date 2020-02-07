import React from 'react'
import './styles.css';

import ReviewPlaceholder from '../ReviewPlaceholder';

export default function ReviewBox({ review, loading }) {
  return (
    <>
      { loading ?
          <ReviewPlaceholder />
        :
          <div className="review">
            <p className="text">
              { '“' + review.text + '“, '}
              <span className="user">{ review.user ? review.user.name : '' }</span>
            </p>
          </div>
      }
    </>
  );
}

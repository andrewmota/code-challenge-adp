import React, { useEffect, useState } from 'react';
import './styles.css';

import api from '../../services/api';

import ReviewPlaceholder from '../ReviewPlaceholder';

export default function ReviewBox({ business }) {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getReview() {
      const { data } = await api.get(`/reviews/${business.id}?limit=1`);
      setReview(data.length > 0 ? data[0] : false);
      setLoading(false);
    }

    setLoading(true);
    getReview();
  }, [business]);

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

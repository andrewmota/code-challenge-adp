import React, { useEffect, useState, useMemo } from 'react';
import './styles.css';

import api from '../../services/api';

import ReviewBox from '../ReviewBox';

export default function BusinessBox({ business, index }) {
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

  const formatName = useMemo(() => (index + 1) + '. ' + business.name, [business, index]);
  const formatAddress = useMemo(() => business.location.address1 + ', ' + business.location.city, [business]);
  const reviewBox = useMemo(() => review ? <ReviewBox key={review.id} loading={loading} review={review} /> : <></>, [review, loading]);

  return (
    <div className="box">
      <div className="image">
        <img src={ business.image_url } alt={ formatName } />
      </div>
      <div className="details">
        <h1 className="name">{ formatName }</h1>
        
        <div className="address">
          <span>{ formatAddress }</span>
        </div>

        { reviewBox }
      </div>
    </div>
  );
}

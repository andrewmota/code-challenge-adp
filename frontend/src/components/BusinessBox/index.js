import React, { useMemo } from 'react';
import './styles.css';

import Review from '../Review';

export default function BusinessBox({ business, index }) {
  const formatName = useMemo(() => (index + 1) + '. ' + business.name, [business, index]);
  const formatAddress = useMemo(() => business.location.address1 + ', ' + business.location.city, [business]);

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

        <Review business={business} />
      </div>
    </div>
  );
}

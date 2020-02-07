import React, { useEffect, useState } from 'react'
import './styles.css';

import api from '../../services/api';

import BusinessBox from '../BusinessBox';
import BusinessPlaceholder from '../BusinessPlaceholder';

export default function BusinessesList() {
  const limit = 5;
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBusinesses() {
      const { data } = await api.get(`/businesses?limit=${limit}`);
      setBusinesses(data);
      setLoading(false);
    }
    
    setLoading(true);
    getBusinesses();
  }, []);

  return (
    <div className="container">
      <h2>Top 5 Ice Cream Shops in Alpharetta</h2>
    
      <div className="row">
        {
          loading ? 
            <BusinessPlaceholder limit={limit} />
          : 
            businesses && businesses.length > 0 ? 
              businesses.map((business, index) => <BusinessBox key={business.id} business={business} index={index} />)
            :
              <h3>Nenhum estabelimento encontrado</h3>
        }
      </div>
    </div>
  );
}


"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Firstpart from '../Components/Firstpart';
import Secpart from '../Components/Secpart';
import Loading from '../Components/Loading';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    setLoading(true); 
    import('../lib/SinglePage').then(data => {
      const numericId = parseInt(id, 10);
      const foundItem = data.default.find(item => item.id === numericId);
      setItem(foundItem || null);
      setLoading(false); 
    }).catch(() => {
      setItem(null);
      setLoading(false); 
    });
  }, [id]);

  if (loading) {
    return <Loading />; 
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='lg:flex mx-auto max-w-7xl my-10'>
      <Secpart item={item} />
      <Firstpart item={item} />
    </div>
  );
};

export default ItemDetail;


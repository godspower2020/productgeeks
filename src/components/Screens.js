import React from 'react';
import BrowseMobile from './homeComponents/BrowseMobile';
import BrowseWeb from './WebScreen/BrowseWeb';
import products from '../data/Products';

const Screens = () => {
  const url = window.location.href;
  const isMobile = url.includes('/browse/mobile/apps');
  
  return isMobile ? <BrowseMobile products={products} /> : <BrowseWeb products={products} />;
//   const platform = isMobile ? 'Mobile' : 'Web';
  
//   return isMobile ? <BrowseMobile products={products} platform={platform} /> : <BrowseWeb products={products} platform={platform} />;
};

export default Screens;

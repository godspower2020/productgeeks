import React, { useEffect } from 'react';
import BrowseMobile from './browsComponents/BrowseMobile';
import BrowseWeb from './browsComponents/BrowseWeb';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../redux/actions/ProductActions';

const Screens = ({style}) => {
  const url = window.location.href;
  const isMobile = url.includes('/browse/mobile/apps');

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return isMobile ? <BrowseMobile products={products} loading={loading} error={error} style={style} /> : <BrowseWeb products={products} loading={loading} error={error} style={style} />;
};

export default Screens;

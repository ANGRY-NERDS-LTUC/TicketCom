import React from 'react';
import { getPackage, getSpecialOffer, getWishlist, getCart, deleteWishlist, createWishlist, deleteCart, createCart } from './api/user-api';
import { getCompanyPackages, getCompanyAcceptedPackages, getCompanyRejectedPackages, createCompanyPackage, deleteCompanyPackage } from './api/company-api';
import { getAllPackages, getPublishedPackages, getNotPublishedPackages, getRejectedPackages, acceptPackage, rejectPackage, deletePackage } from './api/admin-api';

function Test() {

  const data = {
    "title":"Jarash",
    "description":"full trip three days",
    "price":"55",
    "image":"https://djdjdicioj;cl/sc,uhsknkdc",
    "category":"local trip",
    "duration":"3",
    "specialOffer": true
  }
  return <div>
    <button onClick={ () => getPackage() }>getPackages</button>
    <button onClick={ () => getSpecialOffer() }>getSpecialOffer</button>
    <button onClick={ () => getWishlist() }>getWishlist</button>
    <button onClick={ () => getCart() }>getCart</button>
    <button onClick={ () => getCompanyPackages() }>getCompanyPackages</button>
    <button onClick={ () => getCompanyAcceptedPackages() }>getCompanyAcceptedPackages</button>
    <button onClick={ () => getCompanyRejectedPackages() }>getCompanyRejectedPackages</button>
    <button onClick={ () => getAllPackages() }>getAllPackages</button>
    <button onClick={ () => getPublishedPackages() }>getPublishedPackages</button>
    <button onClick={ () => getNotPublishedPackages() }>getNotPublishedPackages</button>
    <button onClick={ () => getRejectedPackages() }>getRejectedPackages</button>
    <button onClick={ () => deleteWishlist(3) }>deleteWishlist</button>
    <button onClick={ () => createWishlist(1) }>createWishlist</button>
    <button onClick={ () => deleteCart(1) }>deleteCart</button>
    <button onClick={ () => createCart(1) }>createCart</button>
    <button onClick={ () => createCompanyPackage(data) }>createCompanyPackage</button>
    <button onClick={ () => deleteCompanyPackage(8) }>deleteCompanyPackage</button>
    <button onClick={ () => acceptPackage(2) }>acceptPackage</button>
    <button onClick={ () => rejectPackage(9) }>rejectPackage</button>
    <button onClick={ () => deletePackage(7) }>deletePackage</button>

  </div>;
}

export default Test;

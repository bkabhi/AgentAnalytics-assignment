// src/actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    try {
      const response = await axios.get('/products.json');
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', error });
    }
  };
};

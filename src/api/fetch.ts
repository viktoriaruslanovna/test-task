import axios from 'axios';

export const fetchCocktails = () => {
  return () => {
    try {
      const response = axios.get(
        'http://localhost:3000/users',
        //https://jsonplaceholder.typicode.com/users
      );
      console.log(response);
    } catch {
      console.log('error');
    }
  };
};

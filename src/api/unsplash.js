import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2d3b0e216a1585d000e8caf069e326b728e492a5a8725591a8713dc1e5d8786c'
  }
});
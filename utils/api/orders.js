import axios from '../../core/axios';

export default {
  get: () => axios.get('/orders'),
  remove: id => axios.delete('/orders/' + id),
  add: values => axios.post('/orders', values)
};
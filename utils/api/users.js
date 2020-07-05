import axios from '../../core/axios';

export default {
  get: () => axios.get('/users'),
  add: values => axios.post('/users', values),
  show: id => axios.get('/users/' + id),
};
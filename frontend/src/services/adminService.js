import api from './api';

const adminService = {
  login: (credentials) =>
    api.post('/admin/login', credentials, { withCredentials: true }),

  logout: () =>
    api.post('/admin/logout', {}, { withCredentials: true }),

  refresh: () =>
    api.post('/admin/refresh', {}, { withCredentials: true }),

  getProfile: () => api.get('/admin/me'),

  getDashboard: () => api.get('/admin/dashboard'),
};

export default adminService;

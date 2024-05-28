export const authConfig = {
  loginUrl: '/connexion',
  logoutUrl: '/logout',
  tokenName: 'access_token',
  tokenPrefix: 'Bearer ',
  tokenGetter: () => localStorage.getItem('token'),
  // ... other configuration options
};

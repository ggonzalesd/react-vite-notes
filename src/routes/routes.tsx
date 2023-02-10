const routes = [
  {
    to: 'login',
    display: 'LogIn',
    auth: false,
  },
  {
    to: 'signin',
    display: 'SignIn',
    auth: false,
  },
  {
    to: '',
    display: 'Notes',
    auth: true
  },
  {
    to: '/logout',
    display: 'Quit',
    auth: true
  }
]

export default routes
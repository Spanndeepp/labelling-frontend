// return the user data from the local storage
export const getUser = () => {
  const userStr = localStorage.getItem('user');
  // console.log(userStr);
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the local storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
};

// remove the token and user from the local storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// set the token and user from the local storage
export const setUserSession = (token, user) => {
  // set the storage only if it doesn't previously exist
  if (!localStorage.getItem('token')) localStorage.setItem('token', token);
  if (!localStorage.getItem('user'))
    localStorage.setItem('user', JSON.stringify(user));
};

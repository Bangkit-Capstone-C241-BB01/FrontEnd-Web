import Cookies from "js-cookie";

const setToken = (type, token) => {
  Cookies.set(`BRAINSTORE_token_${type}`, token, { expires: 1 });
};

const getToken = (type) => {
  return Cookies.get(`BRAINSTORE_token_${type}`);
};

const removeToken = (type) => {
  Cookies.remove(`BRAINSTORE_token_${type}`);
};

export const setTokenCustomer = (token) => setToken("customer", token);
export const getTokenCustomer = () => getToken("customer");
export const removeTokenCustomer = () => removeToken("customer");

export const setTokenSeller = (token) => setToken("seller", token);
export const getTokenSeller = () => getToken("seller");
export const removeTokenSeller = () => removeToken("seller");

export const setTokenAdmin = (token) => setToken("admin", token);
export const getTokenAdmin = () => getToken("admin");
export const removeTokenAdmin = () => removeToken("admin");

export { getToken };

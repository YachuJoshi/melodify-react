export const isDev = process.env.NODE_ENV === "development";
export const CMS_BASE_URL = isDev
  ? `http://localhost:1337`
  : `https://obscure-falls-07236.herokuapp.com/`;

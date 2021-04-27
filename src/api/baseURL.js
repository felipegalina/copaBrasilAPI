import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
});
instance.interceptors.request.use(
  async (config) => {
    config.Authorization = {headers: {'Authorization': `Bearer live_bbea34333c21ec7d941634016845c7`}};

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;


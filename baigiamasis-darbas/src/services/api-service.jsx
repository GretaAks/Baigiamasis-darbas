import axios from 'axios';

const annonymousInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
});

const fetchServices = async () => {
  const response = await annonymousInstance.get('/services');
  return response.data;
};

const fetchServicesTypes = async () => {
  const response = await annonymousInstance.get('/servicesTypes');
  return response.data;
};

const fetchJoinedServices = async () => {
  const [services, sevicesTypes] = await Promise.all([
    fetchServices(),
    fetchServicesTypes(),
  ]);

  const formatedServices = services.map(({
    image, title, description, price, ...rest
  }) => {
    const service = {
      ...rest,
      price: `${price.value} ${price.currency}`,
    };
   return service;
  });

  return formatedServices;
};

const APIService = {
    fetchServices,
    fetchServicesTypes,
    fetchJoinedServices
};

export default APIService;
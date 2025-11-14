import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const getFirstRaffleWinners = async () => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/firstRaffle`);
  return response.data;
}

export const scanFirstRaffle = async (name) => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/firstRaffle/${name}`);
  return response.data;
}

export const getSecondtRaffleWinners = async () => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/secondRaffle`);
  return response.data;
}

export const scanSecondRaffle = async (name) => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/secondRaffle/${name}`);
  return response.data;
}

export const getThirdRaffleWinners = async () => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/thirdRaffle`);
  return response.data;
}
export const scanThirdRaffle = async (name) => {
  const response = await axios.get(`${backendUrl}/api/v1/raffles/thirdRaffle/${name}`);
  return response.data;
}
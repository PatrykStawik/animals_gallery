import axios from 'axios';

export const getClient = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data;
};

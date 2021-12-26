import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
'x-rapidapi-host': 'bayut.p.rapidapi.com',
'x-rapidapi-key': '3e23dcee57mshe287d86d7efdef6p156324jsn4093f37b401a'
    },
  });
    
  return data;
}
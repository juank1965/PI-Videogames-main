import axios from "axios";

const { API_KEY } = process.env;

async function platformApi() {
  const url = `https://api.rawg.io/api/platforms?key=${API_KEY}&page_size=10&page=1`;
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export default platformApi;

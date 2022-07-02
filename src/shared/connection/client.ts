import axios from "axios";

const axiosClient = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    "Client-Id": `${process.env.CLIENT_ID}`,
  },
});

export default axiosClient;

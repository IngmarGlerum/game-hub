import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba1374d6dc784366a14d71d37910b4cf",
  },
});

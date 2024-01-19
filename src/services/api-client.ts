import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ba9899145d544241ab8e0ab4625775ff",
  },
});

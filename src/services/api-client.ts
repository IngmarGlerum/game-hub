import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dc80903f2bdd41c186464537cbfea959",
  },
});

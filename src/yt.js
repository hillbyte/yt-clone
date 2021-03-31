import axios from "axios";
const KEY = "AIzaSyBsBr0sT188J4JzaLsdJQOwhfgF3vxbZiE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 10,
    key: KEY,
  },
});

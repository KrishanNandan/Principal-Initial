// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(response.data);
  res.status(200).json(response.data);
}

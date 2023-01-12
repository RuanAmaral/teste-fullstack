import axios from "axios";
const pokeApi = `https://pokeapi.co/api/v2/`;

class PokeController {
  async index(req, res) {
    const url = `${pokeApi}pokemon`;
    const response = await axios.get(url);
    return res.json(response.data);
  }

  async show(req, res) {
    const { index } = req.body;
    const url = `${pokeApi}pokemon/${index}/`;
    const response = await axios.get(url);
    return res.json(response.data)
  }
}

export default new PokeController();

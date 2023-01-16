import axios from "axios";
const pokeApi = `https://pokeapi.co/api/v2/`;

class PokeController {
  async index(req, res) {
    const url = `${pokeApi}pokemon`;
    const response = await axios.get(url);
    return res.json(response.data);
  }

  async show(req, res) {
    const list = [];
    for (let i = 1; i <= 60; i++) {
      const url = `${pokeApi}pokemon/${i}/`;
      const response = await axios.get(url);
      list.push({
        number: response.data.id,
        name: response.data.name,
        weight: response.data.weight,
        height: response.data.height,
        type: response.data.types[0].type.name,
        image: response.data.sprites.front_default,
      });
    }
    return res.json(list);
  }
}

export default new PokeController();

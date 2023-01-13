import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:3333/`
})

export async function verifyLogin(email, senha) {
  const data = {
    email,
    senha,
  };
  
  await api
    .post(`sessionsStart`, data)

    .then((res) => {
        if (res.data) {
            localStorage.setItem("verification",JSON.stringify(res.data))
        }
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function register(email, nome, senha, telefone) {
  const data = {
    email,
    nome,
    senha,
    telefone,
  };
  const response = await api.post(`sessionsCreate`, data);
  return response.data;
}

export async function searchAllPokemons() {
  const response = await api.get(`pokemon`);
  return response.data;
}

export async function seachOnePokemon(index) {
  const data = { index };
  const response = await api.post(`pokemon/info`, data);
  return response.data;
}

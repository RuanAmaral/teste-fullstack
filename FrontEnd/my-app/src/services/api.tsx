import axios from 'axios';

const BASE_API_URL = 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_API_URL,
  // headers: {
  //   authorization: `Bearer ${token}`,
  // },
});

export async function verifyLogin(email: string, senha: string) {
  const data = {
    email,
    senha,
  };
  await api
    .post(`/sessions`, data)
    .then((res) => {
      if (res.data) {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('userData', JSON.stringify(res.data.user));
      }
      window.location.reload();
      return res.data;
    })
    .catch(() => {
      localStorage.setItem('token', JSON.stringify(null));
    });
}

export async function register(
  email: string,
  nome: string,
  senha: string,
  telefone: string,
) {
  const data = {
    email,
    nome,
    senha,
    telefone,
  };
  const response = await api.post(`/userCreate`, data);
  return response.data;
}

export async function searchAllPokemons() {
  const response = await api.get(`/pokemon/info`);
  localStorage.setItem('pokemons', JSON.stringify(response.data));
  return response.data;
}

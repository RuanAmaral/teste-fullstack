import User from "../models/User";

class SessionControler {
  async store(req, res) {
    const { email, nome, senha, telefone } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.json({ resposta: false });
    } else {
      let user = await User.create({ email, nome, senha, telefone });
      return res.json({ resposta: true });
    }
  }

  async show(req, res) {
    const { email, senha } = req.body;

    let user = await User.findOne({email, senha})
    if (user) {
        return res.json({ resposta: true });
    } else {
        return res.json({ resposta: false });
    }

  }
}
export default new SessionControler();

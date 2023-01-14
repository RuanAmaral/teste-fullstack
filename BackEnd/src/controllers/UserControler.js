import User from "../models/User";

class UserControler {
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

  
}
export default new UserControler();

import jwt from "jsonwebtoken";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email, senha } = req.body;

    const user = await User.findOne({ where: { email, senha } });
    if (!user) {
      return res.status(401).json({ error: "Usuario não existe" });
    }

    const { _id, nome } = user;

    return res.json({
      user: {
        _id,
        nome,
        email,
      },
      token: jwt.sign({ _id }, '63239ae4a4135276e1d5544a97377059', {
        expiresIn: '7d',
      }),
    });
  }


}

export default new SessionController();

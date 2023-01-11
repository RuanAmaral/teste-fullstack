import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  nome: String,
  senha: String,
  telefone: String,
});

export default model("User", UserSchema);

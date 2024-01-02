import { Schema, model } from "mongoose";

const systemSchema = Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

export default model("System", systemSchema);

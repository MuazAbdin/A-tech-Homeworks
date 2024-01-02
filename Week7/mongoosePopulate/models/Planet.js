import { Schema, model } from "mongoose";

const planetSchema = Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "System" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

export default model("Planet", planetSchema);

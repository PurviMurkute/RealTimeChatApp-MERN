import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Message = model("Message", messageSchema);

export default Message;

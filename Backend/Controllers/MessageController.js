import MessageModel from "../models/messageModel.js";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text, image } = req.body;
  const message = new MessageModel({
    chatId,
    senderId,
    text,
    image,
  });
  try {
    const result = await message.save();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MessageModel.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

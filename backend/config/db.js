import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jasserslimani01:10101010@cluster0.zlthj0c.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};

import mongoose from "mongoose";
import app from "./app";

const port = 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://rahat-admin:admin47@cluster0.mjja2r0.mongodb.net/foodSupply?retryWrites=true&w=majority"
    );

    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.log("ERROR FROM MAIN SERVER", error);
  }
}

main();

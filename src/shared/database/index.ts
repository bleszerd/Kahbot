import mongoose from "mongoose";

const connectionUri = process.env.DATABASE_CONNECTION_URI;

if (!connectionUri) {
  throw new Error(
    "Coul'd not connect to Mongo Database, check your DATABASE_CONNECTION_URI env variable"
  );
}

const connectToDatabase = async () => {
  console.log(connectionUri);

  await mongoose.connect(connectionUri);

  return true;
};

export { connectToDatabase };

import mongoose from "mongoose";

export const connectToMongo = async () => {
    try {
        return await mongoose
        .connect(process.env.MONGODB_ENDPOINT, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        });
    } catch(err) {
        console.log('Err connecting to Mongo Db: ', err);
        throw err;
    }
}
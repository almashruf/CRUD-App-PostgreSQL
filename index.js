import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeRoute from "./routes/employe.js";

dotenv.config();

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api/employe", employeRoute)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

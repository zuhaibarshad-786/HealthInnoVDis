import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes";
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../backend/.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

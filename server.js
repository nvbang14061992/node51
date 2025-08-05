import express from "express";
import rootRouter from "./src/routers/root.router";
import 'dotenv/config'
import { appError } from "./src/common/app-error/app-error.error";

// npm i extensionless
// khong can them duoi .js cho import modules
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json("Check server working OK!!!")
});

// add middleware to parse body from Bytestream to json
app.use(express.json());

// routing
app.use("/api", rootRouter);

app.use(appError);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`
)});
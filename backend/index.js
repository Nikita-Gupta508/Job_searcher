import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";


dotenv.config({});

const app = express();

const _dirname = path.resolve();

// middleware  app.use(...): This is a method in Express.js that adds middleware to the application's request handling pipeline.
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

//below line of code tells the Express.js application to use the cors middleware with the specified corsOptions to control which domains are allowed to make cross-origin requests to the server.
app.use(cors(corsOptions));

//Many cloud services require you to use the dynamically assigned port from process.env.PORT. Hardcoding a port like 3000 would cause the app to fail in such environments.
const PORT = process.env.PORT || 3000; 


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})
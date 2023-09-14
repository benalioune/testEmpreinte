import express, { Response, Request } from "express";
import mongoose from "mongoose";



const app = express();

app.get("/", (res: Response, req: Request) => {

    res.send("hello form express")

});

// connect mongo database



app.listen(8887, () => {
    console.log("server started")
})

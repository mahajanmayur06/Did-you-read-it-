import { Server } from "socket.io";
import http from "http";
import express from "express"
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["https://oneseen.onrender.com","http://localhost:5173"],
        methods: ["GET", "POST","DELETE","PUT","PATCH"],
    }
});

export { app, io, server };
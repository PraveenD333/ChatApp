import http from "http"
import connectDB from "./Database/db.js";
import app from "./app.js";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

// Initialize Socket.io Server
export const io = new Server(server, {
    cors: { origin: "*" }
})

// Store Online User
export const userSocketMap={};

// Socket.io Connection handler
io.on("connection",(socket)=>{
    const userId=socket.handshake.query.userId;
    console.log("User Connected",userId);

    if(userId)userSocketMap[userId]=socket.id;
    
    // Emit Online Users to All Connected Clients
    io.emit("getonlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("User Disconnectd",userId);
        delete userSocketMap[userId];
        io.emit("getonlineUsers",Object.keys(userSocketMap))
    })
})

server.listen(PORT, () => {
    console.log(`Server is Running... ${PORT}`);
    connectDB()
})
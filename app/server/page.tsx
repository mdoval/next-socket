import React from "react";
import { createServer } from "http";
import { Server } from "socket.io";

const ServerPage = () => {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    // Opciones
  });

  io.on("connection", (socket:any ) => {
    socket.emit("hello","world")

    socket.on("howdy", (arg: any) => {
        console.log(arg)
    })
  });
  
  httpServer.listen(3005);

  return <div>Servidor conectado en el puerto 3005</div>;
};
export default ServerPage;

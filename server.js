let express = require("express");
let app = express();
var port = process.env.PORT || 3000;
let server = app.listen(port);
console.log("server is running on http://localhost:" + port);
app.use(express.static("public"));
let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection)
function newConnection(newSocket){
   console.log(newSocket); 



   newSocket.on("mouse", mouseMessage)

   function mouseMessage(dataReceived){
       console.log(dataReceived)

       newSocket.broadcast.emit("mouseBroadcast", dataReceived)
   }

   newSocket.on("player1", name1)

   function name1(dataReceived){
       console.log(dataReceived)
       
       newSocket.broadcast.emit("name1Broadcast", dataReceived)
   }

   newSocket.on("player2", name2)

   function name2(dataReceived){
       console.log(dataReceived)
       
       newSocket.broadcast.emit("name2Broadcast", dataReceived)
   }

   newSocket.on("scelta", scelta)

   function scelta(dataReceived){
       console.log(dataReceived)
       
       newSocket.broadcast.emit("scelta", dataReceived)
   }
}

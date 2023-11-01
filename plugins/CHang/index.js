//Set up Variables
const express = require("express"),
  socketio = require("socket.io"),
  http = require("http"),
  path = require("path"),
  app = express(),
  httpserver = http.Server(app),
  io = socketio(httpserver);

let plrs = [],
  plrUsers = [];

app.use("/CSH", express.static(path.dirname(module.parent.filename)+"/app.html"));

//Listen for the server to start
httpserver.listen(8099, () => {undefined;});

//Connect to each client
io.on("connection", function (socket) {
  const namei = socket.handshake.query.n;
  const color = socket.handshake.query.c;
  const username = namei;
  const profileImage =`https://ir2nlq-8080.preview.csb.app/profile.OUT?user=${namei}&step=img`;

  plrs[plrs.length] = socket.id;
  plrUsers[plrUsers.length] = { username, profileImage, color };

  const newPlrIndex = plrs.indexOf(socket.id);

  socket.broadcast.emit(
    "playerJoin",
    false,
    newPlrIndex,
    plrUsers[newPlrIndex]
  );
  socket.emit("playerJoin", true, newPlrIndex, plrUsers[newPlrIndex]);

  for (let val in plrs) {
    if (plrs[val] && plrs[val] !== socket.id) {
      socket.emit("playerJoin", false, val, plrUsers[val]);
    }
  }

  socket.on("disconnecting", function () {
    socket.broadcast.emit("playerLeave", plrs.indexOf(socket.id));

    const plrIndex = plrs.indexOf(socket.id);

    plrs[plrIndex] = undefined;
    plrUsers[plrIndex] = undefined;
  });

  socket.on("move", (ratioX, ratioY) => {
    socket.broadcast.emit(
      "playerMove",
      plrs.indexOf(socket.id),
      ratioX,
      ratioY
    );
  });

  socket.on("mouseDown", () => {
    socket.broadcast.emit("playerMouseDown", plrs.indexOf(socket.id));
  });

  socket.on("mouseUp", () => {
    socket.broadcast.emit("playerMouseUp", plrs.indexOf(socket.id));
  });
});

(function (){
  "use strict";
  var chatHandler = require("./partials/chatHandler");
  module.exports = function (app, watsonConversation) {
      chatHandler(app, watsonConversation);
    app.get("/", function (req, res) {
      return res.status(200).send("Ola");
    });
  }



}());

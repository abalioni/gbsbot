(function () {
    "use strict";

        module.exports = function (app, watsonConversation) {
            app.get("/chat", function (req, res) {
                return res.status(200).render("chat.view.html");

            });

            //

            app.post("/sendMessage", function (req, res) {

                console.log(" send: " + req.body.question);

                var context = {};

                watsonConversation.message({
                  workspace_id: '926465ce-93d5-4d72-bfa6-531b535d14fc',
                  input: {'text': req.body.question },
                  context: context
                },  function(err, response) {
                  if (err) {
                     console.log('error:', err);
                  } else {
                     console.log(JSON.stringify(response, null, 2));
                     return res.status(200).send(response);
                  }

                });

            });
        }
}());

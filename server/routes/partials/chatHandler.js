(function () {
    "use strict";

        module.exports = function (app, watsonConversation) {
            app.get("/chat", function (req, res) {
                return res.status(200).send("XAMA");
            });
        }
}());

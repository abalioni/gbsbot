(function () {
    "use strict";

    var button = document.getElementById('askButton'),
        chat = document.getElementById("chat"),
        meVar = document.getElementById("me"),
        youVar = document.getElementById("you"),
        chatHistory = document.getElementById("chatHistory");


    button.addEventListener("click", function () {

        var input = document.getElementById('question');
        addQuestion(input.value);

        fetch("/sendMessage", {
            method: 'post',
            headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
            body: 'question=' + input
        })
        .then(function successCB (response) {
                        console.log(response);

                        console.log(response.statusText);
                        response.json().then(function(data) {
                            addResponse(data.output.text);
                            console.log(data.output.text);
                        });
                    }, function errorCB (error) {
                        console.log(error);
                    });

        input.value = "";

    });


        function addQuestion (text) {
            var span = document.createElement("span"),
                p = document.createElement("p");
                span.setAttribute("id", "you");
                var docFragment = document.createDocumentFragment();
                span.appendChild(p);
                p.appendChild(document.createTextNode(text));
                docFragment.appendChild(span);
                chatHistory.appendChild(docFragment);
        };

        function addResponse (text) {

            var span = document.createElement("span"),
                p = document.createElement("p");
                span.setAttribute("id", "me");
                var docFragment = document.createDocumentFragment();
                span.appendChild(p);
                p.appendChild(document.createTextNode(text));
                docFragment.appendChild(span);
                chatHistory.appendChild(docFragment);

            console.log(text);
        };

}());

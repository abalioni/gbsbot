(function () {
    "use strict";

    var button = document.getElementById('askButton'),
        chat = document.getElementById("chat"),
        meVar = document.getElementById("me") ;


    button.addEventListener("click", function () {

        var input = document.getElementById('question').value;
        //addQuestion(input);

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



    });


        function addResponse (text) {
            var p = document.createElement("p"),
                docFragment = document.createDocumentFragment();
                p.appendChild(document.createTextNode(text));
                docFragment.appendChild(p);
                meVar.appendChild(docFragment);
        };

        // function addResponse (text) {
        //     var span = document.createElement("span"),
        //         p = document.createElement("p");
        //         span.setAttribute("id", "me");
        //         docFragment = document.createDocumentFragment();
        //         span.appendChild(p);
        //         p.appendChild(document.createTextNode(text));
        //         docFragment.appendChild(span);
        //         chat.appendChild(docFragment);
        //
        //     console.log(text);
        // };

}());

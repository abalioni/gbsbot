(function () {
    "use strict";

    var button = document.getElementById('askButton');

    button.addEventListener("click", function () {
        var input = document.getElementById('question').value;

        console.log(input);

        fetch("/sendMessage", {
            method: 'post',
            headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
            body: 'question=' + input
        })
        .then(json)
        .then(function (data) {
           console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
        console.log('Request failed', error);
      });
    });





}());

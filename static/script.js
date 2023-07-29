var socket = io("https://minizapdopanta.onrender.com/");
socket.on("connect", function(){
    console.log("Usuário conectou");
});

socket.on("message", function(data){
    //console.log("Disparou uma mensagem")
    $(".feed").append($("<p>").text(data));

});

$("#botao").on("click", function(){
    //console.log("Clicou no botão")
    socket.send($(".user-text").val() + ": " + $(".message-text").val());
    $(".message-text").val("");
});


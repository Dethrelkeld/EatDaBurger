$(document).ready(function(){
    $("#submitBtn").on("click", function(event){
        event.preventDefault();

        var burger_name = $("#burger-input").val().trim();
        console.log(burger_name);
        var burger = {
            burger_name: burger_name
        }

        $.ajax({
            method: "POST",
            data: burger,
            url: "/api/burgers" 
        }).then(function(data){
            location.reload();
        })
    })
});
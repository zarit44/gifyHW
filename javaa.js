
var buttonsArray = ["Emma Stone", "Margot Robbie"];
for (var i = 0; i < buttonsArray.length; i++) {
    var actorBtn = $("<button>");
    actorBtn.addClass("actor-button actor actor-button-name");
    actorBtn.attr("data-actor", buttonsArray[i]);
    actorBtn.text(buttonsArray[i]);
    $("#buttons").append(actorBtn);
}

$('button').on('click',function(){
    var type= $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=SED77J2m6eb60POCxbonYwCeBwSvLPmq&limit=10";
    

    $.ajax({url:queryURL, method: "GET"}).done(function(response){
        
        for(var i=0; i<response.data.length; i++){
            $('#giphyPlace').prepend("<p>Rating: " +response.data[i].rating+"</p>");
            $('#giphyPlace').prepend("<img src= '"+response.data[i].images.downsized.url+"'>");
        }
    })
})
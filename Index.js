$(document).ready(function(){

    
var settings = {
    "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/categories",
      "method": "GET",
      "headers": {
                    "user-key": "6986abac5eaa91c4f2cd8030db77971c",
                    'Content-Type': 'application/x-www-form-urlencoded'
                 }
}

$.getJSON(settings, function(data){
   var list = "";
   data = data.categories;
    $.each(data, function(index, value){       
        list += ('<option value= "' + value.categories.id + '">' + value.categories.name + '</option>');       
    });
    $("#category").append(list);   
});


var valueDropdown =  $('#category').val();

var settingsTwo = {
    "async": true,
      "crossDomain": true,
      "url": "https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&category=" + valueDropdown + "&count=10",
      "method": "GET",
      "headers": {
                    "user-key": "6986abac5eaa91c4f2cd8030db77971c",
                    'Content-Type': 'application/x-www-form-urlencoded'
                 }
}

$.getJSON(settingsTwo, function(data){
    var listTwo = "";
    data = data.restaurants;
    $("#button").on("click", function(){
    $.each(data, function(index, value){
    
        listTwo +=  "<div class='card col-4 col-sm-3 mt-5 p-0 ml-5' style='width:10rem;'>";
        listTwo += "<img class='card-img-top mt-1' src=" +value.restaurant.thumb+ " alt='Restaurant Image'>";
        listTwo +=  "<div class='card-body'>";
        listTwo += "<a href=" + value.restaurant.url + " target='_blank'><h5 class='card-title'>" +value.restaurant.name+ "</h5></a></div>";
        listTwo += "<div class='card-footer text-muted'>Cost For Two:" + value.restaurant.average_cost_for_two + "</div></div>";
        $.ajaxSetup({ cache: false});
    });
    $("#content").append(listTwo);
});
});
});
console.log("hello this is the weather script");

//eventclick
$("#searchBtn").on('click',function(){
    //assign val from inputBox to searchBox
    let searchBox = $("#searchTxt").val();
    // assign app key
    const appKey = "75713bc434fc1e071e9c80823f391fa7";
    //assing Url + seach string
    let queryRoutesURL ="https://api.openweathermap.org/data/2.5/weather?q="+searchBox+"&units=imperial&appid="+appKey;;
    console.log("weather :"+queryRoutesURL);
    //ajax call
    $.ajax({
        url: queryRoutesURL,
        method:"GET",
        dataType: "json"
    }).done(function(response){
        //assign current seach to icon url img
        let iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        //Display City Name
        $("#cityName").html(response.name);
        //Display current temp
        $("#currentTemp").html(response.main.temp);
        //display icon
        $("#icon").attr('src',iconUrl);
        //display description
        $("#currentDescript").html(response.weather[0].description);
        console.log("WTF");
        console.log(response);

    })
//end of click event   
})

const mbtaAppKey = 'dee7e1e039704d419640b45a7c2cdf23';
let queryRoutesURL ="https://api-v3.mbta.com/schedules?filter%5Bmin_time%5D=14%3A00&filter%5Bmax_time%5D=14%3A30&filter%5Bstop%5D=17094";
    console.log("MBTA :"+queryRoutesURL);
$.ajax({
    url: queryRoutesURL,
    method:"GET"
}).done(function(response){
    console.log(response);
    for (var i = 0;i<2;i++){
        
        //let lines = response.data[i];
        //console.log(response.data[i]);
        //$("#mbtaTest").append("<p>"+lines+"</p>");
      }
    

})

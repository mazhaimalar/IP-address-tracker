let api_key = "at_KgUhdDaGwXAUyhtv0RFYXWPHLS9C4"
let ip = "8.8.8.8";

$(function(){
    $.ajax({
        url : "https://geo.ipify.org/api/v1?apiKey=at_KgUhdDaGwXAUyhtv0RFYXWPHLS9C4 ",
        data : {Location : location , ipAddress : ip},
        cache : false,
        type:GET,
        contentType : 'application/json',
        success: function(){
            $('body').append("<pre>" + JSON.stringify(data , "",2) + "</pre>")
        },
        error: function(){
            console.log("error occured");
        }
    })
})
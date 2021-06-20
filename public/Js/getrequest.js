


// $(document).ready(function(){
//     $('#test').click(function(click){
       
//         ajaxget();
//     })
// })

// function ajaxget(){
//     $.ajax({
//         type :'GET',
//         url:"https://geo.ipify.org/api/v1?apiKey=at_KgUhdDaGwXAUyhtv0RFYXWPHLS9C4&ipAddress=8.8.8.8 ",
//         data : {ipAddress : ip , location : location },
//         cache : false,
//         contentType : 'application/json',
//         success: function(){
//             $('body').append("<pre>" + JSON.stringify(data , "",2) + "</pre>")
//         },
//         error: function(){
//             console.log("error occured");
//         }
        
        
//     })
// }

//  ensuring document is ready before working on it

$(document).ready(function(){
$()
    $('#search').click(function(){
       queryApi();

    })
})

// Api fetch
function queryApi(){
// fetching the data from a server using the api key withe help of fetch() API
let IpValue = $('#form1').val();
if(IpValue){

    fetch("https://geo.ipify.org/api/v1?apiKey=at_KgUhdDaGwXAUyhtv0RFYXWPHLS9C4&ipAddress=" +IpValue)
    .then((response) => {
   // returning the result in json format
          return response.json();
    })    
    .then((myjson) =>{
        //checking ehether the dom elements are empty , if not empty we empty it by empty()
                    let inputText =$('#ip').text(); 
                    if(inputText){
                        $('#ip').empty();
                        $('#location').empty();
                        $('#timeZone').empty();
                        $('#isp').empty();

                    }
                    // updating the dom with the retrieved data through fetch command

                        $('#ip').append(`<p>${myjson.ip}</p>`);
                        $('#location').append(`<p>${myjson.location.city}</p>`);
                        $('#timeZone').append(`<p>${myjson.location.timezone}</p>`);
                        $('#isp').append(`<p>${myjson.isp}</p>`);
                        })       
            }
   else{
       $('#form1').val('Please enter a an Ip address here');
   }
}
 
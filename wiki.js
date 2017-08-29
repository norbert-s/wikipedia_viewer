
$(document).ready(function(){
  let result, code=0,beirt,apiURL,scrWidth ;
  
  //event random click
  $("#rand").click(function(){
    randArt();
  });
  //event searchclick or enter
  $("#sear").click(function(){
    searchClick();
  });
  //---------------functions-------------------
  //function detect mobiles
  function screenWidth(){
    scrWidth = window.innerWidth;
    console.log(scrWidth);
    if(scrWidth<780){
      $("#art").css("width","95%");
    }
  }
  //--------------------------------
  function randArt(){ 
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  }
  //--------------------------------
  function searchClick(){
      $("art").text('');
      beirt=$("#inp").val();
      event.preventDefault();
      apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="
      +beirt + "&format=json";
    //query
    $.ajax({
      cache:false,
      url: apiURL,
      dataType: "jsonp",
      success:function(data){
        console.log(data);
        var target=' target="_blank"';
        for (let i=0; i<data[1].length; i++) {
        $("#art").prepend( "<div class='cikk'><a href="+ data[3][i]+target+"<h2>" +data[1][i]+"</h2></a>" + "<h3>"+ data[2][i] + "</div>");
        }
      }
    });
    screenWidth();
  }
});
         

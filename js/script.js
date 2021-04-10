$(document).ready(function(){

// 1
  
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide(1000);
  });
  $("#show").click(function(){
    $("p").show(1000);
  });
});




// 2

$(document).ready(function(){
  $("#button1").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
});

// 3

$(document).ready(function(){
  $("#button5").click(function(){
    $("#remove").remove();
  });
});



// 4
$(document).ready(function(){
  $("#button2").click(function(){
    $("div").animate({left: '250px'});
  });
});
  
// 5
 
$(document).ready(function(){
  $("#down").click(function(){
    $("#panel2").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel2").stop();
  });
});

// 6

$(document).ready(function(){
  $("#button3").click(function(){
    $("#p6").hide(1000);
    alert("The paragraph is now hidden");
  });
});


// 7

$(document).ready(function(){
  $("#button4").click(function(){
    $("#updown").css("color", "crimson").slideUp(2000).slideDown(2000);
  });
});


// 8


$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});


// 9


$(document).ready(function(){
  $("#btn4").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn5").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Harry");
  });
});


// 10

$(document).ready(function(){
  $("#btn6").click(function(){
    $("#pp").append(" <b>Appended text</b>.");
  });

  $("#btn7").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
});

// 11

$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").slideDown("slow");
  });
});



// 12


$(document).ready(function(){
  $("#button6").click(function(){
    $("#h1, #h2, #p12").addClass("blue");
    $("div0").addClass("important");
  });
});



// 13

$(document).ready(function(){
  $("#button7").click(function(){
    $("#p13").hide();
  });
});


// 14

$(document).ready(function(){
  $("#button8").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div5").width() + "</br>";
    txt += "Height of div: " + $("#div5").height();
    $("#div5").html(txt);
  });
});







// 15




$(document).ready(function(){
  $("#button9").click(function(){
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
  });
});




// 16

$(document).ready(function(){
  $("#p16").mouseleave(function(){
    alert("Bye! You now leave p1!");
  });
});




// 17



$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});




// 18



$( "#button10" ).click(function() {
  $( "#p18" ).toggle( "slow" );
});



// 19


$( document.body ).click(function () {
  if ( $( "#div19" ).first().is( ":hidden" ) ) {
    $( "#div19" ).slideDown( "slow" );
  } else {
    $( "#div19" ).hide();
  }
});




// 20

$( "#go1" ).click(function() {
  $( "#block1" )
    .animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
});
 
$( "#go2" ).click(function() {
  $( "#block2" )
    .animate({ width: "90%" }, 1000 )
    .animate({ fontSize: "24px" }, 1000 )
    .animate({ borderLeftWidth: "15px" }, 1000 );
});
 
$( "#go3" ).click(function() {
  $( "#go1" ).add( "#go2" ).click();
});
 
$( "#go4" ).click(function() {
  $( "div" ).css({
    width: "",
    fontSize: "",
    borderWidth: ""
  });
});



});


// Select size input
var sizePicker = $("#sizePicker");
// When size is submitted by the user, call makeGrid()
 sizePicker.submit(function(event){
    event.preventDefault();
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
    makeGrid(height,width);
})


//To make grid
function makeGrid(l,m) {
    $('tr').remove();  //remove existing grid
   
    pixel = $('#pixelCanvas');
    
    for(var r = 1;r<=l;++r){
        pixel.append('<tr></tr>');
     for (var c = 1; c<=m;++c){
       $('tr:last').append('<td></td>');
       

        }
            
    }
     //add selected color on cell click
    $("td").click(function() {
        // Select color input 
        var colorPicker = $("#colorPicker").val();
        $(this).attr('style') ? 
            $(this).removeAttr('style') : $(this).attr('style','background:'+colorPicker);
    });


   //To clear art from canvas
    $('.button').click(function(){
        $('td').removeAttr('style');
    });

    $('.button1').click(function(){
        $('tr').remove();
    });

    //$('.button2').click(function(){
       // $('tr').remove();
    //});

    
    
    

    
}

// Get the modal
var modal = $('.modal');


var helpbtn = $(".button2");

//get span
var span = $(".close");

// opens  modal on click

helpbtn.click(function(){
    modal.show(500);
})

// closes modal on click
$(".close").click(function() {
    modal.hide(1000);
})

//closes modal when the outside is clicked
window.click(function(event) {
    if (event.target == modal) {
        modal.hide();
    }
})



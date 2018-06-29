// Select color input 
// Select size input
var sizePicker = $("#sizePicker");
// When size is submitted by the user, call makeGrid()
 sizePicker.submit(function(event){
    event.preventDefault();
    var height = $("#inputHeight").val();
    var width = $("#inputWeight").val();
    makeGrid(height,width);
})



function makeGrid(l,m) {
    $('tr').remove();
   
    pixel = $('#pixelCanvas');
    
    for(var r = 1;r<=l;++r){
        pixel.append('<tr></tr>');
     for (var c = 1; c<=m;++c){
       $('tr:last').append('<td></td>');
       

        }
            
    }

    $("td").click(function() {
        var colorPicker = $("#colorPicker").val();
        $(this).attr('style') ? 
            $(this).removeAttr('style') : $(this).attr('style','background:'+colorPicker);
    });

    $('.button').click(function(){
        $('td').removeAttr('style');
    });
    

    
}




var count = 0 ;

function createGrid(x) {
    console.log(count);
    while (count < x){
        for (var columns = 0; columns < 3; columns++) {
            count++;

            if (count > x)
                break;

            if (count == 1 ){ //the first
                $("#container").append("<div class='grid' style='pointer-events: none';><div id='plus' ></div></div>");
                continue;
            }
            if ((count) % 3 == 0 ){

                $("#container").append("<div class='grid'><div id='star'></div></div>");

            }
            else {
                $("#container").append("<div class='grid'></div>");

            }
        }
    }
    if ( screen.width < 960){
        $(".grid").width(960/2);
        $(".grid").height(960/2);
    }
    else {
        $(".grid").width(960 / 3);
        $(".grid").height(960 / 3);
    }
    color_boxes();
}




function random_color(){
    var myColors = [
        '#7F8C8D', '#95A5A6', '#BDC3C7', '#003946', '#BDC3C7',
        '#ECF0F1', '#BDC3C7', '#ECF0F1', '#C0392B', '#E74C3C',
        '#D35400', '#E67E22', '#F39C12', '#F1C40F', '#22313f',
        '#2C3E50', '#34495E', '#8E44AD', '#9B59B6', '#2980B9',
        '#3498DB', '#27AE60', '#2ECC71', '#16A085'
    ];
    var colors = myColors.slice(0);
    var color = Math.floor(Math.random() * colors.length);
    return colors[color];
}

// all div get color
function color_boxes(){

    $('div.grid').each(function() {

        if ( $(this).css('backgroundColor').toString() == "rgba(0, 0, 0, 0)" ) {
            $(this).css('background-color', random_color());}

    });


}

function add_box(){
    console.log(count);

    if ((count%3) == 0 ){

        $("#container").append("<div class='grid'><div id='star'></div></div>");

    }
    else {
        $("#container").append("<div class='grid'></div>");

    }

    count++;
    if ( screen.width < 960){
        $(".grid").width(50);
        $(".grid").height(50 );
    }
    else {
        $(".grid").width(960 / 3);
        $(".grid").height(960 / 3);
    }
    color_boxes();
}



$(document).on('click', '.grid', function(){
    var plus_found = false;

    $(this).find("div[id^=plus]").each(function() {
        add_box();
        plus_found = true;
        return;
    });



    if( !plus_found )
    {
        if ($(this).attr('id') != 'theImg') {

            $(this).css("background-color", "white");
            $(this).attr('id', 'theImg');
        }
        else {
            $(this).removeAttr('id');
            $(this).css("background-color", random_color());
        }
    }

});


$(document).ready(function() {
    var str = "shai";
    createGrid(str.length*2);


});

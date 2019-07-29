$(window).scroll(function(e){
    parallax();
  });

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.jumbotron').css('top',(scrolled*0.0150)+'rem');
    //PARALLAX INSIDE
    //$('.jumbotron > .jumbotron-content').css('top',-(scrolled*-0.040)+'rem');
    //$('.jumbotron > .jumbotron-content').css('opacity',1-(scrolled*.00275));
  };

$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        console.log('about to show');
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
});






$(document).ready(function(){
 
    
    $('ul.selectCategoryMenu li').click(function(e){
        $('ul.selectCategoryMenu li').removeClass('active');
        $(this).addClass('active');
    })
    
    // search Form:
    $('#selectCateSearch').change(function(){
        var valSelected = $('#selectCateSearch').val();
        // console.log(valSelected);
        $('#iSelectedCategory').val(valSelected);
    });

    $('.btnShow').click(function(){
        $('.btnShow').addClass('hide') ;
        $('.btnHide').removeClass('hide') ;
        $('.showdiv').removeClass('hide') ;
    })

    $('.btnHide').click(function(){
        $('.btnShow').removeClass('hide') ;
        $('.btnHide').addClass('hide') ;
        $('.showdiv').addClass('hide') ;
    })

    // fit height of navleft
    var h = $('.contentRight').height();
    if(h<690)
        h=690 ;
    var heightLeft = h + "px";
    $('.navLeft').css("height", heightLeft);
});
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

    $('#btnDontBuy').click(function(){
        $('#btnDontBuy').addClass('hide') ;
        $('#btnBuy').removeClass('hide') ;
        $('.dontbuy').removeClass('hide') ;
    })

    $('#btnBuy').click(function(){
        $('#btnDontBuy').removeClass('hide') ;
        $('#btnBuy').addClass('hide') ;
        $('.dontbuy').addClass('hide') ;
    })
});
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

    
});
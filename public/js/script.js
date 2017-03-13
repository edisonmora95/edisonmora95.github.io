// cache collection of elements so only one dom search needed
var $mediaElements = $('.media');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.fadeIn();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).fadeIn();
    }
});
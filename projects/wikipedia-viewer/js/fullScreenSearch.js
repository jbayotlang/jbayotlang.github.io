/* Credits To: http://bootsnipp.com/snippets/featured/full-screen-search */

(function () {

$('#searchIcon').on('click', function(event) {
        console.log("Clicked!")
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    

})();
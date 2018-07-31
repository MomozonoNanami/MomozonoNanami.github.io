$('.filter-name').on('click', function() {
    var all_filters = $(".filter-name").map(function() { return $(this).data("filter"); }).get();
    if ($(this).data("filter") == 'all') {
        for (var one in all_filters) {
            $("." + all_filters[one]).show(500);
        }
    } else {
        for (var one in all_filters) {
            if (all_filters[one] != $(this).data("filter")) {
                $("." + all_filters[one]).hide(500);
            } else {
                $("." + all_filters[one]).show(500);
            }
        }
    }
});
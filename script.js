 $(document).ready(function () {
        var owl = $("#case-study");
        owl.owlCarousel({
            navigation: false,
            pagination: true,
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items betweenormaluser 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            mouseDrag: false,
            touchDrag: false,
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
 });


 $(document).ready(function () {
        $("#start").click(function () {
            $("#studyCase").hide();
            $("#serviceManagment").show();
        });
        $("#srvcYes").click(function () {
            $("#serviceManagment").hide();
            $("#rightOne").show();
        });

 })

 $(document).ready(function () {
        var owl = $("#questions-slide");
        owl.owlCarousel({
            navigation: false,
            pagination: true,
            items: 1, //10 items above 1000px browser width
            itemsDesktop: [1000, 1], //5 items betweenormaluser 1000px and 901px
            itemsDesktopSmall: [900, 1], // betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0
            mouseDrag: false,
            touchDrag: false,
            itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
        });
 });

 
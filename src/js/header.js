$(function() {
    //Header with color

    let header = $("#header");
    let nav = $("#nav");
    let scrollPos = $(window).scrollTop();
    let burgerRows = $(".burger-row");

    $(window).on("scroll load resize", () => {
        scrollPos = $(this).scrollTop();
        if (scrollPos > 0) {
            header.addClass("header--colored");
        }

        else if (scrollPos == 0) {
            header.removeClass("header--colored");
        }
    });

// Navigation soft

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let elementOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: elementOffset - header.innerHeight()
        });
        if(nav.hasClass("open-nav")) {
            nav.removeClass("open-nav");
            burgerRows.removeClass("open-burger")
        }

    });
});



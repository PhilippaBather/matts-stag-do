/** JQUERY: Additional Information Reveal and Conceal and Mobile Toggle Menu Events **/

// Hotel Review Slide Toggle Reveal and Fade out

revealInformation("#event-details__hotel", "#event-details__hotel-review");
closeInformation("#close-toggle-slide__hotel", "#event-details__hotel-review");

// Parking Info Slide Toggle Reveal and Fade out

revealInformation("#event-details__parking", "#event-details__parking-info");
closeInformation("#close-toggle-slide__parking", "#event-details__parking-info");

// Pub Golf Slide Toggle Reveal and Fade out

revealInformation("#event-details__pub-golf", "#event-details__pub-golf__pubs");
closeInformation("#close-toggle-slide__pub-golf", "#event-details__pub-golf__pubs");

// Mobile View: Event Details Slide Toggle
clickDayTitle("#mobile__day-title__fri", "#mobile__day-overview__fri");
clickDayTitle("#mobile__day-title__sat-day", "#mobile__day-overview__sat-day");
clickDayTitle("#mobile__day-title__sat-evening", "#mobile__day-overview__sat-evening");
clickDayTitle("#mobile__day-title__sun", "#mobile__day-overview__sun");


// Mobile View: Navigate from Toggle to Event Information
$("#mobile-nav__fri").click(function () {
    removeClassesOnMenu();
    $("#mobile__day-overview__fri").slideToggle("slow");
    scrollToSelectedEvent("#mobile__day-overview__fri");
});

$("#mobile-nav__sat-day").click(function () {
    removeClassesOnMenu();
    $("#mobile__day-overview__sat-day").slideToggle("slow");
    scrollToSelectedEvent("#mobile__day-overview__sat-day");
});

$("#mobile-nav__sat-evening").click(function () {
    removeClassesOnMenu();
    $("#mobile__day-overview__sat-evening").slideToggle("slow");
    scrollToSelectedEvent("#mobile__day-overview__sat-evening");
});

$("#mobile-nav__sun").click(function () {
    removeClassesOnMenu();
    $("#mobile__day-overview__sun").slideToggle("slow");
    scrollToSelectedEvent("#mobile__day-overview__sun");
});

// COMMON FUNCTIONS

// Mobile Toggle Menu: remove opened classes and scroll to selected event detail
function removeClassesOnMenu() {
    $(".backdrop").removeClass("open");
    $(".mobile-nav").removeClass("open");
};
function scrollToSelectedEvent(event) {
    $('html, body').animate({
        scrollTop: $(event).offset().top
    });
};


// Mobile: Click on Day Title to reveal overview of day's events
function clickDayTitle(day, overview) {
    $(day).click(function () {
        $(overview).slideToggle("slow");
    });
}

//For Slide Toggle and Fade out Event Details: Extra Information

function revealInformation(clickedLink, info) {
    $(clickedLink).click(function () {
        $(info).slideToggle("slow");
    });
};
function closeInformation(clickedLink, infoFade) {
    $(clickedLink).click(function () {
        $(infoFade).fadeOut(1000);
    });
}
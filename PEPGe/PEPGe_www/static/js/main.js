$( document ).ready(function() {

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 160
    });

    $('#timeSlider').slider({
        tooltip: 'always',
        formatter: function(value) {
            return getTime(value);
        }
    });

    updateGrid();
});

// Updates the grid with new data from the endpoint
function updateGrid() {
    $.ajax({
        url: "/tv-listing",
        success: function(programmeData){
            // Loop through returned data about each programme and create a tile for it
            $.each(programmeData, function(channel, programme) {
                // TODO: create tile here
            });
        }
    });
}

// Add addHours functionality to Date
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
};

// Translates slider time to human readable minutes
// Time from 0-24, 12 is now
function getTime(time) {
    returnStr = "";

    // Normalise time to be centered around 0
    time = time - 12;

    // Get the current time and add difference
    var d = new Date();

    // 0 is now
    if (time == 0) {
        return "Now (" + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ")";
    }

    d.addHours(time);

    // Add relative time to string
    if (time > 0) {
        sign = "+";
    } else {
        sign = "";
    }
    returnStr += sign + time + "hrs ";

    // Add absolute time to string
    returnStr += "(" + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ")";

    // Return the time
    return returnStr;
}
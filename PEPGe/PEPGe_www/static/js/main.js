var CHANNELS = [
    1001, 1002, 1003, 1004, 1007, 1014, 1019, 1020, 1023,
    1025, 1032, 1033, 1034, 1035, 1037, 1038, 1045, 1046,
    1047, 1048, 1057, 1059, 1060, 1065, 1066, 1073, 1091,
    1092, 1093, 1094, 1095, 1096, 1098, 1099, 1105, 1251,
    1252, 1253, 1255, 1256, 1257, 1270, 1305, 1306, 1307,
    1326, 1348, 1350, 1351, 1352, 1355, 1357, 1360, 1361,
    1362, 1363, 1364, 1370, 1371, 1402, 1403, 1406, 1409,
    1413, 1414, 1448, 1627, 1629, 1637, 1666, 1668, 1675,
    1726, 1752, 1757, 1758, 1771, 1791, 1800, 1802, 1805,
    1806, 1807, 1808, 1810, 1811, 1813, 1814, 1815, 1816,
    1818, 1821, 1822, 1823, 1827, 1830, 1834, 1835, 1836,
    1837, 1838, 1839, 1841, 1842, 1843, 1844, 1845, 1846,
    1847, 1849, 1852, 1853, 1857, 1858, 1865, 1872, 1874,
    1875, 1877, 1879, 1881, 1882, 1884, 1890, 1891, 2002,
    2003, 2004, 2005, 2006, 2011, 2012, 2015, 2016, 2017,
    2018, 2019, 2020, 2051, 2072, 2073, 2074, 2075, 2076,
    2078, 2081, 2082, 2083, 2085, 2086, 2088, 2101, 2102,
    2103, 2104, 2105, 2106, 2151, 2152, 2153, 2154, 2155,
    2156, 2201, 2203, 2205, 2207, 2296, 2301, 2302, 2305,
    2307, 2308, 2309, 2320, 2325, 2326, 2330, 2365, 2376,
    2401, 2402, 2404, 2405, 2406, 2407, 2408, 2409, 2410,
    2418, 2502, 2503, 2505, 2506, 2507, 2508, 2509, 2510,
    2511, 2512, 2513, 2515, 2516, 2517, 2552, 2601, 2602,
    2603, 2606, 2607, 2608, 2609, 2612, 2615, 2616, 2617,
    2630, 2703, 2709, 2804, 2808, 2816, 3000, 3001, 3010,
    3012, 3022, 3023, 3024, 3027, 3028, 3105, 3107, 3108,
    3109, 3111, 3116, 3117, 3141, 3147, 3150, 3201, 3205,
    3206, 3207, 3208, 3209, 3211, 3213, 3214, 3216, 3219,
    3224, 3255, 3258, 3260, 3300, 3310, 3351, 3352, 3353,
    3354, 3355, 3356, 3357, 3358, 3359, 3360, 3392, 3401,
    3403, 3404, 3406, 3407, 3411, 3414, 3415, 3417, 3505,
    3508, 3510, 3525, 3527, 3531, 3542, 3580, 3583, 3585,
    3590, 3592, 3594, 3601, 3602, 3603, 3604, 3605, 3606,
    3607, 3608, 3609, 3611, 3612, 3613, 3615, 3617, 3618,
    3620, 3621, 3631, 3632, 3636, 3641, 3643, 3645, 3646,
    3648, 3650, 3653, 3662, 3664, 3665, 3666, 3667, 3682,
    3701, 3704, 3705, 3708, 3709, 3714, 3715, 3719, 3720,
    3721, 3722, 3730, 3731, 3732, 3735, 3745, 3750, 3751,
    3760, 3771, 3776, 3780, 3781, 3800, 3802, 3805, 3806,
    3809, 3810, 3811, 3812, 3813, 3815, 3820, 3825, 3830,
    3831, 3836, 3845, 3850, 3881, 3914, 3916, 3920, 3935,
    4003, 4004, 4007, 4009, 4012, 4013, 4014, 4015, 4016,
    4017, 4018, 4019, 4020, 4021, 4022, 4023, 4025, 4026,
    4028, 4029, 4030, 4031, 4033, 4034, 4037, 4038, 4039,
    4040, 4043, 4044, 4049, 4053, 4054, 4055, 4056, 4058,
    4062, 4063, 4065, 4066, 4067, 4068, 4069, 4070, 4071,
    4073, 4074, 4075, 4076, 4077, 4080, 4081, 4086, 4088,
    4092, 4093, 4100, 4101, 4102, 4105, 4110, 4205, 4210,
    4215, 4216, 4245, 4261, 4262, 4263, 4265, 4266, 4320,
    4330, 4332, 4334, 4335, 4340, 4350, 4360, 4402, 4403,
    4404, 4407, 4408, 4410, 4420, 4421, 4460, 4502, 4504,
    4505, 4540, 4541, 4548, 4549, 4551, 4560, 4604, 4610,
    4645, 4670, 4753, 4933, 5033, 5036, 5037, 5039, 5040,
    5043, 5050, 5070, 5071, 5087, 5089, 5090, 5122, 5123,
    5125, 5126, 5153, 5154, 5192, 5193, 5201, 5205, 5211,
    5212, 5217, 5228, 5229, 5245, 5252, 5253, 5254, 5272,
    5275, 5285, 5296, 5297, 5300, 5308, 5311, 5314, 5315,
    5327, 5337, 5338, 5354, 5358, 5359, 5414, 5415, 5416,
    5417, 5421, 5426, 5450, 5451, 5452, 6020, 6110, 6230,
    6240, 6241, 6260, 6261, 6272, 6273, 6274, 6365, 6371,
    6390, 6501, 6505, 6506, 6507, 6508, 6510, 6532, 6533,
    6534, 6548, 6753, 6754, 6758, 6761, 6765
];

/**
 * The program display grid.
 */
function Grid ()
{
    /**
     * Shortcut to the jQuery object.
     */
    var $grid = $('.grid');

    /**
     * The tiles currently displayed.
     */
    var current_tiles = [];

    // Initialize the masonry grid.
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 5
    });

    /**
     * The function run when a grid item is clicked.
     *
     * this refers to the grid item in this context.
     */
    function click_handler ()
    {
        $(this).toggleClass('expanded');
        $grid.masonry();
    }
    $grid.on('click', '.grid-item', click_handler);

    /**
     * Load the program data from the backend.
     *
     * Retrieved data is passed to the callback function.
     */
    function load_data (callback)
    {
        $.ajax({
            url: '/tv-listing',
            method: 'POST',
            data: {
                channels: CHANNELS.slice(0, 20).join(','),
                time: new Date().addHours($('#timeSlider').val() - 12).getTime()
            },
            success: function (data) {
                if (callback)
                    callback(data);
            }
        });
    }

    /**
     * Update the grid with the given program data.
     */
    function update_grid (program)
    {
        var new_tiles = [];

        $.each(program, function (channel, show) {
            new_tiles.push(new Tile(show['name'],
                                    channel,
                                    show['desc'],
                                    show['image'],
                                    show['relevance']));
        });

        var temp = $(new_tiles.map(function (e) {
            return e.get_html();
        }));

        $grid.prepend(temp).masonry('prepended', temp, true);
        $grid.masonry('reloadItems');
        $grid.masonry('layout');
    }

    /**
     * Refresh the grid, retrieving fresh data and updating the grid
     * in one go.
     */
    this.refresh = function () {
        load_data(function temp (data) {
            update_grid(data);
        });
    };
}

/**
 * Grid entries.
 */
function Tile (title, channel, desc, image, relevance)
{
    /**
     * Get the title of the slot this object represents.
     */
    this.get_title = function () {
        return title;
    };

    /**
     * Get the channel to which this slot belongs.
     */
    this.get_channel = function () {
        return channel;
    };

    /**
     * Get the description of this slot.
     */
    this.get_desc = function () {
        return desc;
    };

    /**
     * Get the background image for this slot.
     */
    this.get_image = function () {
        return image;
    };

    /**
     * Get the relevance rating for this slot.
     */
    this.get_relevance = function () {
        return relevance;
    };
}

/**
* Whether a tile is equal to another.
*/
Tile.prototype.equals = function (other) {
    return this.get_title() === other.get_title()
        && this.get_channel() === other.get_channel()
        && this.get_desc() === other.get_desc()
        && this.get_relevance() === other.get_relevance();
};

/**
* Get the html that creates the tile.
*/
Tile.prototype.get_html = function () {
    var item_size = '';

    if (this.get_relevance() > 3 && this.get_relevance() < 6)
        item_size = ' grid-item--size2';
    else if (this.get_relevance() > 6)
        item_size = ' grid-item--size3';

    var e = $('<div class="grid-item' + item_size + '">');
    e.css('background-image', 'url(' + this.get_image() + ')');
    e.append($('<span class="title" />').html(this.get_title()));
    e.append($('<span class="channel" />').html(this.get_channel()));
    e.append($('<span class="description" />').html(this.get_desc()));

    return e.get(0);
};

function range (start, end) {
    if (end === null) {
        start = 0;
        end = start;
    }

    var a = new Array(end - start);
    for (var i = 0; i < end - start; i++)
        a[i] = i + start;

    return a;
}

$(document).ready(function() {
    var grid = new Grid();
    grid.refresh();

    $('#timeSlider').slider({
        tooltip: 'always',
        formatter: function(value) {
            return getTime(value);
        }
    }).on('slide', grid.refresh);
});

// Builds html for a tile
function buildTileHTML(channel, name, image, relevance) {
    var item_size = '';

    if (relevance >= 3 && relevance < 6)
        item_size = ' grid-item--size2';
    else if (relevance >= 6 && relevance <= 8)
        item_size = ' grid-item--size3';
    else if (relevance > 8)
        item_size = ' grid-item--size4';

    var e = $('<div class="grid-item' + item_size + '">');
    e.css('background-image', 'url(' + image + ')');
    e.append($('<span class="title" />').html(name));
    e.append($('<span class="channel" />').html(channel));

    return e.get(0);
}

// Add addHours functionality to Date
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
};

// Translates slider time to human readable minutes
// Time from 0-24, 12 is now
function getTime(time) {
    var returnStr = '';

    // Normalise time to be centered around 0
    time = time - 12;

    // Get the current time and add difference
    var d = new Date();

    // 0 is now
    if (time == 0) {
        return 'Now (' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ')';
    }

    d.addHours(time);

    // Add relative time to string
    var sign = '';
    if (time > 0) {
        sign = '+';
    } else {
        sign = '';
    }
    returnStr += sign + time + 'hrs ';

    // Add absolute time to string
    returnStr += '(' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ')';

    // Return the time
    return returnStr;
}

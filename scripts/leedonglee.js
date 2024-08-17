$(document).ready (function () {
    init();
});

function init() {
    var index = 1;

    while (true) {
        if ($('#container .wrap #content-' + index + ' .content-head .toggle').length && $('#container .wrap #content-' + index + ' .content-body').length) {
            (function(i) {
                $('#container .wrap #content-' + i + ' .content-head .toggle').click(function() {
                    toggle(i);
                });

                var subIndex = 1;

                while (true) {
                    if ($('#container .wrap #content-' + i + '-' + subIndex + ' .content-head .toggle').length && $('#container .wrap #content-' + i + '-' + subIndex + ' .content-body').length) {
                        (function(j) {
                            $('#container .wrap #content-' + i + '-' + j + ' .content-head .toggle').click(function() {
                                toggle(i + '-' + j);
                            });
                        })(subIndex);
    
                    } else {
                        break;
                    }
    
                    subIndex++;
                }
            })(index);

            index++;
        } else {
            break;
        }
    }

    if ($('#container .wrap .main .profile table th a').length) {
        $('#container .wrap .main .profile table th a').click(function() {
            var element = $('#container .wrap .main .profile .profile-more-info');
            element.toggleClass('hidden');
        });
    }
}

function toggle(index) {
    console.log(index);

    var element = $('#container .wrap #content-' + index);
    element.toggleClass('hidden');
}
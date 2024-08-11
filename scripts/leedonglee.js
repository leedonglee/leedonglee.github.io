$(document).ready (function () {
    init();
});

function init() {
    var index = 1;

    while (true) {
        if ($('#container .wrap #content-' + index + ' .head .toggle').length && $('#container .wrap #content-' + index + ' .body').length) {
            (function(i) { // 클로저를 사용하여 index 값을 고정
                $('#container .wrap #content-' + i + ' .head .toggle').click(function() {
                    toggle(i);
                });
            })(index);

            index++;
        } else {
            break;
        }
    }
}

function toggle(index) {
    var element = $('#container .wrap #content-' + index);
    element.toggleClass('hidden');
}
/** initEvent.js에서 세팅 된 이벤트 고유 값 참고...
    해당 값으로 세팅됨.
 */

$(function() {
    $('.placeList .img_wrap button').on("click", function(ev) {
        ev.stopPropagation();
        var el = ev.target;

        if (el.className.indexOf('on') > -1) {
            alert(alreadyClickMessage);

        } else {
            el.className = 'on';
            el.previousElementSibling.innerText =
                    parseInt(el.previousElementSibling.innerText) + 1;

            setLike(el.parentNode.parentNode.id);
        }
    })
});

function fetchLikeAmounts() {
    $.ajax({
        url: "./ajax/getLikeAmounts.php",
        type: "POST",
        data: {
            eventId: eventId,
            lang: lang,
        },

        success: function(dataList) {
            var data_array = JSON.parse(dataList);
            data_array.forEach(function(data, idx) {
                console.log(data.component_id)
                if(data.component_id != ''){
                    $('#' + data.component_id + ' .img_wrap em').text(data.like_cnt);
                }
            });
        },
        error: function() {
            alert("Fail !!")
        },
    });
}

function setLike(componentId) {
    $.ajax({
        url: "./ajax/setLike.php",
        type: "POST",
        data: {
            eventId: eventId,
            componentId: componentId,
            lang: lang,
        },
        success: function(data) {
            if (data == 1) {
                // alert("success");

            } else {
                // console.log("query_amount :: ", data);
                // alert("fail");
            }
        },
        error: function() {
            // alert("Fail !!")
        },
    });
}

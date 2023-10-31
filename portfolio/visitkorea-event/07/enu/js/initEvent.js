var snsShareTitle = $('#meta_og_title')[0].content;
var snsShareSummary = $('#meta_og_description')[0].content;
var snsShareUrl = $('#meta_og_url')[0].content;

var GTM_ID = "GTM-NBGFS57";
var gtmId = getCookie("CookiePop") ? GTM_ID : "";


$(function() {
    setSnsShareArea();
    // setCookiePopup();
});

function setCookiePopup() {
    if (! getCookie("CookiePop")) {
        $(".cookie_wrap").css("display", "block");
        $(".cookie_pop_bg").css("display", "block");

    } else {
        $(".cookie_wrap").css("display", "none");
        $(".cookie_pop_bg").css("display", "none");
    }

    $(".cbtn_close").click(function() {
        $(".cookie_wrap").css("display", "none");
        $(".cookie_pop_bg").css("display", "none");

        return false;
    });
}

function igotit() {
    gtmId = GTM_ID;

	  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',gtmId);

    setCookie("CookiePop", "CookiePop", 365);
    $(".cookie_wrap").css("display", "none");
    $(".cookie_pop_bg").css("display", "none");
}

function setSnsShareArea() {
    $('.linksns').on("click", function(ev) {
        shareToSns(ev.target.className);
    });

    $("#copy_url").prop("readonly", "readonly");

    $('.copy_area button').on("click", function() {
        copyLinkUrl();
    });
}

function shareToSns(className) {
    if (className.indexOf('facebook') > -1) {
        shareToFacebook();
    } else if (className.indexOf('line') > -1) {
        shareToLine();
    }
}

function shareToFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(snsShareUrl));
}

function shareToLine() {
    window.open("http://line.me/R/msg/text/?" + encodeURIComponent(snsShareTitle + '\n' + snsShareSummary + '\n' + snsShareUrl));
}

function copyLinkUrl() {
    $("#copy_url").select();
    var success = document.execCommand("Copy");
    if (success) {
        alert(linkCopiedMessage);
    }
}

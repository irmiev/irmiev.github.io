$(document).ready(function () {
    console.log("The page has loaded.");
});

function getContent(page) {
    console.log(page);
    console.log("Hello text");
    $.get("content/" + page + ".html",
        function (data) {
            console.log("Setting document.");
            $(".content").html(data);
        });
}
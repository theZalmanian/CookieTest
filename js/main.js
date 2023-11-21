window.onload = function () {
    setupButton("create-cookie", createCookieData);
    setupButton("read-cookie", readCookieData);
    setupButton("delete-cookie", deleteCookieData);
};
var myCookie = "test-cookie";
function createCookieData() {
    var daysToExpiration = 14;
    Cookies.set(myCookie, "This is a test cookie!", { expires: daysToExpiration });
}
function readCookieData() {
    var data = Cookies.get(myCookie);
    if (data != undefined) {
        alert(data);
    }
    else {
        alert("No cookie is present!");
    }
}
function deleteCookieData() {
    Cookies.remove(myCookie);
}
function setupButton(id, useFunction) {
    var button = getByID(id);
    button.onclick = useFunction;
}
function getInputByID(id) {
    return getByID(id);
}
function getByID(id) {
    return document.getElementById(id);
}

window.onload = function() {
    // setup an onclick event for each button
    setupButton("create-cookie", createCookieData)
    setupButton("read-cookie", readCookieData);
    setupButton("delete-cookie", deleteCookieData)
}

const myCookie:string = "test-cookie";

function createCookieData() {
    // create a new cookie, 
    // and set it's expiration date to 2 weeks
    const daysToExpiration = 14;
    Cookies.set(myCookie, "This is a test cookie!", {expires:daysToExpiration});
}

function readCookieData() {
    // get cookie data
    let data = Cookies.get(myCookie);
    
    // check that data is not empty
    if(data != undefined) {
        // display to user
        alert(data);
    }
    
    // if empty, display error
    else {
        alert("No cookie is present!");
    }
}

function deleteCookieData() {
    // delete the cookie
    Cookies.remove(myCookie);
}

/****************
**** HELPERS ****
****************/

/**
 * Sets up an onclick event for a button
 * @param id The button's id
 * @param useFunction The function to be called when button is clicked
 */
 function setupButton(id:string, useFunction:() => void):void {
    let button:HTMLElement = getByID(id);
    button.onclick = useFunction;
}

/**
 * Gets an HTML Input Element by it's ID
 * @param id - The input's id
 * @returns The corresponding HTML Input Element
 */
function getInputByID(id:string):HTMLInputElement {
    return <HTMLInputElement> getByID(id);
}

/**
 * Shortened form of the document.getElementById method
 * @param id - The element's id
 * @returns The corresponding HTML Element
 */
function getByID(id:string):HTMLElement {
    return document.getElementById(id);
}
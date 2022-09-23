
function log(msg){

    return console.log(msg);

}

function toggleClass(el, _className="active"){

    return el.classList.toggle(_className);

}

function removeClass(el, _className="active"){
    if(el){
        return hasClass(el, _className) ? el.classList.remove(_className) : true;
    }
    return false;

}

function hasClass(el, _className="active"){

    if(el.classList.contains(_className)){
        return true;
    } else {
        return false;
    }
    return false;

}


function getElement(target, targetFrom=false){

    return targetFrom ? targetFrom.querySelector(target) : document.querySelector(target);

}


function getElements(target, targetFrom=false){

    return targetFrom ? [...targetFrom.querySelectorAll(target)] : [...document.querySelectorAll(target)];

}



function getElementById(target, targetFrom=false){

    return targetFrom ? targetFrom.getElementById(target) : document.getElementById(target);

}

function addClass(el, _className="active"){
    if(el){
        return !hasClass(el, _className) ? el.classList.add(_className) : true;
    }
    return false;
}


function getParent(el, idx){

    previouslyParent = el.parentElement;
    for (let index = 0; index < idx - 1; index++) {
        previouslyParent = previouslyParent.parentElement;
        
    }
    return previouslyParent;


}

function getOffset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


function objectToTagStyles(selector, styles){

    if(styles){
        var style = document.createElement('style');
        resonanceCssString = `${selector} {`;

        for (const [key, value] of Object.entries(styles)) {
            resonanceCssString += `${key}:${value};`;
        }

        resonanceCssString += "}";

        if (style.styleSheet) {
            style.styleSheet.cssText = resonanceCssString;
        } else {
            style.appendChild(document.createTextNode(resonanceCssString));
        }

        document.getElementsByTagName('head')[0].appendChild(style);
        return true;
    }

    return false;

}

function objectToCssTextStyles(styles){

    if(styles){
        resonanceCssString = '';

        for (const [key, value] of Object.entries(styles)) {
            resonanceCssString += `${key}:${value};`;
        }

        return resonanceCssString;

    }

    return false;

}

function getAttribute(element, attr, isReturnValue){

    return isReturnValue ? element.attributes[attr].value : element.attributes[attr];

}

function clearClasses(arr, _className="active"){

    return arr.forEach(ar => {

        clearableElement = getElement(ar);
        if(clearableElement){
            hasClass(clearableElement, _className) ? removeClass(clearableElement, _className) : "";
        }
    });

}


function randomStringGenerator(stringLength){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < stringLength; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}


function appendToElement(appendParentElement,childElementToAppend) {
    elementToAppend = appendParentElement;
    if(typeof appendParentElement === 'string' || appendParentElement instanceof String){
        elementToAppend = getElement(appendParentElement)  
    }

    return elementToAppend.appendChild(childElementToAppend);
}


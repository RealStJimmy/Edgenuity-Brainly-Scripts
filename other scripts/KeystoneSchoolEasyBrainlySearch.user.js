// ==UserScript==
// @name         Keystone School Easy Brainly Search
// @namespace    reddit.com/u/subatomicmc
// @version      1
// @description  adds some easy searching
// @author       Subatomicmc
// @match        https://learnx-svc.k12.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var button = document.createElement("button")
    button.id = "searchButton"
    button.innerText = "Search on Brainly"
    button.style.position = "absolute"
    button.style.visibility = "visible"
    button.onmouseclick
    document.body.append(button)
    document.getElementById("searchButton").onclick = onButtonClick
    document.onmouseup = mouseup
    var buttonpressed = false;
    function mouseup(e){
        var selection = document.getSelection().toString()
        if(buttonpressed == false && selection != ""){
            document.getElementById("searchButton").style.visibility = "visible"
            document.getElementById("searchButton").style.top = e.clientY + 10 + "px"
            document.getElementById("searchButton").style.left = e.clientX + "px"
        }
        else
        {
            document.getElementById("searchButton").style.visibility = "hidden"
            buttonpressed = false
        }
    }
    function onButtonClick(){
        buttonpressed = true
        var url = 'https://brainly.com/app/ask?entry=top&q=' + encodeURIComponent(window.getSelection().toString())
        window.open(url , '_blank')
    }
    // Your code here...
})();
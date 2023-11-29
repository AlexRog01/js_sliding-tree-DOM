document.querySelectorAll(".tree li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.nodeValue,e.firstChild.remove(),e.prepend(t)}),document.querySelector(".tree").addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextSibling;"none"!==t.style.display?t.style.display="none":t.style.display="block"}});//# sourceMappingURL=index.2fcc427f.js.map

//# sourceMappingURL=index.2fcc427f.js.map

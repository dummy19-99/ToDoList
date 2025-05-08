/* 基本文法、タグ、methodなどがわからなくて調べました。 */

document.getElementById("addList").addEventListener("submit",function(e){
e.preventDefault();    

var todo = document.createElement("ToDo").value;
todo.type = "input";

var form = document.createElement("form");

        
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
        
var ul = document.createElement("ul");

var addlBtn = document.createElement("button");
addBtn.type="submit";
        
var delBtn = document.createElement("button");
delBtn.type="submit";
        
    /*  */
    checkbox.addEventListener("change", function() {
        if(checkbox.checked) {
            ul.style.textDecoration="line-through";
            } else {
            ul.style.textDecoration="none";
        }
    });

    form.addEventListener("submit", function() {
        form.remove();
      });

});


/* 
    参考
    https://www.javadrive.jp/javascript/form/index2.html
    https://www.javadrive.jp/javascript/form/index1.html
    https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/A_first_splash
    https://qiita.com/yjn279/items/0b0bd72330974186be8c
    https://developer.mozilla.org/ja/docs/Web/API/Document
    https://developer.mozilla.org/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity

*/
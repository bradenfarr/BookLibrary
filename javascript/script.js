let list = document.getElementById('bookList');
let addBook = document.querySelector('.addItem')
let removeBook = document.querySelector('.removeItem')
let deleteList = document.querySelector('.clearList')

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

addBook.addEventListener('click', function() {
    createLI()
  });

 function createLI() {
     var ul = document.getElementById("bookList");
     var li = document.createElement("li");
     li.setAttribute("title", "Click to change read status"); // added line
     ul.appendChild(li);
 }





//   function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }
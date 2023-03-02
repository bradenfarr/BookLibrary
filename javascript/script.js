let list = document.getElementById('bookList');
let addBook = document.querySelector('.addItem')
let deleteList = document.querySelector('.clearList')
let sidebar = document.querySelector('.sidebar')

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

var myNodelist = document.querySelectorAll('.closebtn');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

addBook.addEventListener('click', function() {
  var li = document.createElement("li");
  var inp = document.createElement("input");
  var btn = document.createElement("button");
  addBook.setAttribute("class", "noHover");
  btn.innerHTML = "Add";
  list.appendChild(li);
  li.appendChild(inp);
  li.appendChild(btn);
  inp.setAttribute("type", "text");
  inp.setAttribute("id", "bookTitle");
  inp.setAttribute("maxlenght", "40");
  //add new book with user input
  btn.onclick = function(){
    var inputValue = document.getElementById('bookTitle').value
    var newli = document.createElement("li");
    var t = document.createTextNode(inputValue);
    newli.appendChild(t);
    if (inputValue === '') {
      alert("Please enter a book title.");
    } else {
      document.getElementById('bookList').appendChild(newli);
      // add close button
      newli.setAttribute("class", "closebtn");
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      newli.appendChild(span);

      li.remove();
      btn.remove();
      inp.remove();
      addBook.removeAttribute("class", "noHover");
    };
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    newli.setAttribute("title", "Click to change read status");
  };
});

deleteList.addEventListener('click', function() {
  document.querySelectorAll(".closebtn").forEach(e => e.remove());
});
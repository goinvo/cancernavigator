// Make table cell clickable

document.getElementById('pink').addEventListener('click', pink_Div);

function pink_Div() {
    if (document.getElementById('pink').innerHTML === document.getElementById('pink').innerHTML) {
        document.getElementById('pink').innerHTML = "This is where the description goes";
    } else {
        document.getElementById('pink').innerHTML = document.getElementById('pink').innerHTML;
    }
};

const myDiv = document.getElementById('myDiv');
const myPanel = document.getElementById('myPanel');

function togglePanel() {
    var panel = document.getElementById("myPanel");
    panel.classList.toggle("show");
  }
  
var div = document.getElementById("myDiv");
div.addEventListener("click", togglePanel);
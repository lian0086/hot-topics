/*const container =  document.querySelector(".content");
const links = document.querySelectorAll(".nav a");
let url = "./partials/home.html";

const loadcontent = function(urlfeed) {
  
    fetch(urlfeed)
    .then (function (response){
        return response.text();
    })
    .then(function (data) {
        container.innerHTML = data;
    })
    .catch(function (error) {
           console.log(error.message);
           });
    
};

loadcontent(url);

const selectContent = function(e){
    e.preventDefault();
    
    let a = e.target.getAttribute("href");
    
    loadcontent(a);
};

links[0].addEventListener("click", selectContent);
links[1].addEventListener("click", selectContent);
*/
$(document).ready(function(){
	$("#content").load("./partials/home.html");
	$("#article").click(function(){
		$("#content").load("./partials/home.html");
	});
	$("#portfolio").click(function(){
		$("#content").load("./partials/portfolio.html");
	});
});



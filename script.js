const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

document.body.style.background="#111";

document.body.style.color="white";

toggle.innerHTML="☀";

}else{

document.body.style.background="#f4f7fb";

document.body.style.color="#333";

toggle.innerHTML="🌙";

}

}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{

background:#F5F7FA;
color:#333;
line-height:1.6;

}

header{

background:#243F8F;
padding:18px 8%;

position:sticky;
top:0;
z-index:100;

}

nav{

display:flex;
justify-content:space-between;
align-items:center;

}

.logo{

color:white;
font-size:28px;

}

nav ul{

display:flex;
list-style:none;
gap:35px;

}

nav a{

text-decoration:none;
color:white;
font-weight:500;
transition:.3s;

}

nav a:hover{

color:#22C55E;

}

.resume-btn{

background:white;
color:#243F8F;
padding:10px 22px;
border-radius:6px;
font-weight:600;

}

.hero{

height:85vh;

display:flex;
justify-content:center;
align-items:center;

text-align:center;

background:white;

}

.hero h1{

font-size:55px;

}

.hero span{

color:#243F8F;

}

.hero h2{

margin-top:10px;
font-weight:500;
color:#666;

}

.hero p{

margin:25px auto;
max-width:700px;
font-size:18px;

}

.btn{

display:inline-block;

background:#243F8F;

color:white;

padding:14px 30px;

text-decoration:none;

border-radius:8px;

transition:.3s;

}

.btn:hover{

background:#1B3273;

}

section{

padding:80px 10%;

}

section h2{

text-align:center;
font-size:36px;
margin-bottom:40px;
color:#243F8F;

}

.cards{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(180px,1fr));

gap:25px;

}

.card{

background:white;

padding:25px;

text-align:center;

border-radius:10px;

box-shadow:0 3px 12px rgba(0,0,0,.12);

font-weight:600;

transition:.3s;

}

.card:hover{

transform:translateY(-6px);

}

.projects{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:35px;

}

.project{

background:white;

border-radius:12px;

overflow:hidden;

box-shadow:0 3px 15px rgba(0,0,0,.12);

transition:.3s;

}

.project:hover{

transform:translateY(-8px);

}

.project img{

width:100%;
height:220px;
object-fit:cover;

}

.project h3{

padding:20px;

color:#243F8F;

}

.project p{

padding:0 20px 20px;

}

.project a{

display:block;

text-align:center;

padding:15px;

background:#243F8F;

color:white;

text-decoration:none;

font-weight:600;

}

.project a:hover{

background:#1B3273;

}

#contact{

text-align:center;

}

footer{

background:#243F8F;

color:white;

padding:25px;

text-align:center;

margin-top:50px;

}

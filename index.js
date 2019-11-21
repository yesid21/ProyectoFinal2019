const http = require('http');
const colors = require ('colors');

const handleServer = function (req, res){
res.writeHead(200,{'Content-type': 'text/html'});
res.write(`
<head>
<title>Plantillas</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="icon" type="image/x-icon" href="imagenes/favicon.ico" />
<style>
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
body, html {
    height: 100%;
    color: #777;
    line-height: 1.8;
}
.zoom{
        /* Aumentamos la anchura y altura durante 2 segundos */
        transition: width 2s, height 2s, transform 2s;

        -webkit-transition: width 2s, height 2s, -webkit-transform 2s;

    }
    .zoom:hover{
        /* tranformamos el elemento al pasar el mouse por encima al doble de
           su tamaño con scale(2). */
        transform : scale(2);

        -webkit-transform : scale(2);   /* Chrome - Safari */

    }

.bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.bgimg-1 {
    background-image: url('https://www.hofmann.es/blog/wp-content/uploads/2014/06/Otori-Destacado.jpg');
    min-height: 100%;
}

/* Second image (Portfolio) */
.bgimg-2 {
    background-image: url('https://i.blogs.es/53615a/650_1000_martinak15/450_1000.jpg');
    min-height: 400px;
}

/* Third image (Contact) */
.bgimg-3 {
    background-image: url('https://www.dzoom.org.es/wp-content/uploads/2013/08/dog-188273_1920-810x540.jpg');
    min-height: 400px;
}

.w3-wide {letter-spacing: 10px;}
.w3-hover-opacity {cursor: pointer;}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
    .bgimg-1, .bgimg-2, .bgimg-3 {
        background-attachment: scroll;
    }
}
</style>
<script type="text/javascript" src="js/jquery2.1.js"></script>
</head>
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar" id="myNavbar">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <a href="#home" class="w3-bar-item w3-button">INICIO</a>
    <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ACERCA DE</a>
    <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> PORTAFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACTENOS</a>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
      <i class="fa fa-search" placeholder="What are you looking for?"></i>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
    <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">INICIO</a>
    <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTAFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACTENOS</a>
    <a href="#" class="w3-bar-item w3-button">BUSCAR</a>
  </div>
</div>

<!-- First Parallax Image with Logo Text -->
<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
  <div class="w3-display-middle" style="white-space:nowrap;">
    <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">PLANTILLAS <span class="w3-hide-small">PARA</span> TU PAGINA</span>
  </div>
</div>

<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
  <h3 class="w3-center">ACERCA DE</h3>
  <p class="w3-center"><em>CREACION DE PLANTILLAS</em></p>
  <p style="text-align:justify;">Somos una empresa dedicada a la creacion de plantillas y diseño web, nuestra empresa elabora estas plantillas con un costo a precio muy bajo para facilitar el trabajo de los desarrolladores y poder satisfacer sus necesidades al ellos comprar uno de nuestros productos. Nuestra empresa es responsable y seria, y se empeña en el trabajo segun lo que necesite el cliente, en este caso el desarrollador o diseñador web 

  </p>
  <div class="w3-row">
    <div class="w3-col m6 w3-center w3-padding-large">
      <p><b><i class="fa fa-user w3-margin-right"></i>Plantillas.ORG</b></p><br>
      <img src="https://infolocal.comfenalcoantioquia.com/media/com_jbusinessdirectory/pictures/companies/807/logocesde-1520604743.png" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="200" height="150">
    </div>

    <!-- Hide this text on small devices -->
    <div class="w3-col m6 w3-hide-small w3-padding-large">
      <p style="text-align:justify;">Bienvenido a nuestra pagina oficial de venta de manga, "mangas.com". Entendemos que todos busca con diferentes criterios en mente. Es por eso que hemos diseñado mangas.com para ser navegado en sus términos. Mangas.com le ofrece el grupo más completo de anunciantes en un formato de fácil navegación, que ofrece a los usuarios una amplia gama de opciones en el menor número de clics posible.<br><br>
      somos una empresa con diseñadores de alta calidad.
      ingenieros,tecnologos y tecnicos, aparte de que nuestros arquitectos enseñan a los practicantes acabados de terminar sus estudios o a medida de que lo terminan. Al final de su periodo practicante, se hacen parte de la empresa estos mismos. 
</p>
    </div>
  </div>
  <p class="w3-large w3-center w3-padding-16">Somos Buenos En:</p>
  <p class="w3-wide"><i class="fa fa-camera"></i>Diseño</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%">90%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-laptop"></i>Programacion</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%">90%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-photo"></i>Edicion</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%">75%</div>
  </div>
</div>

<div class="w3-row w3-center w3-dark-grey w3-padding-16">
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">14+</span><br>
    Socios
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">55+</span><br>
    Proyectos
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">89+</span><br>
    Clientes Satisfechos
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">150+</span><br>
    Reuniones
  </div>
</div>


<div class="bgimg-2 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
    <span class="w3-xxlarge w3-text-white w3-wide">PORTAFOLIO</span>
  </div>
</div>

<div class="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 class="w3-center">Nuestro Trabajo</h3>
 
  <div class="w3-row-padding w3-center">
    <h1>Buscador</h1>
    <form>
        Introduzca Palabra Clave <input id="searchTerm" type="text" onkeyup="doSearch()" />
    </form>
    <p>
        <table id="datos" align="center" style="width: 100%">
            <tr>
                <th>ID</th><th>NOMBRE DEL MANGA</th><th>DESCRIPCION</th><th>Anio</th><th >Foto</th>
            </tr>
            <tr>
                <td>1</td><td>Dragon Ball Z</td><td>Batallas Y Aventuras Con El Protagonista Son Goku</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073640_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>2</td><td>Los Simpson</td><td>Indefinida Momentaneamente</td><td>1995</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073666_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>3</td><td>Dragon Ball</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073639_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>4</td><td>Tom y Jerry</td><td>Indefinida Momentaneamente</td><td>1982</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073680_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>5</td><td>Looney Tunes</td><td>Indefinida Momentaneamente</td><td>1965</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073654_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>6</td><td>La Pantera Rosa</td><td>Indefinida Momentaneamente</td><td>1992</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073626_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>7</td><td>Bob Esponja</td><td>Indefinida Momentaneamente</td><td>1993</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073650_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>8</td><td>Scooby Doo</td><td>Indefinida Momentaneamente</td><td>1991</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073625_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>9</td><td>Pokemon</td><td>Indefinida Momentaneamente</td><td>1992</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073662_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>10</td><td>Los picapiedras</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073660_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>11</td><td>Caballeros del Zodiaco</td><td>Indefinida Momentaneamente</td><td>1982</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073628_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>12</td><td>Pajaro loco</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073677_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>13</td><td>Coraje, el perro cobarde</td><td>Indefinida Momentaneamente</td><td>1990</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073672_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>14</td><td>Futurama</td><td>Indefinida Momentaneamente</td><td>1997</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073644_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>15</td><td>Popeye el marino</td><td>Indefinida Momentaneamente</td><td>1974</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073663_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>16</td><td>Doraemon</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073638_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>17</td><td>Pinky y Cerebro</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073661_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>18</td><td>Garfield y sus amigos</td><td>Indefinida Momentaneamente</td><td>1949</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073646_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>19</td><td>Los Pitufos</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073678_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>20</td><td>Las tortugas ninja</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073682_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>21</td><td>El laboratorio de Dexter</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073635_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>22</td><td>Digimon</td><td>Indefinida Momentaneamente</td><td>1999</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073636_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>23</td><td>Ed, Edd y Eddy</td><td>Indefinida Momentaneamente</td><td>1994</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073642_249px.jpg?1310152073"></td>
            </tr>
            <tr>
                <td>24</td><td>Los Rugrats</td><td>Indefinida Momentaneamente</td><td>1992</td><td><img style="width: 35px; height: 35px; margin-left: 25px;" src="https://st-listas.20minutos.es/images/2011-07/294650/3073665_249px.jpg?1310152073"></td>
            </tr>
            
            <tr class='noSearch hide'>
                <td colspan="5"></td>
            </tr>
        </table>
    </p>
    
    <script language="javascript">
        function doSearch()
        {
            const tableReg = document.getElementById('datos');
            const searchText = document.getElementById('searchTerm').value.toLowerCase();
            let total = 0;
    
            // Recorremos todas las filas con contenido de la tabla
            for (let i = 1; i < tableReg.rows.length; i++) {
                // Si el td tiene la clase "noSearch" no se busca en su cntenido
                if (tableReg.rows[i].classList.contains("noSearch")) {
                    continue;
                }
    
                let found = false;
                const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                // Recorremos todas las celdas
                for (let j = 0; j < cellsOfRow.length && !found; j++) {
                    const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                        found = true;
                        total++;
                    }
                }
                if (found) {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }
    
            // mostramos las coincidencias
            const lastTR=tableReg.rows[tableReg.rows.length-1];
            const td=lastTR.querySelector("td");
            lastTR.classList.remove("hide", "red");
            if (searchText == "") {
                lastTR.classList.add("hide");
            } else if (total) {
                td.innerHTML="Se ha encontrado "+total+" coincidencia"+((total>1)?"s":"");
            } else {
                lastTR.classList.add("red");
                td.innerHTML="No se han encontrado coincidencias";
            }
        }
    </script>
    
    <style>
        #datos {border:1px solid #ccc;padding:10px;font-size:1em;}
        #datos tr:nth-child(even) {background:#ccc;}
        #datos td {padding:5px;}
        #datos tr.noSearch {background:White;font-size:0.8em;}
        #datos tr.noSearch td {padding-top:10px;text-align:right;}
        .hide {display:none;}
        .red {color:Red;}
    
    
        ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    }
    
    li {
    float: left;
    }
    
    li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    }
    
    li a:hover {
    background-color: #111;
    }
    </style>


    <button class="w3-button w3-padding-large w3-light-grey" style="margin-top:64px" ><a href="http://www.tumangaonline.com/">Ver Mas</a></button>
    
  </div>
</div>

<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal w3-black" onclick="this.style.display='none'">
  <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large"></p>
  </div>
</div>

<!-- Third Parallax Image with Portfolio Text -->
<div class="bgimg-3 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
     <span class="w3-xxlarge w3-text-white w3-wide">CONTACTENOS</span>
  </div>
</div>

<!-- Container (Contact Section) -->
<div class="w3-content w3-container w3-padding-64" id="contact">
  <h3 class="w3-center">Nuestros Contactos</h3>
  <p class="w3-center"><em>Esperamos Tu Mensaje</em></p>

  <div class="w3-row w3-padding-32 w3-section">
    <div class="w3-col m4 w3-container">
      <!-- Add Google Maps -->
      <div id="googleMap" class="w3-round-large w3-greyscale" style="width:100%;height:400px;"></div>
    </div>
    <div class="w3-col m8 w3-panel">
      <div class="w3-large w3-margin-bottom">
        <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Medellin, Antioquia<br>
        <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Telefono: +57 213 00 11<br>
        <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> E-mail: contactenos@plantillas.com<br>
      </div>
      <p>Pasate Por Una Taza De <i class="fa fa-coffee"></i>, O Dejame Un Comentario:</p>
      <form action="/action_page.php" target="_blank">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Nombre" required name="Name">
          </div>
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Correo" required name="Email">
          </div>
        </div>
        <input class="w3-input w3-border" type="text" placeholder="Mensaje" required name="Message">
        <button class="w3-button w3-black w3-right w3-section" type="submit">
          <i class="fa fa-paper-plane"></i> Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>Volver Arriba</a>
  <div class="w3-xlarge w3-section">
    <a href="https://www.facebook.com/yhiic"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
    <a href="https://www.instagram.com/Yesid21C/"><i class="fa fa-instagram w3-hover-opacity"></i></a>
    <a href="https://www.snapchat.com/"><i class="fa fa-snapchat w3-hover-opacity"></i></a>
    <a href="https://www.pinterest.es/pin/661184789017574441/"><i class="fa fa-pinterest-p w3-hover-opacity"></i></a>
    <a href="https://twitter.com/Yesid21P"><i class="fa fa-twitter w3-hover-opacity"></i></a>
    <a href="https://www.linkedin.com/company/studio-21-plus"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
  </div>
 
</footer>

<script>

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}


function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
</script>
</body>
</html>

`);
res.end();
}
const server = http.createServer(handleServer);

server.listen(3000,function(){
console.log('servidor En El Puerto 3000'.green);
});
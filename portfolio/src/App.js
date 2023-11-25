import './Style.css';

function App() {

 const redondo2={
    width: '30vw',
    height: '30vw',
    borderRadius:'100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: '1',
    left: '35%',
    top:' 13%',
    backgroundImage: 'url(/ondulado.png)',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto 2%',
}
  return (
    <>
    <section class="presentacion">
          <div class="partearriba" >
              <h2 class="nombre"> Martin Bottaro</h2>
            
              <div class="linea1"></div>
              <div class="linea2"></div>
              <div class="linea3"></div>
      
          </div>
          <div class="parteabajo" >
          </div>
      </section> 

      <header >
          
          <nav class="menuindex">
              
              <img src="/logo.png" alt=""/>
              <i class="fa-solid fa-bars"></i>
              <a href="#home"class="menuindividual">
                  <p class="a1">HOME</p>
                  <img src="/punto.png" alt=""/>
              </a>
              <a href="#proyectos"  class="menuindividual">
                  <p class="a1">PROYECTOS</p>
                  <img src="/punto.png" alt=""/>
              </a>    
              <a href="#contacto"  class="menuindividual">
                  <p class="a1">CONTACTO</p>
                  <img src="/punto.png" alt=""/>
              </a>
          </nav>
      </header>
      <main class="principal" id='home'>
          <section class="principalfondo">
          <div class="principal2">
              <img class="imagencelu" src="/martin.jpg" alt=""/>
              <div class="textoingreso">
                  <h1 class="diseñador">Full Stack developer</h1>
                  <p>Hola, soy Martin Bottaro, un apasionado desarrollador front end  <br/> & back end, situado en Argentina.</p>
                  <div class="seccionboton0">
                      <p class="boton0"></p>
                      <a class="mitrabajo" href="https://github.com/martu344?tab=repositories" target="_blank">MIRA MI TRABAJO </a>
                      <span class="material-symbols-outlined">
                          arrow_right_alt
                          </span>
                  </div>
                  <div class="linkgit" >
                      <a  href="https://www.facebook.com/martin.bottaro?mibextid=ZbWKwL"  target="_blank">Facebook</a> <p class="separador">/</p>
                      <a  href="https://www.linkedin.com/in/MartinEzequielBottaro-m1a2r3t4i5n6"  target="_blank">Linkedin</a><p class="separador">/</p>
                      <a  href="https://github.com/martu344"  target="_blank">GitHub</a>
              </div>
            
          </div>
          <div class="redondo"></div>
              <div class="contendorimagen">
                  <img class="imageningreso" src="/martin.jpg" alt=""/>
              </div>
          </div>
          <img class="scroll" src="/scroll.png" alt=""/>
          </section>

          <section class="letras">
            <h1>interaction <span> Desing Interface </span>Desing Experience</h1>
            <h1 class="h11">Prototyping <span> Back end & Front end Developement</span></h1>
            <h1 class="h111">User Testing <span> User Research </span>Art Direction</h1>
        </section>

        
          <section class="proyectos" id='proyectos'>
              <div class="referencia">
                  <p class="linea">..................................</p> <p class="numero">01</p> <h1>Galeria</h1>
                  <p class="numerogrande">01</p>
                  <div class="seccionboton0">
                      <p class="boton0"></p>
                      <a href="https://martu344.github.io/Galeria-infinita-React.js/"  target="_blank">Mirar proyecto</a>
                      <span class="material-symbols-outlined">
                      arrow_right_alt
                      </span>
                  </div>
                  <div class="recuadro"></div>
                  <img class="imagen1" src="/galeria.png" alt=""/>
              </div>
              <div class="referencia">
                  <p class="linea">..................................</p> <p class="numero">02</p> <h1>E-commerce</h1>
                  <p class="numerogrande">02</p>
                  <div class="seccionboton0">
                      <p class="boton0"></p>
                      <a href="https://mowardin.onrender.com/home"  target="_blank"> Mirar proyecto</a>
                      <span class="material-symbols-outlined">
                          arrow_right_alt
                      </span>
                  </div>
                  <div class="recuadro"></div>
                  <img class="imagen1" src="/ecommerce.png" alt=""/>
              </div>
              <div class="referencia">
                  <p class="linea">..................................</p> <p class="numero">03</p> <h1>Pelis-Mern</h1>
                  <p class="numerogrande">03</p>
                  <div class="seccionboton0">
                      <p class="boton0"></p>
                      <a href="mensaje.html"  target="_blank">Mirar proyecto</a>
                      <span class="material-symbols-outlined">
                          arrow_right_alt
                      </span>
                  </div>
                  <div class="recuadro"></div>
                  <img class="imagen1" src="/pelis-mern.png" alt=""/>
              </div>
          </section>

          <section class="cuartaseccion">
            <div style={redondo2}><div class="redondochico"></div></div>
            <h1>"Elige un trabajo que te guste y nunca tendrás que trabajar un día en tu vida."</h1>
            <p>- Confucius</p>
        </section>
          
      </main>


          <footer id='contacto'>
            
              <div class="seccionredondo">
                  <div class="redondorayado"></div>
                  <h1>Trabajemos juntos</h1>
                  <p>Estoy disponible para trabajos freelance.</p>

              </div>
            
            <div class="seccionboton0">
                  <p class="boton0"></p>
                  <a href="https://wa.me/1153348381?text=Hola!" target="_blank">DI HOLA!</a>
                  <span class="material-symbols-outlined">
                      arrow_right_alt
                  </span>
              </div>
              <div class="medioredondo"></div>
              <div class="medioredondo2"></div>
              <div class="pieB"> 
                  <p >Martin Bottaro 2023</p>
                  <a href="https://www.facebook.com/martin.bottaro?mibextid=ZbWKwL" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/bottaritocon/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://github.com/martu344" target="_blank"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/MartinEzequielBottaro-m1a2r3t4i5n6" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              </div>
        
          </footer>
     
</>
  );
}

export default App;

let menuVisible = false;

// Muestra/oculta el menú responsive
function mostrarOcultarMenu(){
  const nav = document.getElementById("nav");
  if(menuVisible){
    nav.classList = "";
    menuVisible = false;
  } else {
    nav.classList = "responsive";
    menuVisible = true;
  }
}

// Oculta el menú al seleccionar una opción
function seleccionar(){
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Anima las barras de habilidades cuando entran en viewport
function efectoHabilidades(){
  const skills = document.getElementById("skills");
  if(!skills) return;
  const distancia = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia >= 300){
    const barras = document.getElementsByClassName("progreso");
    if(!barras || barras.length === 0) return;

    // Orden: C++, UML, Git, Python, HTML/CSS, Comunicación, Trabajo, Creatividad, Dedicación, Proyectos
    const clases = ["cpp","uml","git","python","htmlcss","comunicacion","trabajo","creatividad","dedicacion","proyectos"];
    for(let i=0; i< Math.min(barras.length, clases.length); i++){
      barras[i].classList.add(clases[i]);
    }

    // Una vez aplicadas, quitamos el listener para no re-ejecutar
    window.removeEventListener("scroll", efectoHabilidades);
  }
}

// Listener de scroll
window.addEventListener("scroll", efectoHabilidades);

// Por si ya está visible al cargar
document.addEventListener("DOMContentLoaded", efectoHabilidades);

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-descargar-cv');
  const link = document.getElementById('link-cv');
  if (btn && link) {
    btn.addEventListener('click', function () {
      // dispara el enlace oculto para forzar la descarga
      link.click();
    });
  }
});

document.getElementById('btn-ver-cv')?.addEventListener('click', function () {
    window.open('CV_2025_yohaanchavez.html', '_blank');
});
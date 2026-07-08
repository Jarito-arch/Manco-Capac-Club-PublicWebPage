const radios = document.querySelectorAll("input[name='contacto']");

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        console.log("Seleccionó:", radio.value);

    });

});


const formulario = document.getElementById("ContentForm");

const modal = document.getElementById("modal");

const loader = document.getElementById("loader");

const success = document.getElementById("success");


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    modal.classList.add("show");
    loader.style.display="block";
    success.style.display="none";

    setTimeout(()=>{
        loader.style.display="none";
        success.style.display="block";
    },1000);

    setTimeout(()=>{
        modal.classList.remove("show");
        formulario.reset();
    },2500);
});
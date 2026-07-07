const radios = document.querySelectorAll("input[name='contacto']");

radios.forEach(radio => {

    radio.addEventListener("change", () => {

        console.log("Seleccionó:", radio.value);

    });

});
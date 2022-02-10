var copyTexto = document.querySelector("#btn-copy");
copyTexto.addEventListener("click", function(event){
    event.preventDefault();

    var copy = document.querySelector("#msg");
    var copia = copy.value;
    navigator.clipboard.writeText(copia);
    var textoCopiado = document.querySelector("h2");
    textoCopiado.textContent = "Copiado...";
    var form = document.querySelector("#form-limpa");
    form.reset();
    

})
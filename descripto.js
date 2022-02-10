var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.querySelector("#input-texto");
    var texto = input.value;
    var textoDescodificado = descodificaTexto(texto);
    var saidaTexto = document.querySelector("#msg");
    saidaTexto.value = textoDescodificado;
    var form = document.querySelector("#form-limpar");
    form.reset();
    var textoFinal = document.querySelector("h2");
    textoFinal.textContent = "Mensagem Descriptografada!";

});

function descodificaTexto(texto){
    var textoDescodificado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u")

    return textoDescodificado;
}
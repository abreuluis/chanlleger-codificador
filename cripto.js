var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.querySelector("#input-texto");
    var texto = input.value;
    var textoCodificado = codificaTexto(texto);
    var saidaTexto = document.querySelector("#msg");
    saidaTexto.value = textoCodificado;
    var form = document.querySelector("#form-limpar");
    form.reset();
    var textoFinal = document.querySelector("h2");
    textoFinal.textContent = "Mensagem Criptografada!";
    
});

function codificaTexto(texto){
    var textoCodificado = texto
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi, "ufat");
  
    return textoCodificado;
}

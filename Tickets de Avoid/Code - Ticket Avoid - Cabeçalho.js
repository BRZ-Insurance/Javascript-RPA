Fill();

function Fill() {

/*  ESCREVE O NOME DO CONTATO E FAZ A BUSCA  */
try{
var x = document.querySelector('#object-builder-ui');
var y = x.contentDocument;
}
catch
{
var y = document.forms[0];
console.log('passou pelo Catch');
}

y.querySelector('#UIFormControl-33').click();

var caixa_de_texto = y.querySelector('.form-control.private-form__control.private-search-control__input');
var Ev = new Event('change', {bubbles: true, view: window, cancelable: true});
Ev.simulated = true;
caixa_de_texto.value = "teste@s3wf.com.br";
caixa_de_texto.defaultValue = "teste@s3wf.com.br";
setTimeout(caixa_de_texto.dispatchEvent(Ev),500);


    return ('Contato encontrado');
}

let check = document.querySelector("#consentimento");
let btn = document.querySelector("button");
btn.disabled = true;

check.addEventListener("input", function(e){
    if(check.checked){
        btn.disabled = false;
        btn.style.cursor = "pointer";
    } else{
        btn.disabled = true;
        btn.style.cursor = "auto";
    }
})

criaId();

//class contato
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, mensage, consentimento, promos) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
        this._telefone = telefone;
        this._contato = contato;
        this._mensage = mensage;
        this._consentimento = consentimento;
        this._promos = promos;
    }

    get nome() {
        return this._nome;
    }
}

function Post(form) {
    let data = new Contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensage").value,
        form.elements.namedItem("consentimento").value,
        form.elements.namedItem("aceite-promo").value);
    Enviar(data);
}

function Enviar(contato) {
    console.log(contato);

    var nome = document.getElementById("nomeid");
    if (nome.value != "") alert('Obrigado sr(a) ' + nome.value + 'os seus dados foram encaminhados com sucesso');
}

function criaId(){
    var name = document.querySelectorAll("input");
    var nameId = name[0];
    nameId.id = "nomeid";
}
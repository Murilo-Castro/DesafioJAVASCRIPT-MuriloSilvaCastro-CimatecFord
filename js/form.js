criaId();

//class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato, mensage) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
        this._telefone = telefone;
        this._contato = contato;
        this._mensage = mensage;
    }

    get nome() {
        return this._nome;
    }
}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensage").value);
    Enviar(data);
}

function Enviar(contact) { 
    const contato =contact
    console.log(contato);
    console.log(contato._mensage);

    var nome = document.getElementById("nomeid");
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + 'os seus dados foram encaminhados com sucesso');
    }

}

function criaId(){
    var name = document.querySelectorAll("input");
    var nameId = name[0];
    nameId.id = "nomeid";
}
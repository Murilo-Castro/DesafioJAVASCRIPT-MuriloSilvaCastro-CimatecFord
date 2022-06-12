//car
let carArr = [];
let checks = document.querySelectorAll('input[type="checkbox"]');
let marcados = 0;

class Car {
       constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, 
        capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this._nome = nome;
        this._preco = preco;
        this._alturaCacamba = alturaCacamba;
        this._alturaVeiculo =alturaVeiculo;
        this._alturaSolo = alturaSolo;
        this._capacidadeCarga = capacidadeCarga;
        this._motor = motor;
        this._potencia = potencia;
        this._volumeCacamba = volumeCacamba;
        this._roda = roda;
        this._image = image;
    }

    get nome(){
        return this._nome;
    }
    get preco(){
        return this._preco;
    }
    get alturaCacamba(){
        return this._alturaCacamba;
    }
    get alturaVeiculo(){
        return this._alturaVeiculo;
    }
    get alturaSolo(){
        return this._alturaSolo;
    }
    get capacidadeCarga(){
        return this._capacidadeCarga;
    }
    get motor(){
        return this._motor;
    }
    get potencia(){
        return this._potencia;
    }
    get volumeCacamba(){
        return this._volumeCacamba;
    }
    get roda(){
        return this._roda;
    }
    get image(){
        return this._image;
    }
} 

// search on array if exist carClass returning i if not return -1
function GetCarArrPosition(arr, object) {
    for(let i = 0; i < arr.length; i++) if(arr[i].nome  === object.nome) return i;
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
            carArr.push(carClass);
            marcados++
        } else {
            carArr.splice(GetCarArrPosition(carArr, carClass), 1);
            marcados--
        }
        for(var i = 0; i < checks.length; i++){
            if(marcados >= 2){
                if(checks[i].checked) checks[i].disabled = false;                 
                else checks[i].disabled = true;
            } else checks[i].disabled = false;
        }
    } else throw "You need set a Car Class";
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++) {
        document.getElementById('compare_image_'+i).src = carArr[i].image;
        document.getElementById('compare_modelo_'+i).innerText = carArr[i].nome;
        document.getElementById('compare_alturacacamba_'+i).innerText = carArr[i].alturaCacamba;
        document.getElementById('compare_alturaveiculo_'+i).innerText = carArr[i].alturaVeiculo;
        document.getElementById('compare_alturasolo_'+i).innerText = carArr[i].alturaSolo;
        document.getElementById('compare_capacidadecarga_'+i).innerText = carArr[i].capacidadeCarga;
        document.getElementById('compare_motor_'+i).innerText = carArr[i].motor;
        document.getElementById('compare_potencia_'+i).innerText = carArr[i].potencia;
        document.getElementById('compare_volumecacamba_'+i).innerText = carArr[i].volumeCacamba;
        document.getElementById('compare_roda_'+i).innerText = carArr[i].roda;
        document.getElementById('compare_preco_'+i).innerText =carArr[i].preco;
    }    
}
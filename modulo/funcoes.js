/* *********************************************************************
* Objetivo: Obter os dados da API, através do retono das funções 
* Data: 18/03/2026  
* Autor: Lucas Alexandre Da Silva
* **********************************************************************/

const dadosEstadoCidade = require('./estados_cidades')

const listaBrasil = dadosEstadoCidade
const listaUf = []

const getListaDeEstados = function(){
    
    // percorro o JSON de estados
    listaBrasil.listaDeEstados.estados.forEach(function(item){
        console.log(item.sigla)
        
        let soma = 0
        for(let i = 0; i < item.sigla.length; i++){
            soma += item.sigla[i] 

            console.log(soma)
        }

    })

}

getListaDeEstados()
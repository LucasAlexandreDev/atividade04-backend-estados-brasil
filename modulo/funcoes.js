/* *********************************************************************
* Objetivo: Obter os dados da API, através do retono das funções 
* Data: 18/03/2026  
* Autor: Lucas Alexandre Da Silva
* **********************************************************************/

const dadosEstadoCidade = require('./estados_cidades')

const listaBrasil = dadosEstadoCidade

const getListaDeEstados = function () {
    let listaUfArray = []
    let listaResposta

    listaBrasil.listaDeEstados.estados.forEach(function (itemEstado) {
        listaUfArray.push(itemEstado.sigla)
    })

    let quantidade = listaUfArray.length

    if (listaUfArray.length > 0 && quantidade > 0) {

        listaResposta = {
            "uf": listaUfArray,
            "quantidade": quantidade
        }

        return listaResposta

    } else {
        return false
    }
}

const getDadosEstado = function (siglaEstado) {

    let resposta = {
        uf: null,
        descricao: null,
        capital: null,
        regiao: null
    }

    listaBrasil.listaDeEstados.estados.forEach(function (itemEstado) {

        if (siglaEstado.toLowerCase() == itemEstado.sigla.toLowerCase()) {

            resposta.uf = itemEstado.sigla
            resposta.descricao = itemEstado.nome
            resposta.capital = itemEstado.capital
            resposta.regiao = itemEstado.regiao
        }
    })

    if (resposta.uf == null      || resposta.descricao == null ||
        resposta.capital == null || resposta.regiao == null) {

        return false

    }else{
        return resposta
    }
}

const getCapitalEstado = function(siglaEstado){

    let resposta = {
        uf: null,
        descricao: null,
        capital: null
    }

    listaBrasil.listaDeEstados.estados.forEach(function(itemEstado){

        if(siglaEstado.toLowerCase() == itemEstado.sigla.toLowerCase()){

            resposta.uf        = itemEstado.sigla
            resposta.descricao = itemEstado.nome
            resposta.capital   = itemEstado.capital
        }
    })

    if(resposta.uf == null || resposta.descricao == null||resposta.capital == null){
        return false
    
    }else{
        return resposta
    }
}

const getEstadosRegiao = function(regiao){

    let resposta = {
        regiao: null,
        estados: null
    }

    let estadosArray = []

    listaBrasil.listaDeEstados.estados.forEach(function(itemEstado){
        
        if(regiao.toLowerCase() == itemEstado.regiao.toLowerCase()){
            
            resposta.regiao  = itemEstado.regiao
            estadosArray.push({uf: itemEstado.sigla, descricao: itemEstado.nome})
        }
    })

    resposta.estados = estadosArray

    if(resposta.regiao == null || resposta.estados == null){
        return false
    
    }else{
        return resposta
    }
}

const getCapitalPais = function(){

    let resposta = {
        capitais: null
    }

    let capitaisArray = []

    listaBrasil.listaDeEstados.estados.forEach(function(itemEstado){
        
        if(itemEstado.capital_pais){

            capitaisArray.push({capital_atual: itemEstado.capital_pais.capital, uf: itemEstado.sigla, descricao: itemEstado.nome, 
                                capital: itemEstado.capital, regiao: itemEstado.regiao, capital_pais_ano_inicio: itemEstado.capital_pais.ano_inicio,
                                capital_pais_ano_terminio: itemEstado.capital_pais.ano_fim
           
            })
        }
    })

    resposta.capitais = capitaisArray

    if(resposta.capitais == null){
        return false

    }else{
        return resposta
    }
}


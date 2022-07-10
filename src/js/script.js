import RequestApi from "./controllers/requests.api.js";
import Paises from "./models/Paises.views.js";


const paisesLista = await RequestApi.getCountries();

console.log(paisesLista)


Paises.criarCard(paisesLista)

const selectPosicao = document.querySelector("#posicao")
selectPosicao.addEventListener("change", (event) => {
    console.log("Select posicao")
    Paises.ordenarPosicaoPaises(paisesLista)
})
const selectOuro = document.querySelector("#Ouro")
selectOuro.addEventListener("change", (event) => {
    Paises.ordenarOuro(paisesLista)
})

const selectPrata = document.querySelector("#prata")
selectPrata.addEventListener("change", (event) => {
    Paises.ordenarPrata(paisesLista)
})
const selectBronze = document.querySelector("#bronze")
selectBronze.addEventListener("change", (event) => {
    Paises.ordenarBronze(paisesLista)
})

const btnPesquisa = document.querySelector("#btnPesquisa")
btnPesquisa.addEventListener('click', (event) =>{
    Paises.pesquisaPais(paisesLista)
})

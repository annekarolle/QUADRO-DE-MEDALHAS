const tbody = document.createElement("tbody")
class Paises {
    static criarCard(lista) {
        lista.forEach(({ id, country, flag_url, medal_gold, medal_silver, medal_bronze}) => {
            const table = document.querySelector('table')
            const linha = document.createElement("tr")
            linha.classList.add("conteudo")
            const posicao = document.createElement("td")
            const countrylinha = document.createElement("td")
            countrylinha.classList.add("countrylinha")
            const countryName = document.createElement("p")
            const flag = document.createElement("img")
            const gold = document.createElement("td")
            const silver = document.createElement("td")
            const bronze = document.createElement("td")
            const total = document.createElement("td")
                  
            posicao.innerText = id;
            flag.src = flag_url
            countryName.innerText = country
            gold.innerText = medal_gold
            silver.innerText = medal_silver
            bronze.innerText = medal_bronze
            total.innerText = medal_gold + medal_silver + medal_bronze

            countrylinha.append(flag, countryName)
            linha.append(posicao, countrylinha, gold, silver, bronze, total)
            tbody.append(linha)
            return table.append(tbody)
        });
    }

    static pesquisaPais(lista) {
        const input = document.querySelector("#campo-pesquisa")        

        const paisPesquisado = lista.filter(({country}) => {
            return country === input.value;
        })       
        
            tbody.innerText = ""
            this.criarCard(paisPesquisado)        

    }



    static ordenarPosicaoPaises(lista) {
        const select = document.querySelector("#posicao")

        if (select.value === 'ordernarMaior') {
            const ordenarListaMaior = lista.sort(function (a, b) {
                return b.id - a.id;
            });

            tbody.innerText = ""
            this.criarCard(ordenarListaMaior)
        }
        else if (select.value === "ordenarMenor") {
            const OrdenarListaMenor = lista.sort(function (a, b) {
                return a.id - b.id;
            });

            tbody.innerText = ""
            this.criarCard(OrdenarListaMenor)
        }
        else if(select.value === "posicao"){
            tbody.innerText = ""
            this.criarCard(lista)
        }


    }

    static ordenarOuro(lista){
        const select = document.querySelector("#Ouro")
       
        if (select.value === 'ordernarMaior') {
            const ordenarListaMaior = lista.sort(function (a, b) {
                return b.medal_gold - a.medal_gold;
            });

            tbody.innerText = ""
            this.criarCard(ordenarListaMaior)
        }
        else if (select.value === "ordenarMenor") {
            const OrdenarListaMenor = lista.sort(function (a, b) {
                return a.medal_gold - b.medal_gold;
            });

            tbody.innerText = ""
            this.criarCard(OrdenarListaMenor)
        }
        else if(select.value === "ouro"){
            tbody.innerText = ""
            this.criarCard(lista)
        }
      
    }

    static ordenarPrata(lista){
        
        const select = document.querySelector("#prata") 
    

        if (select.value === 'ordernarMaior') {
            const ordenarListaMaior = lista.sort(function (a, b) {
                return b.medal_silver - a.medal_silver;
            });

            tbody.innerText = ""
            this.criarCard(ordenarListaMaior)
        }
        else if (select.value === "ordenarMenor") {
            const OrdenarListaMenor = lista.sort(function (a, b) {
                return a.medal_silver - b.medal_silver;
            });

            tbody.innerText = ""
            this.criarCard(OrdenarListaMenor)
        }
        else if(select.value === "prata"){
            tbody.innerText = ""
            this.criarCard(lista)
        }
        
        
    }

    static ordenarBronze(lista){
        
        const select = document.querySelector("#bronze")
    

        if (select.value === 'ordernarMaior') {
            const ordenarListaMaior = lista.sort(function (a, b) {
                return b.medal_bronze - a.medal_bronze;
            });

            tbody.innerText = ""
            this.criarCard(ordenarListaMaior)
        }
        else if (select.value === "ordenarMenor") {
            const OrdenarListaMenor = lista.sort(function (a, b) {
                return a.medal_bronze - b.medal_bronze;
            });

            tbody.innerText = ""
            this.criarCard(OrdenarListaMenor)
        }
        else if(select.value === "bronze"){
            tbody.innerText = ""
            this.criarCard(lista)
        }

    }
    
}


export default Paises
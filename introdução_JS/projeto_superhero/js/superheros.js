document.addEventListener("DOMContentLoaded", function(){

    var dadosSuperHeroi = {
        "nomeEsquadrao": "Esquadrão de herois",
        "cidade": "Brasília",
        "formado": 2019,
        "baseSecreta": "Taverna do Marcos",
        "ativa": true,
        "membros": [
            {
                "nome": "Marcos Pitu",
                "idade": 28,
                "identidadeSecreta": "Comentador de codigo man",
                "poderes": ["escrever boas linhas de codigos" , "bolero" , "criador de conteudos"]
            },
            {"nome": "Breno",
            "idade": 85,
            "identidadeSecreta": "Bernardo",
            "poderes": ["Jornalismo", "investigador", "injustiçado"]
        
        },
        {
            "nome": "Suzana Perigosa",
            "idade": 21,
            "identidadeSecreta": "CoringaGirl",
            "poderes": ["Jiu-jistsu", "turismo", "Capoerista"]
        }
        ]
    }

    //selecionar a lista de super-herois onde a gente deseja inserir os membros
    var listaSuperHerois = document.getElementById("superheros-list")

    //Interação sobre os membros da equipe criando os elementos de lista para ul
    dadosSuperHeroi.membros.forEach(function(membros){
        var li = document.createElement("li")
        li.className = "list-group-item"
        li.innerHTML = `<strong>${membros.nome}</strong> (idade: ${membros.idade}, Identidade Secreta: ${membros.identidadeSecreta})<br> Poderes: ${membros.poderes.join(", ")}`
        listaSuperHerois.appendChild(li)
    })
    }
)

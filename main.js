fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
    .then(response => response.json())
    .then(data => {
        const EstadosUrl = data;
        console.log(EstadosUrl);

        const estados = document.querySelector('#EstadosList');

        for (let index = 0; index < EstadosUrl.length; index++) {
            const element = EstadosUrl[index];

            const ListElement = document.createElement('li');
            //ListElement.src = EstadosUrl;
            //ListElement.textContent = `Teste ${index}`
            ListElement.textContent = element.nome
            estados.appendChild(ListElement);
            ListElement.classList.add('lista');




        }

        const clicklink = Object.values(EstadosUrl.UF)
        .filter(EstadosUrl => typeof EstadosUrl === 'string')

        const ListaMun = document.querySelector('.lista')
        ListaMun.src = EstadosUrl


        ListaMun.addEventListener('click', function () {
            ListaMun.src = clicklink[indiceAtual];
        });
    })

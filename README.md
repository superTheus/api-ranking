# API Ranking

> API para salvar e consultar pontuação de Jogadores do GAME de Monstros 

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente de `node.js`

## 🚀 Instalando API

Para instalar a API, siga estas etapas:

Clonar API
```
git clone https://github.com/superTheus/api-ranking.git
```

Baixar dependências
``` npm install ``` ou caso use YARN ``` yarn ```

Iniciar o server
``` npm run dev ``` ou caso use YARN ``` yarn dev ```

## ☕ Usando API

Para usar a API, siga estas etapas:

URL BASE: ``` http://localhost:3333/ ```

Rota para consultar Ranking
``GET``
```
 URL_BASE/ranking
```
code: ``201``

reposta: 

```
[
    {
        "id": string,
        "playerName": string,
        "score": int,
        "data": timestamp
    }
]
```

Rota para salvar Ranking
``POST``
```
 URL_BASE/ranking
```

body: 

```
{
	"playerName": string,
	"score": number
}
```

code: ``201``

reposta: 

```
{
    "id": string,
    "playerName": string,
    "score": int,
    "data": timestamp
}
```


[⬆ Voltar ao topo](#api-ranking)
# GameBackLog v1

! Manter o mais simples possivel nesse inicio depois add features

## Oque e?

- Um projeto para uso pessoal focado na criacao de backlog de jogos

## Oque seria um backlog de jogos?

- E uma lista de jogos ainda nao jogados que voce pretende experimentar ou retornar a jogar em outro momento

## Qual problema a GameBackLog resolve?

- Atualmente minha lista de backlog e um arquivo com um monte de jogos separado por console que pertence, genero, empresa que publicou e etc, minha intencao e tornar mais dinamico e menos manual a manutencao dessa lista

## Tecnologias usadas

- Front: React JS
- Backend: Express JS
- Banco de Dados: MySQL


## Planejamento e Modelagem

    Backlog
    ---

    + jogos
    + generoFavorito
    + quantJogosZerados
    ---


    Jogo
    ---

    + capa
    + titulo
    + genero
    + sinopse
    + plataformas
    + publisher
    + statusDeJogatinaAtual
    ---

    Plataforma

    + id 
    + titulo
    + fabricante
    + geracao
    ---

    FinalizacaoDeJogo

    + dataDeZeramento
    + status
    + plataformaEmQueFinalizou
    + review


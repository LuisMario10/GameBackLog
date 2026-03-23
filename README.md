# GameBackLog (v1)

> Um projeto simples para gerenciamento pessoal de backlog de jogos.

---

## Sobre o projeto

O **GameBackLog** é uma aplicação focada em organizar e gerenciar sua lista de jogos pendentes — aqueles que você ainda quer jogar ou terminar no futuro.

A ideia principal é substituir listas manuais (como arquivos de texto ou planilhas) por uma solução mais dinâmica, organizada e fácil de manter.

---

## Objetivo

Facilitar o controle do seu backlog de jogos, permitindo:

* Adicionar novos jogos
* Organizar por gênero, plataforma e publisher
* Acompanhar o progresso de jogatina
* Registrar jogos finalizados
* Manter tudo centralizado e de forma simples

---

## Problema que resolve

Atualmente, o controle do backlog é feito manualmente por mim, com informações espalhadas como:

* Console
* Gênero
* Empresa publicadora
* Status do jogo

Isso torna a manutenção trabalhosa e pouco prática.

O **GameBackLog** surge para tornar esse processo:

* Mais rápido 
* Mais organizado 
* Menos manual 

---

## Tecnologias utilizadas

* **Frontend:** React JS
* **Backend:** Express JS
* **Banco de Dados:** MySQL

---

## Modelagem inicial

### Usuario

Representa o usuario em si.

* `id (PK)`
* `nome`
* `email`
* `senha`
* `created_at`

---

### Jogo

Representa cada jogo individual no backlog.

**Atributos:**

* `id (PK)`
* `titulo`
* `genero`
* `sinopse`
* `publisher_id (FK)`
* `created_at`

---

### Publisher

Representa as empresas que lançaram os jogos

Publisher
- id (PK)
- nome

* `id `
* `nome `

### Plataforma

Representa os consoles/plataformas disponíveis.

**Atributos:**

* `id`
* `titulo`
* `fabricante`
* `geracao`

---

### Genero 

Registra informações sobre o genero do jogo.

**Atributos:**

* `id`
* `nome`

### JogoGenero

Registra a relação entre jogo e genero

* `jogo_id (FK)`
* `genero_id (FK)`
---

### JogoPlataforma

Registra a relação entre jogo e plataforma

* `jogo_id (FK)`
* `plataforma_id (FK)`

### Backlog

Representa o conjunto geral de jogos do usuário.

* `id (PK)`
* `usuario_id (FK)`
* `jogo_id (FK)`
* `status ('jogando', 'a jogar', 'zerado', 'pausado', 'dropado')`
* `created_at`

### Finalização

Quando um jogo tem status de (dropado ou zerado) o usuario tem direito a review

* `id (PK)`
* `backlog_id (FK)`
* `plataforma_id (FK)`
* `review`
* `nota`

Relacionamentos

Usuario 1:N Backlog
Jogo 1:N Backlog
Jogo N:N Genero
Jogo N:N Plataforma
Publisher 1:N Jogo
Backlog 1:N Finalizacao

## Status do projeto

- Em desenvolvimento inicial
- Foco atual: estrutura base e funcionalidades principais

---

## Contribuição

Projeto pessoal, mas sugestões são sempre bem-vindas!

---

## Licença

Uso pessoal.

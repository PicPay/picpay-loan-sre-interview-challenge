# Desafio Quality Assurance Sênior
   Este projeto utiliza o framework de automação Cypress para realizar testes automatizados na página de login de empréstimos do PicPay (https://meus-emprestimos.picpay.com/). O objetivo é validar alguns cenários como campo obrigatório e mensagens de erro.

## Pré requisitos
   Node.js: Versão >= v18 (https://nodejs.org/en/download)

   Git: Para clonar o repositório (https://git-scm.com/downloads)

## Configuração do Projeto
   1. *Clone o repositório*
      ```
      clone --branch challenge-qa https://github.com/AlanYasuhiro/desafio-tecnico.git
      ```
   2. *Acesse o diretório desafio-tecnico*
      ```
      cd desafio-tecnico
      ```
   3. *Instale as dependências*
      ```
      npm install
      ```    
## Executando o Projeto
   *Modo Headless(sem interface gráfica)*
   ```
   npx cypress run html-report
   ```

## Estrutura do projeto
   ```
   |-- cypress/
   |   |-- e2e/              # Testes de ponta a ponta
   |   |   |-- login.cy.js   # Arquivo com os testes do login
   |   |-- page/
   |   |   |-- loginPage.js  # Arquivo com as ações feitas nos testes      
   |   |-- reports/          # Relatório e screenshots gerados
   |   |   |-- screenshots/  # Captura de tela dos testes
   |   |   |-- html/         # Relatório em HTML com os resultados   
   |   |-- support/          # Arquivos de suporte e comandos personalizados
   |   |   |-- commands.js   # Arquivo com comandos personalizados
   |   |   |-- e2e.js        # Arquivo com configurações dos testes e2e
   |
   |-- cypress.config.js     # Configurações do Cypress
   |-- package.json          # Dependências e scripts do projeto
   |-- README.md             # Informações do projeto
   ```

 ## Ferramentas
   Cypress: Framework de testes

   Cypress Mochawesome Reporter: Plugin para gerar relatórios

 
 ## Relatório dos testes executados
   Após executar os testes, um relatório em HTML será gerado na pasta cypress/reports/html. O nome do arquivo segue o padrão:
```
login-report-YYYY-MM-DDTHH:MM:SS.html
```
Exemplo:
```
login-report-2025-01-19T075118-0300.html
```
Para visualizar o relatório, basta abrir o arquivo no navegador.

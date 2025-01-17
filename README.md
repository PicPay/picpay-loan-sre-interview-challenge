# PicPay Loan Automation Test Project

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Tests-04C38E?style=flat&logo=cypress)  
Projeto de automação de testes para a página de empréstimos do PicPay. Este projeto foi desenvolvido utilizando o **Cypress**, com integração ao **Mochawesome Reporter** para geração de relatórios detalhados com screenshots.

---

## 📂 Estrutura do Projeto

```bash
.
├── cypress/
│   ├── e2e/                         # Tests E2E
│   │   └── loan-lp.spec.cy.js       # Testes da landing page de empréstimos
│   ├── fixtures/                    # Arquivos reutilizáveis de dados (ex: textos)
│   │   └── texts.json               # Textos esperados na aplicação
│   ├── support/                     # Suporte ao Cypress
│   │   ├── commands.js              # Comandos customizados no Cypress
│   │   ├── e2e.js                   # Configurações para testes E2E
│   │   └── selectors.js             # Seletores da aplicação
│   ├── output/                      # Relatórios gerados após execução
│       ├── screenshots/             # Capturas de tela organizadas por timestamp
│       └── reports/                 # Relatórios JSON e HTML
├── cypress.config.js                # Configurações do Cypress
├── package.json                     # Informações e scripts do projeto
└── README.md                        # Documentação do projeto
```

---

## 🛠️ Funcionalidades

- **Testes Responsivos:** Verifica a interface da página em resoluções desktop e mobile (**iPhone X**).
- **Cobertura:** Inclui validações de layout, alertas de erro e comportamento não permitido de navegação.
- **Screenshots Automáticas:** Captura screenshots para cada teste e organiza-as com base em timestamps únicos.
- **Relatórios Detalhados:** Geração automática de relatórios em HTML, exibindo resultados dos testes com logs e imagens embutidas.

---

## ⚙️ Pré-requisitos

Certifique-se de que você possui as seguintes ferramentas instaladas:

- **Node.js:** Versão 18 ou superior.
- **npm:** Gerenciador de pacotes para Node.js.
- **Cypress:** Instalado automaticamente via `npm`.

---

## 🚀 Como Rodar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Abra o Cypress para execução manual:
   ```bash
   npm run cypress:open
   ```

3. Execute os testes automaticamente em modo headless:
   ```bash
   npm run cypress:run
   ```

---

## 📊 Visualizando os Relatórios

Ao executar os testes (`npm run cypress:run`), o projeto gera automaticamente um relatório no formato HTML. Para visualizar:

1. Abra o diretório de relatórios:
   ```bash
   output/reports/
   ```

2. Localize o arquivo HTML:
   ```bash
   index.html
   ```

3. Abra o arquivo em qualquer navegador para visualizar os detalhes do relatório com informações sobre testes, capturas de tela e gráficos de resultados.

---

## 🧪 Descrição dos Testes

### Arquivo: `loan-lp.spec.cy.js`
O arquivo de testes automatiza o seguinte fluxo da página de **empréstimos** do PicPay:

1. **Validação de Textos na Página Inicial**
   - Garante que os textos do cabeçalho, subtítulo e ajuda estão corretos.
   - Gera screenshots para confirmar a visualização.

2. **Validação dos Alertas de Erro**
   - Testa entradas inválidas no campo CPF.
   - Confirma o comportamento do botão e exibe mensagens de erro (*obrigatório* e *CPF inválido*).
   - Captura screenshots a cada estado do teste.

3. **Validação de Restrições de Acesso**
   - Simula um envio de CPF inválido e garante que chamadas API retornam erro **401 (Unauthorized)**.

---

## 🛠️ Custom Commands

Comandos reutilizáveis definidos em **`commands.js`** para simplificar a automação:

- **`cy.visitLoanPage()`**: Navega para a página inicial da aplicação.
- **`cy.fillCpfAndSubmit(cpf)`**: Insere um CPF no campo do formulário e submete.
- **`cy.validateError(selector, message)`**: Valida se um elemento exibe a mensagem de erro esperada.

---

## 🖼️ Organização de Screenshots

As capturas de tela são organizadas automaticamente no diretório **screenshots**, com timestamps exclusivos por execução. Exemplo de estrutura:

```bash
output/screenshots/<YYYY-MM-DD_HH-mm-ss>/
└── loan-lp.spec.cy.js/
    ├── textos-pagina-nao-logada.png
    ├── campo-cpf-inicial.png
    ├── campo-cpf-obrigatorio.png
    └── erro-acesso-401.png
```

---

## 💡 Configurações Relevantes

### Arquivo: `cypress.config.js`

- **Base URL:**
  ```javascript
  baseUrl: 'https://meus-emprestimos.picpay.com'
  ```

- **Relatórios Dinâmicos com Timestamps:**
  ```javascript
  const timestamp = dayjs().format("YYYY-MM-DD_HH-mm-ss")
  screenshotsFolder: `output/screenshots/${timestamp}`,
  reporterOptions: {
    reportDir: `output/reports`,
    embeddedScreenshots: true,
    charts: true,
  }
  ```

---

## 📦 Scripts do Projeto

Os scripts configurados no **`package.json`** incluem:

- **Executar o Cypress manualmente:**
  ```bash
  npm run cypress:open
  ```

- **Executar os testes automaticamente (headless):**
  ```bash
  npm run cypress:run
  ```

- **Mesclar JSONs e gerar relatório final manualmente:**
  (Opcional para execuções separadas)
  ```bash
  npm run report
  ```

---

## 📚 Dependências

O projeto utiliza as seguintes ferramentas e bibliotecas:

- **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end.
- **[Cypress Mochawesome Reporter](https://github.com/lukejpreston/cypress-mochawesome-reporter):** Plugin para relatórios detalhados com gráficos e screenshots.
- **[Day.js](https://day.js.org/):** Biblioteca para manipulação de datas (ex. timestamp).

Para instalação das dependências:
```bash
npm install
```

---

## 🧩 Considerações Finais

Este projeto tem como objetivo demonstrar boas práticas de automação utilizando o **Cypress** com relatórios detalhados e captura de evidências por testes. Está pronto para ser escalado e adaptado conforme os requisitos cresçam.

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato!

🚀 **Obrigada!**

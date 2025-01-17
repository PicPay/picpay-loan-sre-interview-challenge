import texts from '../fixtures/texts.json'
import {loanPageSelectors as lps} from '../support/selectors'

const viewports = [
    {device: 'Desktop', width: 1280, height: 720},
    {device: 'iPhone X', width: 375, height: 812},
]

Cypress._.each(viewports, (viewport) => {
    describe(`Loan Landing Page Tests - ${viewport.device}`, () => {
        beforeEach(() => {
            cy.viewport(viewport.width, viewport.height)
            cy.visitLoanPage() // Usando comando customizado
        })

        it('Deve conter textos esperados na página não logada', () => {
            cy.get(lps.headerTitle).should('contain.text', texts.pageTitle)
            cy.get(lps.headerSubtitle).should('contain.text', texts.pageSubtitle)
            cy.get(lps.formParagraph).should('contain.text', texts.formParagraph)
            cy.get(lps.helpText).should('contain.text', texts.helpText)
            cy.screenshot('textos-pagina-nao-logada')
        })

        it('Deve validar alertas da página não logada', () => {
            cy.get(lps.matField).should('not.have.class', 'mat-form-field-invalid')
            cy.screenshot('campo-cpf-inicial')
            cy.get(lps.button).click()
            cy.get(lps.matField).should('have.class', 'mat-form-field-invalid')
            cy.screenshot('campo-cpf-marcado')

            cy.get(lps.inputCpf)
                .should('have.class', 'ng-untouched')
                .and('not.have.class', 'ng-touched')

            cy.get(lps.inputCpf).click()
            cy.get('body').click()

            cy.get(lps.inputCpf)
                .should('not.have.class', 'ng-untouched')
                .and('have.class', 'ng-touched')

            cy.validateError(lps.matError, texts.requiredFieldError)
            cy.screenshot('campo-cpf-obrigatorio')

            cy.get(lps.inputCpf).clear().type('00000000000')
            cy.validateError(lps.matError, texts.invalidCpfError)
            cy.screenshot('cpf-invalido')
        })

        it('Não deve acessar página de empréstimo em prod com automação', () => {
            cy.intercept('GET', '**/credit-report').as('creditReport')
            cy.fillCpfAndSubmit('00000000191')
            cy.wait('@creditReport').its('response.statusCode').should('eq', 401)
            cy.screenshot('erro-acesso-401')
        })
    })
})
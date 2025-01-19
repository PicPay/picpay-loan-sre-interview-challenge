class loginPage{
    openPage(){
        cy.visit('/')
        cy.screenshot('Site empresitmo picpay')
    }

    validarPaginaEmprestimo(){
        cy.get('.gap-2 > .font-bold').contains('Gerencie seus contratos')
        cy.get('#mat-input-0').should('be.visible').and('exist')
    }

    preencherCpf(cpf){
        cy.get('#mat-input-0').type(cpf)
        cy.screenshot('preenchendo cpf')
    }

    validarMensagemErro(mensagem){
        cy.get('#mat-mdc-error-0').should('contain', mensagem)
        cy.screenshot('mensagem erro ', mensagem)
    }

    validarCampoObrigatorio(){
        cy.get('#mat-input-0').click()
        cy.get('.bg-primary-500').click()
    }
}

module.exports = new loginPage()
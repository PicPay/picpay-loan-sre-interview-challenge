/// <reference types="cypress"/>
import loginPage from '../page/loginPage'

describe('Teste pratico para automatizar a pagina de emprestimo do picpay',() => {

    beforeEach(() => {
        loginPage.openPage()
    })

    it('Login com CPF incorreto', () => {
        loginPage.validarPaginaEmprestimo() // Valida alguns elementos se está na página certa
        loginPage.preencherCpf('00000000000') 
        loginPage.validarMensagemErro('*CPF Inválido') 
    })
    
    
    it('Login sem preencher campo obrigatório', () => {
        loginPage.validarPaginaEmprestimo() // Valida alguns elementos se está na página certa
        loginPage.validarCampoObrigatorio() // Valida o campo 'Acesse com seu CPF' como obrigatório
        loginPage.validarMensagemErro('*Campo obrigatório')
    })
})


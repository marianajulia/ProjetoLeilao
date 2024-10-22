describe('P2 - Testes Automatizados', () => {
  it('Teste 1 - Lance menor que o mínimo', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#input').type('500')
    cy.get('#lance').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('O lance mínimo é de R$1000');
    })
    cy.get('#input').clear()
  })

  it('Teste 2 - Lance maior ou igual ao mínimo', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#input').type('1500')
    cy.get('#lance').click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Lance enviado com sucesso!');
    })
    cy.get('#input').clear()
  })
})
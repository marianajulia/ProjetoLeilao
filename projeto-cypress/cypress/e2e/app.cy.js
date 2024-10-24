class RegisterForm {
  elements = {
    valueInput: () => cy.get('#input'),
    subimitLance: () => cy.get('#lance'),
  }

  typeValue(text){
    if(!text) return;
    this.elements.valueInput().type(text)
  }

  clickSubimit(){
    this.elements.subimitLance().click()
  }

  checkAlertMessage(expectedMessage) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(expectedMessage);
    });
  }

  clearInput(){
    this.elements.valueInput().clear();
  }
}

const registerForm =  new RegisterForm()
describe('Test automated bids', () => {
  const input ={
    invalidValue: '500' ,
    validValue: '1500'
  }
  describe('Bid lower than the minimum', () => {
    it('Given the user is on the bids page', () => {
      cy.visit('/')
    })
    it(`When the user enters a value of ${input.invalidValue} in the input field`, () => {
      registerForm.typeValue(input.invalidValue)
    })
    it(`And the user clicks the bid button`, () => {
      registerForm.clickSubimit()
    })
    it(`Then an alert message "O lance mínimo é de R$1000" should be displayed`, () => {
      registerForm.checkAlertMessage('O lance mínimo é de R$1000');
    })
    it('Clear the input field after the alert', () => {
      registerForm.clearInput();
    });
  })

  describe('Bid equal to or higher than the minimum', () => {
    it('Given the user is on the bids page', () => {
      cy.visit('/')
    })
    it(`When the user enters a value of ${input.validValue} in the input field`, () => {
      registerForm.typeValue(input.validValue)
    })
    it(`And the user clicks the bid button`, () => {
      registerForm.clickSubimit()
    })
    it(`Then an alert message "Lance enviado com sucesso!" should be displayed`, () => {
      registerForm.checkAlertMessage('Lance enviado com sucesso!');
    })
    it('Clear the input field after the alert', () => {
      registerForm.clearInput();
    });
  })
})
describe('Ingresar a la pagina para probar los tests', () => {
  it('passes', () => {
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8/#/welcome')
        // confirm that the form fields can be filled and shor the corresponding notifications if the information is incorrectly filled
  })

  it('navigate to "text imput" section', () =>{
    // Cypress starts
    // we want to go on Text Input section
    cy.get(':nth-child(33) > div').click()  
  })

  it('fill the form with correct information', () =>{
    cy.get('#firstName').type('Jhon')
    cy.get('#lastName').type('Caceres')
    cy.get('#email').type('prueba@gmail.com')
    cy.get('#password').type('Prueba123!')
  })

  it('fill the form with incorrect information', () =>{
    cy.get('#xfirstName').type('11234jhno')
    cy.get('#xfirstName').type('{selectAll}{backspace}')
    cy.get('#xlastName').type('111111')
    cy.get('#xlastName').type('{selectAll}{backspace}')
    cy.get('#xemail').type('prueba.prueba.com')
    cy.get('#xpassword').type('123')
  })

})
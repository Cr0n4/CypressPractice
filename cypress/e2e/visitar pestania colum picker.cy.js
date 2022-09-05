describe('Ingresar a la pagina para probar los tests', () => {
  it('passes', () => {
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8/#/welcome')
  })

  
  it('navigate to "Colum Menu" secction', () =>{
    // Cypress starts out with a blank slate for each test
    cy.get(':nth-child(11) > div').click()  
  })

  it('click on Duration Checkbox', () =>{
    //cy.get('.select-draggable-item','Duration').click() // encontrar items
    //cy.get('#duration').click({force:true}) // usando force mala practica
    cy.get('label[for="duration"]').click()
  })

  it('click on Dialer In Checkbox', () =>{
    cy.get('label[for="dialedIn"]').click()
  })

  it('click on Call Reason Checkbox', () =>{
    cy.get('label[for="callTagging"]').click()
  })
  
  it('click on ADD button', () =>{
    cy.get('.btn-primary').click()
  })

  it('click on Dialer In Checkbox', () =>{
    cy.get('label[for="dialedIn"]').click()
  })

  it('click on Remove button', () =>{
    cy.get('.btn-secondary').click()
  })
  
})
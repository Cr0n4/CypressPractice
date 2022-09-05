describe('Ingresar a la pagina para probar los tests', () => {
  // Confirm if the checkboex on Calendar seccion are working
  it('passes', () => {
    cy.visit('https://na1.dev.nice-incontact.com/cxone-components-angular8/#/welcome')
  })

  it('navigate to "Calendar" secction', () =>{
    // Cypress starts out with a blank slate for each test
    cy.get('ul > :nth-child(7) > div').click()  
  })

  it('Check "Disable" checkbox', () =>{
    cy.get('label[for="checkbox-1"]').click()
  })

  it('Uncheck "Disable" checkbox', () =>{
    cy.get('label[for="checkbox-1"]').click()
  })


  it('Check and uncheck "Min Date" checkbox', () =>{
    cy.get('label[for="checkbox-2"]').click()    
    cy.get('label[for="checkbox-2"]').click()
  })

  it('Check and uncheck "Max Date" checkbox', () =>{
    cy.get('label[for="checkbox-3"]').click()
    cy.get('label[for="checkbox-3"]').click()
  })

  it('Check "single-selection" checkbox', () =>{
    cy.get('label[for="radio-1"]').click()
  })

  it('Check "multi-single-selection" checkbox', () =>{
    cy.get('label[for="radio-2"]').click()
  })

  it('Check "week-selection" checkbox', () =>{
    cy.get('label[for="radio-3"]').click()
  })

  it('Check "multi-week-selection" checkbox', () =>{
    cy.get('label[for="radio-4"]').click()
  })
})
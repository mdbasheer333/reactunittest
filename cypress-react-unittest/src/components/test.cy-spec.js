import { mount } from '@cypress/react'
import MyComponent from '../MyComponent'

describe('HelloWorld component', () => {

  // beforeEach(() => {
  //   mount(<MyComponent />)
  // });

  before(() => {
    mount(<MyComponent />)
  });

  it('works1', () => {
    cy.get('button#abc').should('have.text', 'clicked 0 times')
    cy.get('button#abc').click().should('have.text', 'clicked 1 times')
      .click().should('have.text', 'clicked 2 times')
  })

  it('works2', () => {
    cy.get('button#xyz').click().should('have.text', 'clicked 3 times')
  })

})

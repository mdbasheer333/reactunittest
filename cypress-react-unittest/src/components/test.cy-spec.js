
import { mount } from '@cypress/react'
import MyComponent from '../MyComponent'


describe('HelloWorld component', () => {
  it('works', () => {
    mount(<MyComponent/>)
    cy.get('button#abc').should('have.text','clicked 0 times')
    cy.get('button#abc').click().should('have.text','clicked 1 times')
    .click().should('have.text','clicked 2 times')

    cy.get('button#xyz').click().should('have.text','clicked 3 times')

  })
})

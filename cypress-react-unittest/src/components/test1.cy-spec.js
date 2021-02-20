
import { mount } from '@cypress/react'

describe('HelloWorld component', () => {
  it('works', () => {
    
    mount(<button id='btnClick'>click me</button>)
    cy.get('button#btnClick').should('have.text','click me')

  })
})

import { mount } from '@cypress/react'
import AliasComponent from '../AliasComponent'

describe('component', () => {

  it('works3', () => {
    
    const data={
        "fname":"baheer",
        "lname":"mohammad"
      }

    mount(<AliasComponent props={data}/>)

    cy.get('@AliasComponent')
    .its('props')
    .should('not.be.empty')

    cy.get('@AliasComponent')
    .its('type')
    .should('equal', AliasComponent)

    cy.contains('basheer')

  })


})

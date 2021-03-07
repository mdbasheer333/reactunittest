import { mount } from '@cypress/react'
import ApiComponent from '../ApiComponent';

describe('api test', () => {
    it('validates api response', () => {
        mount(<ApiComponent></ApiComponent>)            
        cy.get('p#abc', { timeout: 20000 }).should('have.length', 100)
        cy.get('p#abc', { timeout: 20000 }).eq(0).should('have.text','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    });
});
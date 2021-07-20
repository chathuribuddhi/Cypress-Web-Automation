/// <reference types="cypress" />
import { example } from "../pageFunctions/example";

describe('My Test Suit', () => {

    before(function(){
        cy.fixture('user').then(function(data){
            this.data = data;
        })
    })

    it('Test', function() {

        example('https://devexpress.github.io/testcafe/example/', {
            neme: this.data.neme,
            feature: this.data.feature,
            os: this.data.os,
            text: this.data.text,
            accept_text: this.data.accept_text
        });
        
    })
})

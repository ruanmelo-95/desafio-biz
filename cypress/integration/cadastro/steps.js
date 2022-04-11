/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance()

Given(/^que acesse o site$/, () => {
   
     cy.visit('index.php?controller=authentication&back=my-account');
     cy.get('#email_create').type(chance.email());
    cy.get('#SubmitCreate > span').click();
	
});

When(/^informar meus dados$/, () => {

   /// selecionando caixinha de Mr ou Mrs

   cy.get('input[id=id_gender2]').check();

/// Preenchimento do primeiro e ultimo nome
cy.get('input#customer_firstname').type(chance.first());
cy.get('input#customer_lastname').type(chance.last());
// cy.get('input#email').type(chance.email());
cy.get('input#passwd').type('Desafiobiz@2022');

// prenchimento dos campos select

cy.get('select#days').select('24');
cy.get('select#months').select('April');
cy.get('select#years').select('1995')

// caixinha
cy.get('input#newsletter').click();
cy.get('input#optin').click();

// inserindo endereço
cy.get('input#firstname.form-control').type(chance.first());
cy.get('input#lastname.form-control').type(chance.last());
cy.get('input#address1.form-control').type(chance.address());
cy.get('input#city.form-control').type(chance.city());
cy.get('select#id_country.form-control').select('United States', {force: true});
cy.get('select#id_state.form-control').select('Alabama', {force: true});
cy.get('input#postcode.form-control.uniform-input.text').type(chance.zip());
cy.get('input#phone_mobile.form-control').type(chance.phone());
cy.get('input#alias.form-control').type(chance.phone());



        
    });

And(/^salvar$/, () => {

    // click botão

cy.get('button#submitAccount').click();

});

Then(/^devo ser cadastrado com sucesso$/, () => {

});

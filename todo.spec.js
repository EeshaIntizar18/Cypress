/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})


describe('EGO shoes', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1440, 1220)
    })
  it('Open url', () => {
    
    cy.visit('https://ego.co.uk/')
    cy.wait(2000)
    // cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.links-wrapper > button').trigger('mouseover')
    // cy.wait(2000)
    // cy.contains('Account').click({force: true})
    // cy.wait(2000)
    // cy.get('#email').type('usman.ali@rltsquare.com')
    // cy.wait(2000)
    // cy.get('#pass').type('@Mani112233{enter}')
    // cy.wait(2000)
  
  //Search
    cy.get('#search').focus().type('boots{enter}')
    cy.wait(3000)

 //click on size filter
cy.get('#narrow-by-list > div:nth-child(1) > div.filter-options-title').click({ multiple: true ,force: true })
cy.wait(2000)

//click on size
cy.get('#tab-1 > a:nth-child(4) > div').click({ multiple: true ,force: true })
cy.wait(2000)
// //click on colour filter
// cy.get('#narrow-by-list > div:nth-child(2) > div.filter-options-title').click()
// cy.wait(2000)
// //click on colour
// cy.get('#narrow-by-list > div.filter-options-item.togglecoll.activeTog > div.filter-options-content > ol > li:nth-child(1) > input').click()
cy.wait(5000)

//clcik on product
cy.get('#layer-product-list > div.products.wrapper.grid.columns4.products-grid > ol > li:nth-child(3) > div > div.product.details.product-item-details > strong > a').click({ multiple: true ,force: true })
cy.wait(5000)

//click on size dropdown
cy.get('#tabs-swatches > div > div.custom-select-wrapper-size > div > div.custom-select__trigger-size').click({ multiple: true ,force: true })
cy.wait(2000)

//clcik on size
cy.get('#controlId-item-17').click({ multiple: true ,force: true })
cy.wait(2500)

//click on add to cart button
cy.get('#product-addtocart-button').click({ multiple: true ,force: true })
cy.wait(2000)

//click on view bag
cy.get('#html-body > div.page-wrapper > header > div.header.content > div > div.col-xl-3.col-12.rightBlock > div.minicart-wrapper._has-modal > div.modals-wrapper > aside > div.modal-inner-wrap > footer > button.view').click()
cy.wait(4000)

//click on quantity swatch
cy.get('*[class^="form-item input-text qty"]').select('4',{ multiple: true ,force: true })
cy.wait(2000)

//click on checkout
cy.get('#maincontent > div > div > div.cart-container > div.cart-summary > ul > li:nth-child(1) > button').click({ multiple: true ,force: true })
cy.wait(8000)

//click on email
cy.get('#customer-email').type('usman.ali@rltsquare.com',{ multiple: true,force: true })
cy.wait(5000)

//Enter password
cy.get('#customer-password').type('@Mani112233',{ multiple: true,force: true })

  cy.wait(6000)

  //Select country
  cy.get('select').eq(0).select('GB')
  cy.wait(3000)

  //Enter firstname
cy.get('[name=firstname]').eq(0).type("test",{ multiple: true ,force: true })
cy.wait(2000)

//Enter lastname
cy.get('[name=lastname]').eq(0).type("test",{ multiple: true ,force: true })
cy.wait(2000)

//Enter postcode
cy.get('[name=postcode]').eq(0).type("M320JT",{ multiple: true ,force: true })
cy.wait(2000)

//Enter Address
cy.get('*[class^="input-text street-zero"]').eq(0).type("Unit A1,Thomas Street",{ multiple: true,force: true  })
 cy.wait(2000)

 //Enter region
cy.get('[name=region]').eq(0).type('tttt',{ multiple: true,force: true  })
cy.wait(2000)

//Enter city
cy.get('[name=city]').eq(0).type('Manchester',{ multiple: true,force: true  })
 cy.wait(500)

 //Enter Phone
cy.get('[name=telephone]').eq(0).type('1111111111',{ multiple: true,force: true })
cy.wait(2000)

//Click on shipping method
cy.get('*[class^="col col-method"]').click({ multiple: true,force: true })

cy.wait(2000)

//Click on payment method button
cy.get('#shipping-method-buttons-container > div.primary > button').click({ multiple: true,force: true })
cy.wait(5000)

 
//Click on pay-by-card button
cy.get('#checkoutcom_card_payment_container > div.payment-method-title.field.choice > label').click({force: true})
cy.wait(2000)
cy.scrollTo(0, 500) // Scroll the window 500px down




////////////IFRAMES



Cypress.Commands.add(
  'iframeLoaded',
  { prevSubject: 'element' },
  ($iframe) => {
    const contentWindow = $iframe.prop('contentWindow')
    return new Promise(resolve => {
      if (
        contentWindow &&
        contentWindow.document.readyState === 'complete'
      ) {
        resolve(contentWindow)
      } else {
        $iframe.on('load', () => {
          resolve(contentWindow)
        })
      }
    })
  })
Cypress.Commands.add(
  'getInDocument',
  { prevSubject: 'document' },
  (document, selector) => Cypress.$(selector, document)
)
//Enter cardnumber
cy.get('#singleIframe')
  .iframeLoaded()
  .its('document')
  .getInDocument('input[name="cardnumber"]')
  .type('4242424242424242')

  cy.wait(2000)

  //Enter exp date
  cy.get('#singleIframe')
  .iframeLoaded()
  .its('document')
  .getInDocument('input[name="exp-date"]')
  .type('1232')

  cy.wait(2000)

  //Enter cvc

  cy.get('#singleIframe')
  .iframeLoaded()
  .its('document')
  .getInDocument('input[name="cvc"]')
  .type('786')
})
  })
})

describe('Log in', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Should successfully open the page', () => {
    cy.contains('Books list').should('be.visible')
  })

  it('Successfully login', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  it('Should not login with empty login', () => {
    cy.login(null, 'test')

    cy.get('#mail')
      .then((elements) => elements[0].checkValidity())
      .should('be.false')

    cy.get('#mail')
      .then((elements) => elements[0].validationMessage)
      .should('contain', 'Заполните это поле.')
  })

  it('Should not login with wrong login', () => {
    cy.login('123456', 'test')

    cy.get('#mail')
      .then((elements) => elements[0].checkValidity())
      .should('be.false')

    cy.get('#mail')
      .then((elements) => elements[0].validationMessage)
      .should('contain', 'Адрес электронной почты должен содержать символ "@". В адресе "123456" отсутствует символ "@".')
  })

  it('Should not login with empty password', () => {
    cy.login('test@test.com', null)

    cy.get('#pass')
      .then((elements) => elements[0].checkValidity())
      .should('be.false')

    cy.get('#pass')
      .then((elements) => elements[0].validationMessage)
      .should('contain', 'Заполните это поле.')
  })


})

describe('Add books', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

    
  it('Add new book', () => {
    cy.createNewBook('Война и мир', 'Лев Толстой')
    cy.contains('Война и мир').should('be.visible')
  })

  it('Add to Favorite', () => {
    cy.contains('Add to favorite').click()
    cy.contains("Delete from favorite").should("be.visible")
  })

  it('Delete from favorite', () => {
    cy.contains("Delete from favorite").click()
    cy.contains('Add to favorite').should('be.visible')
  })



  


  
  
})
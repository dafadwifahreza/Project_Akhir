class loginPage{
    Visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    InterceptLogin(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations'). as('loginRequest')
    }
    InterceptValidate(){
        cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as('authValidate')
    }
    VerifyinterceptLogin(){
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
    }
    VerifyValidateLogin(){
        cy.wait('@authValidate').its('response.statusCode').should('eq',302)
    }
    InputUsername(username){
        cy.get('input[name="username"]').type(username)
    }
    InputPassword(password){
        cy.get('input[name="password"]').type(password)
    }
    ClickLoginBtn(){
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()
    }
    LoginSucces(){
        cy.url().should('include','dashboard')
    }
    InvalidCredintal(){
        cy.get('.oxd-alert').should('contain', 'Invalid credentials')
    }
    UsernameRequired(){
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    }
    PasswordRequired(){
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    }
    UsernameandPasswordRequired(){
        cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    }
}

export default new loginPage
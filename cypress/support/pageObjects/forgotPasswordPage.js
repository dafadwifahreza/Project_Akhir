class forgotPasswordPage{
    Visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.intercept('GET','/web/index.php/auth/requestPasswordResetCode'). as('PageResetPassword')
        cy.contains('Forgot your password?').click()
        cy.wait('@PageResetPassword').its('response.statusCode').should('eq',200)
    }
    SuccesSendResetPassword(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset'). as('SuccesSendPasswordResetCode')
    }    
    CancelResetPassword(){
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'). as('CancelResetPassword')
    }
    VerifySuccesResetPassword(){
        cy.wait('@SuccesSendPasswordResetCode').its('response.statusCode').should('eq',200)
    }
    VerifyCancelResetPassword(){
        cy.wait('@CancelResetPassword').its('response.statusCode').should('eq',200)
    }
    InputUsername(username){
        cy.get('input[name="username"]').type(username)
    }
    ClickResetBtn(){
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()
    }
    ClickCancelBtn(){
        cy.get('button[type="button"]').should('be.visible')
        cy.get('button[type="button"]').click()
    }
    CardResetPassword(){
        cy.get('.orangehrm-card-container').should('be.visible')
    }
    SuccesDirectPageResetPassword(){
        cy.url().should('include','requestPasswordReset')
    }
    ResetPasswordSucces(){
        cy.get('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('be.visible').and('contain.text', 'Reset Password link sent successfully')
    }
    PasswordRequires(){
        cy.get('span.oxd-input-field-error-message.oxd-input-group__message').should('contain','Required')
    }
    SuccesDirectPageCancelPassword(){
        cy.url().should('include', '/auth/login');

    }
}

export default new forgotPasswordPage
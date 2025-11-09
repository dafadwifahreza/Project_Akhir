import forgotPasswordPage from "../../support/pageObjects/forgotPasswordPage"
import loginData from "../../fixtures/loginData.json"

describe('Scenario Forgot Password',()=>{
    beforeEach(()=>{
        forgotPasswordPage.Visit()
    })
    it('TC01-Reset Password dengan Username valid', () => {
        forgotPasswordPage.SuccesDirectPageResetPassword()
        forgotPasswordPage.SuccesSendResetPassword()
        forgotPasswordPage.CardResetPassword()
        forgotPasswordPage.InputUsername(loginData.valid_username)
        forgotPasswordPage.ClickResetBtn()
        forgotPasswordPage.VerifySuccesResetPassword()
        forgotPasswordPage.ResetPasswordSucces()
    })   

     it('TC02-Reset Password tanpa memasukan Username', () => {
        forgotPasswordPage.CardResetPassword()
        forgotPasswordPage.InputUsername(loginData.empty_username)
        forgotPasswordPage.ClickResetBtn()
        forgotPasswordPage.PasswordRequires()
    })  
    
    it('TC03-Reset Password dibatalkan',()=>{
        forgotPasswordPage.SuccesDirectPageResetPassword()
        forgotPasswordPage.CancelResetPassword()
        forgotPasswordPage.CardResetPassword()
        forgotPasswordPage.ClickCancelBtn()
        forgotPasswordPage.VerifyCancelResetPassword()
        forgotPasswordPage.SuccesDirectPageCancelPassword()
    })
})
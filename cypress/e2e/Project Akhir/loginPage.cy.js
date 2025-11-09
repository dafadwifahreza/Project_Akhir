import loginPage from "../../support/pageObjects/loginPage"
import loginData from "../../fixtures/loginData.json"

describe('Scenario Login',  ()=>{
    beforeEach(()=>{
        loginPage.Visit()
    })
    
    it('TC01-Login dengan Username dan Password valid',()=>{ 
        loginPage.InputUsername(loginData.valid_username)
        loginPage.InputPassword(loginData.valid_password)
        loginPage.InterceptLogin()
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyinterceptLogin()
        loginPage.VerifyValidateLogin()
        loginPage.LoginSucces()
    })
    
    it('TC02-Login dengan Username valid dan Password invalid',()=>{ 
        loginPage.InputUsername(loginData.valid_username)
        loginPage.InputPassword(loginData.invalid_password)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })

    it('TC03-Login dengan Username invalid dan Password valid',()=>{ 
        loginPage.InputUsername(loginData.invalid_username)
        loginPage.InputPassword(loginData.valid_password)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })
    
    it('TC04-Login dengan Username dan Password invalid',()=>{
        loginPage.InputUsername(loginData.invalid_username)
        loginPage.InputPassword(loginData.invalid_password)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })
    
    it('TC05-Login dengan Username valid tanpa memasukan Password',()=>{
        loginPage.InputUsername(loginData.valid_username)
        loginPage.InputPassword(loginData.empty_password)
        loginPage.ClickLoginBtn()
        loginPage.PasswordRequired()
    })
    
    it('TC06-Login dengan Password valid dan tanpa memasukan Username',()=>{
        loginPage.InputUsername(loginData.empty_username)
        loginPage.InputPassword(loginData.valid_password)
        loginPage.ClickLoginBtn()
        loginPage.UsernameRequired()
    })

    it('TC07-Login tanpa memasukan Username dan Password', () => {
        loginPage.InputUsername(loginData.empty_username)
        loginPage.InputPassword(loginData.empty_password)
        loginPage.ClickLoginBtn()
        loginPage.UsernameandPasswordRequired()
    })

    it('TC08-Login dengan Username dan Password valid menggunakan huruf kapital', () => {
        loginPage.InputUsername(loginData.uppercase_username)
        loginPage.InputPassword(loginData.uppercase_password)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })

    it('TC09-Login dengan Username dan Password valid yang mengandung spasi', () => {
        loginPage.InputUsername(loginData.valid_username_space)
        loginPage.InputPassword(loginData.valid_password_space)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })

    it('TC10-Login dengan Username dan Password berisi karakter khusus', () => {
        loginPage.InputUsername(loginData.usename_special_karakter)
        loginPage.InputPassword(loginData.password_special_karakter)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })

    it('TC11-Login dengan Username valid dan Password berisi karakter khusus', () => {
        loginPage.InputUsername(loginData.valid_username)
        loginPage.InputPassword(loginData.password_special_karakter)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })

    it('TC12-Login dengan Username berisi karakter khusus dan Password valid', () => {
        loginPage.InputUsername(loginData.usename_special_karakter)
        loginPage.InputPassword(loginData.valid_password)
        loginPage.InterceptValidate()
        loginPage.ClickLoginBtn()
        loginPage.VerifyValidateLogin()
        loginPage.InvalidCredintal()
    })
     
}) 
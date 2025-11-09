import dashboardDirectoryPage from "../../support/pageObjects/dashboardDirectoryPage"
import loginData from "../../fixtures/loginData.json"
import dashboardData from "../../fixtures/dashboardData.json"

describe('Scenario Dashboard Directory',()=>{
    beforeEach(()=>{
        dashboardDirectoryPage.visit()
        dashboardDirectoryPage.InputUsername(loginData.valid_username)
        dashboardDirectoryPage.InputPassword(loginData.valid_password)
        dashboardDirectoryPage.LoginSucces()
        dashboardDirectoryPage.ClickLoginBtn()
        dashboardDirectoryPage.VerifyLoginsucces()
        dashboardDirectoryPage.ClickDirectory()
        dashboardDirectoryPage.InterceptDirectPageDirectory()
    })

    it('TC01-Mengunjungi halaman Directory',()=>{ 
        dashboardDirectoryPage.DirectoryPageTitle()
        dashboardDirectoryPage.searchBtn()
    }) 

    it('TC02-Mencari data karyawan berdasarkan Nama',()=>{
        dashboardDirectoryPage.inputEmployeeName(dashboardData.searchName, dashboardData.validName)
        dashboardDirectoryPage.searchBtn()
        dashboardDirectoryPage.InterceptDirectPageDirectory()
        dashboardDirectoryPage.verifyResult(dashboardData.validName)
    })
    
    it('TC03-Mencari data karyawan berdasarkan Job Title',()=>{
        dashboardDirectoryPage.inputJobTitle(dashboardData.jobTitle)
        dashboardDirectoryPage.searchBtn()
        dashboardDirectoryPage.InterceptDirectPageDirectory()
        dashboardDirectoryPage.verifyResultByJob(dashboardData.jobTitle)
    })

    it('TC04-Mencari data karyawan berdasarkan Location',()=>{
        dashboardDirectoryPage.inputLocation(dashboardData.location)
        dashboardDirectoryPage.searchBtn()
        dashboardDirectoryPage.InterceptDirectPageDirectory()
        dashboardDirectoryPage.verifyResultByLocation(dashboardData.location)
    })

    
})
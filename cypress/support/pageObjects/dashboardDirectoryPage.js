class dashboardDirectoryPage {
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(1000) 
    }
    InputUsername(username){
        cy.wait(2000) 
        cy.get('input[name="username"]').type(username)
    }
    InputPassword(password){
        cy.wait(2000) 
        cy.get('input[name="password"]').type(password)
    }
    ClickLoginBtn(){
        cy.get('button[type="submit"]').should('be.visible')
        cy.get('button[type="submit"]').click()
    }
    LoginSucces(){
        cy.url().should('include','dashboard')
    }
    LoginSucces(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations'). as('loginSucces')
    }
    VerifyLoginsucces(){
        cy.wait('@loginSucces').its('response.statusCode').should('eq', 200)    
    }
    ClickDirectory(){
        cy.get("aside").contains("Directory").click({ force: true });
        cy.url().should("include", "/directory");
    }
    InterceptDirectPageDirectory(){
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0'). as('directoryPage')
    }
    VerifyDirectPageDirectory(){
        cy.wait('@directoryPage').its('response.statusCode').should('eq',200)
    }
    DirectoryPageTitle(){
        cy.get('.oxd-text.oxd-text--h5.oxd-table-filter-title').should('be.visible')
    }
    inputEmployeeName(searchKey, selectName) {
        cy.get("input[placeholder='Type for hints...']").type(searchKey);
        if (selectName) {
        cy.get("div.oxd-autocomplete-dropdown").should("be.visible");
        cy.contains("div.oxd-autocomplete-option", selectName).should("be.visible").click();
        }
    }
   inputJobTitle(jobTitle) {
        cy.get("div.oxd-select-wrapper").eq(0).click();
        cy.contains("div[role='option']", jobTitle).click();
        cy.get("button[type='submit']").click();
    } 
    inputLocation(location) {
        cy.get("div.oxd-select-wrapper").eq(1).click();
        cy.contains("div[role='option']", location).click();
        cy.get("button[type='submit']").click();
    }
    searchBtn(){
        return cy.get("button[type='submit']").should('be.visible')
    }
    verifyResult(expectedName) {
        cy.get(".oxd-grid-item").should("be.visible");
        cy.contains(".orangehrm-directory-card-header", expectedName).should("be.visible");
    }
    verifyResultByJob(jobTitle) {
        cy.get("body").then(($body) => {
            if ($body.text().includes("No Records Found")) {
        cy.contains("No Records Found").should("be.visible");
            } else {
        cy.get(".oxd-select-text-input").should("contain.text", jobTitle);
            }
        })
    }
    verifyResultByLocation(location) {
        cy.get("body").then(($body) => {
            if ($body.text().includes("No Records Found")) {
        cy.contains("No Records Found").should("be.visible");
            } else {
        cy.get(".oxd-select-text-input").should("contain.text", location);
            }
        })
    }    

}   

export default new dashboardDirectoryPage
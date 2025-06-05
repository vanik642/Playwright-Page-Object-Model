import {Page,Locator} from '@playwright/test';

export class LoginPage{
    page:Page;
    usernameInput:Locator;
    passwordInput:Locator;
    loginButton:Locator;
    errorMessage:Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput=page.locator('#user-name')
        this.passwordInput=page.locator('#password')
        this.loginButton=page.locator('#login-button')
        this.errorMessage=page.locator("h3[data-test='error']")
    }

    async goTo(){
        await this.page.goto('')
        
    }

    async validLogin(username:string,password:string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    get getErrorMessage(){
        return this.errorMessage.textContent();
    }

}
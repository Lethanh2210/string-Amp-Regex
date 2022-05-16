export class AccountRegex{
    private nameReg: RegExp = /^[_a-z0-9]{6,}$/

    validateAccount(accountName):boolean{
        return this.nameReg.test(accountName);
    }
}

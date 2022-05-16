export class EmailRegex{
    private EMAIL_REGEX: RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]{3})$/;
    private pass_Regex: RegExp = /^([A-Za-z0-9]*[0-9]+[A-Za-z0-9]*){6,15}$/

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }

    public validatePass(regex: string):boolean{
        return this.pass_Regex.test(regex);
    }
}
export class PhoneNumber{
    private phoneReg: RegExp = /^\([0-9]{2}\)-\(0[0-9]{9}\)$/;

    validatePhoneNum(phone: string):boolean{
        return this.phoneReg.test(phone);
    }
}
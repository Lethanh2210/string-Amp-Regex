export class ClassRegex{
    private className : RegExp = /^[ACP][0-9]{4}[GHIKLM]$/

    validateClass(name: string):boolean{
        return this.className.test(name);
    }
}
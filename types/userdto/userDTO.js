

export default class UserDTO {
    constructor(username, personalnumber, sumcredit = 0) {
        this.username = username;
        this.personalnumber = personalnumber;
        this.sumcredit = sumcredit;
    }
}
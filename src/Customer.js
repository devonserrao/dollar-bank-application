class Customer {

    constructor(id, name, accountList) {
        this.id = id;
        this.name = name;
        this.accountList = accountList;
    }

    createNewAccount(accountID) {
        this.accountList.push(accountID);
    }
}
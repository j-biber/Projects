class User {
    constructor(name, email, dob, picture) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.picture = picture;
    }
    getDOB = () => {
        return `${this.dob.getDate()}.${this.dob.getMonth() + 1}.${this.dob.getFullYear()}`
    }
    hideEmailAddress = () => {
        const email = this.email.split('@');
        const emailLast = email[0].slice(-2);
        const emailFirst = email[0].slice(0, 3);
        const hiddenEmail = `${emailFirst}...${emailLast}@${email[1]}`
        return hiddenEmail;
    }
}

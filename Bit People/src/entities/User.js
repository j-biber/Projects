// class User

class User {
    constructor(gender, photo, name, email, dateOfBirth) {
        this.gender = gender;
        this.photo = photo;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    getFullName() {
        return `${this.name.first} ${this.name.last}`
    }

    getHiddenEmail() {
        const newEmailArray = this.email.split('@');
        const emailSub = newEmailArray[0].slice(3, -3);
        const newEmail = newEmailArray[0].replace(emailSub, '...').concat('@', newEmailArray[1]);
        return newEmail;
    }

    getBirthFormat() {
        return `${this.dateOfBirth.getDate()}.${this.dateOfBirth.getMonth() + 1}.${this.dateOfBirth.getFullYear()}`
    }
}

export default User;
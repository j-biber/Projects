import User from '../entities/User';

const BASE_URL = 'https://randomuser.me/api/?results=15';

const fetchUserData = () => {
    return fetch(BASE_URL)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);

            const userArray = result.results;
            const ourUsers = userArray.map((user) => {

                const { gender, picture, name, email, registered } = user;
                const dob = new Date(registered.date);

                return new User(gender, picture, name, email, dob);
            });


            return ourUsers;
        });
}

export {
    fetchUserData
}
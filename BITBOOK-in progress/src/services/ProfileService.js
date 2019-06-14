import { UserProfile } from '../entities/UserProfile'

const url = 'http://bitbookapi.azurewebsites.net/api/profile'

const fetchProfile = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "key": 'bitbookdev',
            "sessionId": '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
        }

    })
        .then(response => {
            return response.json()
        })
        .then((profile) => {
            // build user object
            // return user object
            const { avatarUrl, name, about, postsCount, commentsCount } = profile;
            return new UserProfile(avatarUrl, name, about, postsCount, commentsCount);

        })


}

export { fetchProfile }


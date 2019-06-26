const fetchData = (data) => {
    return data.results.map(user => {
        return new User(user.name.first, user.email, new Date(user.dob.date), user.picture)
    })
}

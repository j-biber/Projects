(function () {
    function getFormattedDate(date) {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        const genre = this.name;
        return (genre.charAt(0) + genre.charAt(genre.length - 1)).toUpperCase()
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function (movie) {
        try {
            if (this.listOfMovies.length >= 4) {
                throw {
                    name: 'Movie length.',
                    message: 'Movie limit per program is 4.'
                }
            }
            if ((this.getTotalMovieLength() + movie.length) > 480) {
                throw {
                    name: 'Program length.',
                    message: 'Program duration limit is 8 hours.'
                }
            }
            else {
                this.listOfMovies.push(movie);
            }
        }
        catch (error) {
            if (error.name === 'Movie length.') {
                console.log(error.message);
            }
            // if (error.name === 'Program length.') 
            else {
                console.log(error.message);
            }

        }
    }

    Program.prototype.numberOfMovies = function () {
        return this.listOfMovies.length
    }

    Program.prototype.getTotalMovieLength = function () {
        return this.listOfMovies.reduce(function (acc, cur) {
            return acc + parseInt(cur.length);
        }, 0);
    }
    
    Program.prototype.getData = function () {
        const date = getFormattedDate(this.date);
        const totalMovieLength = this.getTotalMovieLength();

        let movieData = '';
        for (let i = 0; i < this.listOfMovies.length; i++) {
            movieData += '\t\t' + this.listOfMovies[i].getData() + '\n';
        }

        const programData = `${date}, program duration: ${totalMovieLength}min\n${movieData}`
        return programData;
    }

    function Festival(name, maxNoMovies) {
        this.name = name;
        this.maxNoMovies = maxNoMovies;
        this.listOfPrograms = [];
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    Festival.prototype.getTotalNumberOfMovies = function () {
        let counter = 0;
        for (let i = 0; i < this.listOfPrograms.length; i++) {
            counter += this.listOfPrograms[i].numberOfMovies();
        }
        return counter;
    }

    Festival.prototype.getData = function () {
        const name = this.name;
        const allMovies = this.getTotalNumberOfMovies();
        if (allMovies == 0) {
            return this.name + '\n\t' + 'Program to be announced.' 
        }
        let programData = '';
        for (let i = 0; i < this.listOfPrograms.length; i++) {
            programData += '\t' + this.listOfPrograms[i].getData() + '\n';
        }
        const festivalData = `${name} festival has ${allMovies} movie titles\n${programData}`;
        return festivalData;
    }

    function createMovie(title, genre, length) {
        try {
            if (typeof length != 'number') {
                throw new Error('Length has to be a number.')
            } else {
                const movieGenre = new Genre(genre);
                return new Movie(title, movieGenre, length);
            }
        } catch (error) {
            console.log(error.message);
        }

    }
    function createProgram(date) {
        const dateObj = new Date(date);
        return new Program(dateObj);
    }

    function createFestival(name, maxNoMovies) {
        try {
            if (typeof maxNoMovies != 'number') {
                throw new Error('Numeric value for maxNoMovies requested.')
            }
            return new Festival(name, maxNoMovies);
        } catch (error) {
            console.log(error.message)
        }

    }

    const program1 = createProgram('5 25 2019');
    const program2 = createProgram('5 28 2019');

    const movie1 = createMovie('Deadpool', 'action', 60);
    const movie2 = createMovie('Metropolis', 'drama', 60);
    const movie3 = createMovie('After', 'comedy', 06);
    const movie4 = createMovie('Serendipity', 'action', 10);
    const movie5 = createMovie('Serendipity', 'action', 50);

    const festival = createFestival('Fest', 2)

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program1.addMovie(movie4);
    program1.addMovie(movie5);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData())
})();


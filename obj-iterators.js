class Movie {
    constructor(name, director, release, imdbRating, runtime) {
        this.name = name;
        this.director = director;
        this.release = release;
        this.imdbRating = imdbRating;
        this.runtime = runtime
    }
}

const movies = [
    new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51m"),
    new Movie("The incredibles", "Brad Bird", 2004, 8, "1h30m"),
    new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m"),
];

//All movies director begins with T
console.log(movies.filter((movie) => movie.director.charAt(0) == "T"));

// Get the first movie in the list where the name contains "the"
console.log(movies.find((movie) => movie.name.toLowerCase().includes("the")));
// Get the total run time of all movies in seconds
function convertStringToSeconds(timeString) {
    const nums = timeString.split(/[hm]/gi);
    const hours = nums[0]*60*60;
    const mins = nums[1]*60;
    return Number(hours+mins);
}
convertStringToSeconds("1h51m");
console.log(movies.reduce((acc, movie) => acc += Number(convertStringToSeconds(movie.runtime)), 0));


// get the average imdb rating of all movies in the set
console.log(movies.reduce((acc, movie) => acc += movie.imdbRating, 0)/movies.length);
// Get the newest movie
console.log(movies.sort((movie1, movie2) => movie1.release - movie2.release)[0]);
// Get movies that have a greater run time that 90mins
console.log(movies.filter((movie) => convertStringToSeconds(movie.runtime) > 5400));
const Movie = require("./customerTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
        return "Movie added successfully"
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async (filterObj) => {
    try {
        if (filterObj.title || filterObj.actor) {
            return await Movie.findOne({where: filterObj});
        } else {
            return await Movie.findAll();
        }
    } catch (error) {
        console.log(error, "You made an error in your search")
    }
};

exports.updateMovies = async (filterObj) => {
    console.log(filterObj, " is in movieFunction.js as filterObj")
    try {
        if (filterObj) {
            return await Movie.update({actor: filterObj.newActor}, {
                where: {
                  actor: filterObj.oldActor
                }
            })            
        }
    } catch (error) {
        console.log(error, "Nothing was Updated")
    }
};

exports.deleteMovie = async (filterObj) => {
    console.log(filterObj, " is in movieFunction.js delete as filterObj ")
    try {
        return await Movie.destroy({
            where: 
                filterObj
        });
    } catch (error) {
        console.log(error, "Nothing was Deleted")
    }
};


const { sequelize } = require("./db/connection");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovies, deleteMovie } = require("./movie/movieFunction");

// console.log(sequelize);

const app = async (yargsObj) => {
    console.log(yargsObj)
    try {
        await sequelize.sync();
        if(yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log({title: yargsObj.title, actor: yargsObj.actor}, " is in the ADD FUNCTION");
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2));
            console.log({title: yargsObj.title, actor: yargsObj.actor}, " is in the LIST FUNCTION");
        } else if (yargsObj.updateMovies) {
            console.log(await updateMovies(yargsObj))
            console.log(yargsObj, " is in the UPDATE FUNCTION");
        } else if (yargsObj.deleteMovie) {
            console.log(await deleteMovie({title: yargsObj.title}))
            console.log(yargsObj, " is in the DELETE FUNCTION");
        } else {
            console.log("inCoRrEcT CoMmAnD")
        }
        await sequelize.close();
    } catch (error) {
        console.log(error)
    }
};

app(yargs.argv);
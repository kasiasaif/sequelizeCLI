const Actor = require("../actor/actor.model");
const Movie = require("./movie.model");

const addMovie = async (movieObj) => {
    try{
        const actor = await Actor.findOne({where: {name: movieObj.actor}})
        movieObj.actor_id = actor.id
        await Movie.sync();
        const result = await Movie.create(movieObj)
        console.log('You have added new movie : ' , result)
    }catch(error){
        console.log(error)
    }
}

async function readMovies(){
    try{
        const result = await Movie.findAll();
        console.log('You have searched for all movies : ', result)
    }catch(error){
        console.log(error)
    }
}
async function readOne(id){
    try{
        const result = await Movie.findOne({
            where: {id: id}
        });
        console.log('You have searched for the movie : ', result)
    }catch(error){
        console.log(error)
    }
}
async function updateMovieByTitle(movieObj){
    try{
        await Movie.update(
        {actor : movieObj.actor},
            {where: { title : movieObj.title}
            })
        console.log('You have updated : ' )
    }catch(error){
        console.log(error)
    }
}
async function updateMovieById(id,movieObj){
    try{
        await Movie.update(
        {title : movieObj.title},
            {where: { id: id}
        })
        console.log('You have updated : ' )
    }catch(error){
        console.log(error)
    }
}

async function deleteMovieById(id) {
    try{
    const result = await Movie.destroy({
        where: {id: id}
    })
    console.log('You have deleted : ' , result)
    }catch(error){
        console.log(error)
    }
}
async function deleteMovieByTitle(movieObj) {
    try{
    const result = await Movie.destroy({
        where: {title: movieObj.title}
    })
    console.log('You have deleted : ' , result)
    }catch(error){
        console.log(error)
    }
}
module.exports={
    addMovie, 
    readMovies,
    readOne,
    updateMovieByTitle,
    updateMovieById,
    deleteMovieById,
    deleteMovieByTitle,
}
require("./db/connection");
const {addMovie, 
    readMovies,
    readOne,
    updateMovieByTitle,
    updateMovieById,
    deleteMovieById,
    deleteMovieByTitle,
    
}= require("./movie/movie.methods");
const {
    addActor, 
    readAllActors,
    readActor,
    updateActorById,
    deleteActorById,
    deleteActorByName

}= require("./actor/actor.methods");


const command = process.argv[2];
const movieTitle= process.argv[3];
const id = process.argv[3];
const movieActor = process.argv[4];

const actorName= process.argv[3];
const gen = process.argv[4];



async function app(){
    if(command === "add movie"){
        const movieObj = { 
            title: movieTitle,
            actor: movieActor,
        };
        await addMovie(movieObj);   
    }
    else if(command === "read movies"){
        await readMovies();
    }
    else if(command === "read movie"){
        await readOne(id);
    }
    else if(command === "update movie by title"){
        
        const movieObj = {
            title: movieTitle,
            actor: movieActor,
        };
        await updateMovieByTitle(movieObj);
    }
    else if(command === "update movie by id"){
        id
        const movieObj = {
            actor: movieActor,
        };
        await updateMovieById(id,movieObj);
    }
    else if(command === "delete movie by id"){
        
        await deleteMovieById(id);
    }
    else if(command === "delete movie by title"){
        const movieObj = {
            title: movieTitle}
        await deleteMovieByTitle(movieObj);
    
    }else if(command === "add actor"){
        const actorObj = {
            name : actorName,
            gender: gen,
        };
        await addActor(actorObj);   
    }
    else if(command === "read actors"){
        await readAllActors();
    }
    else if(command === "read actor"){
        await readActor(id);
    }
    else if(command === "update actor by id"){
        
        const actorObj = {
        name: actorName,
            gender: gen,        };
        await updateActorById(actorObj);
    }
    else if(command === "delete actor by id"){
        
        await deleteActorById(id);
    }
    else if(command === "delete actor by name"){
        const actorObj = {
        name :  actorName}
        await deleteActorByName(actorObj);
    }
    




    
    

}
app();




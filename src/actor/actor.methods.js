const Actor = require("./actor.model");

const addActor = async (actorObj) => {
    try{
        await Actor.sync();
        const result = await Actor.create(actorObj)
        console.log('You have added new actor : ' , result)
    }catch(error){
        console.log(error)
    }
}

async function readAllActors(){
    try{
        const result = await Actor.findAll();
        console.log('You have searched for all actors : ', result)
    }catch(error){
        console.log(error)
    }
}
async function readActor(id){
    try{
        const result = await Actor.findOne({
            where: {id: id}
        });
        console.log('You have searched for the actor : ', result)
    }catch(error){
        console.log(error)
    }
}
async function updateActorById(id,actorObj){
    try{
        await Actor.update(
        {name: actorObj.name},
            {where: { id: id}
            })
        console.log('You have updated : ' )
    }catch(error){
        console.log(error)
    }
}


async function deleteActorById(id) {
    try{
    const result = await Actor.destroy({
        where: {id: id}
    })
    console.log('You have deleted : ' , result)
    }catch(error){
        console.log(error)
    }
}
async function deleteActorByName(actorObj) {
    try{
    const result = await Actor.destroy({
        where: {name: actorObj.name}
    })
    console.log('You have deleted : ' , result)
    }catch(error){
        console.log(error)
    }
}
module.exports={
    addActor, 
    readAllActors,
    readActor,
    updateActorById,
    deleteActorById,
    deleteActorByName
}
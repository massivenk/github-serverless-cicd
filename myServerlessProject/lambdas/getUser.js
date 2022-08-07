const Responses = require('./API_Responses')

exports.handler =async event => {
    console.log( 'event', event)

    if (!event.pathParameters ||  !event.pathParameters.ID){
        // failed without an ID
        return Responses._400({message: 'missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        // return the data
        return Responses._200(data[ID]);
    }

    //failed as ID not in the data
    return Responses._400({message: 'no ID in data'});
}

const data = {
    1234: { name: 'Lerato Masuku', age: 39 , job: 'Project Manager'},
    7893: { name: 'Tshiamo Masuku', age: 15 , job: 'Medicatical Student'},
    5132: { name: 'Lindokuhle Masuku', age: 12 , job: 'Art Student'},
};
var casual = require('casual');
 
let database=[]

for (let i = 1; i<=7; i++) {
    database.push({
        id:i,
        description: casual.sentences(4)
    });
}

    console.log(JSON.stringify(database));
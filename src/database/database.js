import { sentences } from "casual";

let database = [];

for (let i = 1; i <= 7; i++) {
  database.push({
    id: i,
    description: sentences(4),
  });
}

console.log(JSON.stringify(database));

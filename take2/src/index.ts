import knex from "knex"; 

const myKnexConfig = {
    client: 'postgresql',
    connection: "someconnection",
    pool: {
        min:1, 
        max: 2
    }
  };

const knexConnecion = knex(myKnexConfig);
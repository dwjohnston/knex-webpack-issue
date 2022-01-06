import knex from "knex"; 

const myKnexConfig = {
    client: 'postgres',
    connection: "someconnection",
    pool: {
        min:1, 
        max: 2
    }
  };

const knexConnecion = knex(myKnexConfig);
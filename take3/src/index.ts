import knex from "knex"; 

const myKnexConfig = {
    client: 'postgresql',
    connection: "someconnection",
    pool: {
        min:1, 
        max: 2
    }
  };

  export const foo ="foo";

export const knexConnecion = knex(myKnexConfig);


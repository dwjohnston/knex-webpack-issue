import knex from "knex"; 
 
//@ts-ignore - sort this one out yourself
import pgClient from "knex/lib/dialects/postgres";

const myKnexConfig = {
    client: pgClient,
    connection: "someconnection",
    pool: {
        min:1, 
        max: 2
    }
  };

const knexConnecion = knex(myKnexConfig);
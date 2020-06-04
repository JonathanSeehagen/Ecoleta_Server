import Knex from "knex";

//up = cria a tabela
export async function up(knex: Knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

//faz o contrário do método down (roolback) = cria a tabela
export async function down(knex: Knex) {
  return knex.schema.dropTable("items");
}

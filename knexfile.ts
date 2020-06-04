import path from "path";

module.exports = {
  client: "sqlite3",
  connection: {
    //__dirname = diretório deste arquivo
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"), //Padroniza caminhos para pasta
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};

//knex não suporta export default

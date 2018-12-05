
exports.up = function (knex, Promise) {
  return knex.schema.createTable('topics', (table) => {
    table.string('slug').primary();
    table.string('description');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('topics');
};

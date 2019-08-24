
exports.up = function(knex) {
  return knex.schema
    .createTable('books', function (table) {
       table.increments('id');
       table.string('title', 255).notNullable();
       table.string('author_name', 255).notNullable();
       table.decimal('publish_year')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('books')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('email', 255).notNullable().unique();
        table.string('first_name', 45).notNullable();
        table.string('last_name').nullable();
        table.date('dob').nullable();
      })
        .then(() => console.log('users table created'))
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('users').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('users').then(() => console.log('users table dropped'))
    }
  })
};

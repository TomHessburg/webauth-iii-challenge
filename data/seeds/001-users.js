
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {username: 'tom', password: bcrypt.hashSync('password', 8), department: 'toys' },
    {username: 'bob', password: bcrypt.hashSync('password', 8), department: 'toys' },
    {username: 'jim', password: bcrypt.hashSync('password', 8), department: 'sports' },
    {username: 'sam', password: bcrypt.hashSync('password', 8), department: 'sports' },
    {username: 'jon', password: bcrypt.hashSync('password', 8), department: 'clothes' },
    {username: 'tim', password: bcrypt.hashSync('password', 8), department: 'clothes' },
  ]);
};

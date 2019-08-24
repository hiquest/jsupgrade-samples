exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('books').insert([
        {
          title: 'Sapiens: A Brief History of Humankind',
          author_name: 'Yuval Noah Harari',
          publish_year: 2011,
        },
        {
          title: 'Thinking, Fast and Slow',
          author_name: 'Daniel Kahneman',
          publish_year: 2011,
        },
        {
          title: '1984',
          author_name: 'George Orwell',
          publish_year: 1949,
        },
      ])
    })
}

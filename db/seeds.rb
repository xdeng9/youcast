# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create([
    {
        username: 'demoUser',
        email: 'demo@youcast.com',
        password: 'demo123'
    },
    {
        username: 'Bret',
        email: 'Sincere@april.biz',
        password: 'bret123'
    },
    {
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        password: 'anton123'
    },
    {
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        password: 'sam123'
    },
    {
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        password: 'kar123'
    },
])

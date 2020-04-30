require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all

User.create([
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

demo = User.create!({
    username: 'demoUser',
    email: 'demo@youcast.com',
    password: 'demo123'
})

joe = User.create!({
    username: 'Joseph',
    email: 'joseph.deng@dev.io',
    password: "joe123"
})

john = User.create!({
    username: 'John',
    email: 'john.doe@dev.io',
    password: 'john123'
})

jane = User.create!({
    username: 'Jane',
    email: 'jane.doe@web.io',
    password: 'jane123'
})

lor = Video.create!({
    title: 'The Fellowship of the Ring preview',
    description: 'Movie trailer for Lord of the Ring - The Fellowship of the Ring',
    view_count: 20000
    creator_id: demo.id,
})
tfile1 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/fellowship.jpg')
lor.thumbnail.attach(io: tfile1, filename: 'fellowship.jpg')
vfile1 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/fellowship.mp4')
lor.video.attach(io: vfile, filename: 'fellowship.mp4')


lor2 = Video.create!({
    title: 'The Two Towers preview',
    description: 'Movie trailer for Lord of the Ring - The Two Towers',
    view_count: 30000
    creator_id: demo.id,
})

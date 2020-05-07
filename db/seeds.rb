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
Comment.destroy_all
Like.destroy_all

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
    title: 'The Fellowship of the Ring Preview',
    description: 'Movie trailer for Lord of the Ring - The Fellowship of the Ring',
    view_count: 20000,
    creator_id: demo.id
})
tfile1 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/fellowship.jpg')
lor.thumbnail.attach(io: tfile1, filename: 'fellowship.jpg')
vfile1 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/fellowship.mp4')
lor.video.attach(io: vfile1, filename: 'fellowship.mp4')


lor2 = Video.create!({
    title: 'The Two Towers Preview',
    description: 'Movie trailer for Lord of the Ring - The Two Towers',
    view_count: 30000,
    creator_id: john.id
})
tfile2 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/two_towers.jpg')
lor2.thumbnail.attach(io: tfile2, filename: 'two_towers.jpg')
vfile2 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/two_towers.mp4')
lor2.video.attach(io: vfile2, filename: 'two_towers.mp4')

lor3 = Video.create!({
    title: 'The Return of the King Preview',
    description: 'Movie trailer for Lord of the Ring - The Return of the King',
    view_count: 50000,
    creator_id: jane.id
})
tfile3 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/rok.jpg')
lor3.thumbnail.attach(io: tfile3, filename: 'rok.jpg')
vfile3 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/rok.mp4')
lor3.video.attach(io: vfile3, filename: 'rok.mp4')

sw = Video.create!({
    title: 'Clone Wars Preview',
    description: 'Star Wars - Clone Wars movie clip',
    view_count: 5000,
    creator_id: demo.id
})
tfile4 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/clone_wars.jpg')
sw.thumbnail.attach(io: tfile4, filename: 'clone_wars.jpg')
vfile4 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/clone_wars.mp4')
sw.video.attach(io: vfile4, filename: 'clone_wars.mp4')

sw2 = Video.create!({
    title: 'Rogue One Preview',
    description: 'Star Wars - Rogue One movie clip',
    view_count: 34591,
    creator_id: john.id
})
tfile5 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/rogue_one.jpg')
sw2.thumbnail.attach(io: tfile5, filename: 'rogue_one.jpg')
vfile5 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/rogue_one.mp4')
sw2.video.attach(io: vfile5, filename: 'rogue_one.mp4')

sw3 = Video.create!({
    title: 'Star Wars Koko Krunch',
    description: 'Star Wars Koko Krunch breakfast commercial',
    view_count: 231,
    creator_id: jane.id
})
tfile6 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/krunch.jpg')
sw3.thumbnail.attach(io: tfile6, filename: 'krunch.jpg')
vfile6 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/krunch.mp4')
sw3.video.attach(io: vfile6, filename: 'krunch.mp4')

hobbit = Video.create!({
    title: 'The Hobbit: An Unexpected Journey Preview',
    description: 'Epic high fantasy adventure film',
    view_count: 908098,
    creator_id: demo.id
})
tfile7 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/unexpected_journey.jpg')
hobbit.thumbnail.attach(io: tfile7, filename: 'unexpected_journey.jpg')
vfile7 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/unexpected_journey.mp4')
hobbit.video.attach(io: vfile7, filename: 'unexpected_journey.mp4')

hobbit2 = Video.create!({
    title: 'The Hobbit: The Desolation of Smaug Preview',
    description: 'Fantasy adventure film',
    view_count: 999999,
    creator_id: john.id
})
tfile8 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/ds.jpg')
hobbit2.thumbnail.attach(io: tfile8, filename: 'ds.jpg')
vfile8 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/ds.mp4')
hobbit2.video.attach(io: vfile8, filename: 'ds.mp4')

hobbit3 = Video.create!({
    title: 'The Hobbit: The Battle of the Five Armies Preview',
    description: 'Epic ending of The Hobbit trilogy',
    view_count: 1077395,
    creator_id: jane.id
})
tfile9 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/five_armies.jpg')
hobbit3.thumbnail.attach(io: tfile9, filename: 'five_armies.jpg')
vfile9 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/five_armies.mp4')
hobbit3.video.attach(io: vfile9, filename: 'five_armies.mp4')

youtube = Video.create!({
    title: 'How to make a YouTube Clone from scratch',
    description: 'Follow along to make a YouTube clone using rails backend and react frontend',
    view_count: 999,
    creator_id: joe.id
})
tfile10 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/youtube_clone.jpg')
youtube.thumbnail.attach(io: tfile10, filename: 'youtube_clone.jpg')
vfile10 = open('https://youcast-seeds.s3-us-west-1.amazonaws.com/youtube_clone.mp4')
youtube.video.attach(io: vfile10, filename: 'youtube_clone.mp4')


Comment.create([
    {
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam",
        author_id: demo.id,
        video_id: lor.id 
    },
    {
        body: "est natus enim nihil est dolore omnis voluptatem numquam",
        author_id: joe.id,
        video_id: lor2.id 
    },
    {
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui",
        author_id: jane.id,
        video_id: lor3.id 
    },
    {
        body: "repellat consequatur praesentium vel minus molestias voluptatum",
        author_id: jane.id,
        video_id: sw.id 
    },
    {
        body: "vero eaque aliquid doloribus et culpa",
        author_id: john.id,
        video_id: hobbit.id 
    },
    {
        body: "Awesome movie!",
        author_id: joe.id,
        video_id: lor.id 
    },
    {
        body: "consequatur necessitatibus totam sed sit dolorum",
        author_id: jane.id,
        video_id: lor.id 
    }
])

Like.create([
    {
        status: 1,
        user_id: joe.id,
        likeable_id: lor.id,
        likeable_type: 'Video'
    },
    {
        status: 1,
        user_id: demo.id,
        likeable_id: lor.id,
        likeable_type: 'Video'
    },
    {
        status: 1,
        user_id: john.id,
        likeable_id: lor.id,
        likeable_type: 'Video'
    },
    {
        status: 1,
        user_id: jane.id,
        likeable_id: lor.id,
        likeable_type: 'Video'
    },
    {
        status: 1,
        user_id: joe.id,
        likeable_id: youtube.id,
        likeable_type: 'Video'
    },
    {
        status: -1,
        user_id: demo.id,
        likeable_id: sw3.id,
        likeable_type: 'Video'
    },
    {
        status: 1,
        user_id: demo.id,
        likeable_id: lor3.id,
        likeable_type: 'Video'
    }
])
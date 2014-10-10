# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

posts = Post.create([
  {title: 'One', image_url: 'http://i.imgur.com/ooQJy8h.png', description: 'random pic 1', user_id: 1},
  {title: 'Two', image_url: 'http://i.imgur.com/OKOZlU3.jpg', description: 'random pic 2', user_id: 1},
  {title: 'Three', image_url: 'http://i.imgur.com/trZxMHq.jpg', description: 'random pic 3', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/v5oJzuq.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1},
  {title: 'Four', image_url: 'http://i.imgur.com/ye2iZSd.jpg', description: 'random pic 4', user_id: 1}
])

posts.each do |post|
  Comment.create({ body: "asdfasdfasdfasdf", user_id: 1, post_id: post.id })
end
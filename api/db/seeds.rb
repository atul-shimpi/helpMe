# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# provide system defined admin for initial login
User.create({
                uid: 'shimpiatul@hotmail.com',
                username: 'atulshimpi',
                provider: 'email',
                name: 'Atul Shimpi',
                email: 'shimpiatul@hotmail.com',
                password: 'admin1234',
                password_confirmation: 'admin1234'
            })
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# provide system defined admin for initial login
User.create([
  {
    uid: 'shimpiatul@hotmail.com',
    username: 'atulshimpi',
    provider: 'email',
    name: 'Atul Shimpi',
    email: 'shimpiatul@hotmail.com',
    password: 'admin1234',
    password_confirmation: 'admin1234',
    role: 'admin'
  },
  {
    uid: 'alex@hotmail.com',
    username: 'alex1234',
    provider: 'email',
    name: 'Alex Hudson',
    email: 'alex@hotmail.com',
    password: 'alex@1601',
    password_confirmation: 'alex@1601',
    role: 'engineer'
  },
  {
    uid: 'peter@hotmail.com',
    username: 'peter1234',
    provider: 'email',
    name: 'Peter Border',
    email: 'peter@hotmail.com',
    password: 'peter@1601',
    password_confirmation: 'peter@1601',
    role: 'engineer'
  },
  {
    uid: 'jeff@hotmail.com',
    username: 'jeff1234',
    provider: 'email',
    name: 'Jeff Marsh',
    email: 'jeff@hotmail.com',
    password: 'jeff@1601',
    password_confirmation: 'jeff@1601',
    role: 'engineer'
  },
  {
    uid: 'jeniffer@hotmail.com',
    username: 'jeniffer1234',
    provider: 'email',
    name: 'Jeniffer Tailor',
    email: 'Jeniffer@hotmail.com',
    password: 'jeni@1601',
    password_confirmation: 'jeni@1601',
    role: 'customer'
  }
]);

TicketType.create([
  { type_of_ticket: 'Internet Related' },
  { type_of_ticket: 'Email configuration' },
  { type_of_ticket: 'Purchasing Licensed Software' },
  { type_of_ticket: 'VPN' },
  { type_of_ticket: 'Hardware upgradation' },
  { type_of_ticket: 'Application download' },
  { type_of_ticket: 'Temporary access to blocked sites' }
]);

Ticket.create([
  { 
    owner_id: 2,
    assignee_id: 3,
    ticket_type_id: 7,
    description: 'Need to download Rubymine'
  },
  { 
    owner_id: 1,
    assignee_id: 4,
    ticket_type_id: 1,
    description: 'Not able to access internet after windows update'
  },
  { 
    owner_id: 1,
    assignee_id: 2,
    ticket_type_id: 2,
    description: 'Need to Configure Lotus Notes'
  },
  { 
    owner_id: 3,
    assignee_id: 2,
    ticket_type_id: 5,
    description: 'Replace hard disk of 500 gb',
    status: 2
  }
]);

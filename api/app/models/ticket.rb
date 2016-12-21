class Ticket < ApplicationRecord
  belongs_to :ticket_type
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  belongs_to :assignee, class_name: 'User', foreign_key: 'assignee_id'
  
  enum status: [:created, :in_progress, :on_hold, :close, :cancelled]
end

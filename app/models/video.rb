# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  duration    :integer
#  description :text             not null
#  view_count  :integer          not null
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

    validates :title, :description, :view_count, :creator_id, presence: true

    has_one_attached :video
    has_one_attached :thumbnail

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User 
end

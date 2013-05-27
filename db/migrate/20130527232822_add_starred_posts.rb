class AddStarredPosts < ActiveRecord::Migration
  def change
    add_column :entries, :starred, :boolean
  end
end

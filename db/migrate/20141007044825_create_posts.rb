class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
  end
end

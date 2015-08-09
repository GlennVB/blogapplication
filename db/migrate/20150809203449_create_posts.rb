class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.text :body
      t.integer :user_id
      t.datetime :published_at

      t.timestamps null: false
    end
  end
end

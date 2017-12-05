class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.integer :tomes_count
      t.string :author
      t.string :title
      t.string :genre
      t.string :publisher
      t.date :year
      t.float :price
      t.string :name
      t.string :comment

      t.timestamps
    end
  end
end

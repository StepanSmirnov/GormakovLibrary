class ChangeYear < ActiveRecord::Migration[5.0]
  def change
    change_column :books, :year, :integer
  end
end

class ChangeYear < ActiveRecord::Migration[5.0]
  def change
    change_column :books, :year, :integer, 'integer USING CAST(year AS integer)'
  end
end

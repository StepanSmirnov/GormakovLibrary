class ChangeYear < ActiveRecord::Migration[5.0]
  def change
    change_column :books, :year, "integer USING CAST(date_part('year', year) AS integer)"
  end
end

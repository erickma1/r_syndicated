class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :headline
      t.text :main_text
      t.integer :section
      t.string :image

      t.timestamps
    end
  end
end

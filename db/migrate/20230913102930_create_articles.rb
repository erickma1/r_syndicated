class CreateArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :articles do |t|
      t.string :headline, null: false
      t.text :main_text, null: false
      t.integer :section, null: false
      t.string :image, default: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg'

      t.timestamps
    end
  end
end

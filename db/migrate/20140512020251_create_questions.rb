class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :text
      t.belongs_to :quiz

      t.timestamps
    end
  end
end

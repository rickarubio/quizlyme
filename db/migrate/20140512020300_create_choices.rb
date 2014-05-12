class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.text :text
      t.boolean :answer
      t.belongs_to :question

      t.timestamps
    end
  end
end

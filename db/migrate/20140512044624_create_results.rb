class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.belongs_to :quiz
      t.belongs_to :user
      t.float :score

      t.timestamps
    end
  end
end

class CreateUserResponses < ActiveRecord::Migration
  def change
    create_table :user_responses do |t|
      t.belongs_to :result
      t.belongs_to :quiz
      t.belongs_to :question
      t.belongs_to :choice
      t.boolean :correct

      t.timestamps
    end
  end
end
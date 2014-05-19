# populate the data with a few sample users and quizzes
bob = User.create(username: 'bob@example.com', password: 'test1234')
joe = User.create(username: 'joe@example.com', password: 'test1234')
smith = User.create(username: 'smith@example.com', password: 'test1234')

quiz1 = Quiz.create(name: "State Capitals", user_id: bob.id)
quiz2 = Quiz.create(name: "French Vocabulary", user_id: joe.id)
quiz3 = Quiz.create(name: "Tech Tycoons", user_id: smith.id)

# Quiz 1
q1 = Question.create(text: "What is the capital of Florida?", quiz_id: quiz1.id)
q2 = Question.create(text: "What is the capital of California?", quiz_id: quiz1.id)
q3 = Question.create(text: "What is the capital of Utah?", quiz_id: quiz1.id)
q4 = Question.create(text: "What is the capital of Texas", quiz_id: quiz1.id)

Choice.create(text: "Jacksonville", answer: false, question_id: q1.id)
Choice.create(text: "Miami", answer: false, question_id: q1.id)
Choice.create(text: "Tallahassee", answer: true, question_id: q1.id)

Choice.create(text: "Los Angeles", answer: false, question_id: q2.id)
Choice.create(text: "Sacramento", answer: true, question_id: q2.id)
Choice.create(text: "San Francisco", answer: false, question_id: q2.id)
Choice.create(text: "San Jose", answer: false, question_id: q2.id)

Choice.create(text: "Salt Lake City", answer: true, question_id: q3.id)
Choice.create(text: "Provo", answer: false, question_id: q3.id)

Choice.create(text: "Houston", answer: false, question_id: q4.id)
Choice.create(text: "Austin", answer: true, question_id: q4.id)
Choice.create(text: "Dallas", answer: false, question_id: q4.id)
Choice.create(text: "Phoenix", answer: false, question_id: q4.id)
Choice.create(text: "Baton Rouge", answer: false, question_id: q4.id)

# Quiz 2
q1 = Question.create(text: "What is the word for 'cat' in French?", quiz_id: quiz2.id)
q2 = Question.create(text: "What is the word for 'red' in French?", quiz_id: quiz2.id)
q3 = Question.create(text: "How do you say 'thank you very much' in French?", quiz_id: quiz2.id)
q4 = Question.create(text: "What are the first four numbers (1, 2, 3, 4) in French?", quiz_id: quiz2.id)
q5 = Question.create(text: "How do you say the 'That is life.' in French?", quiz_id: quiz2.id)

Choice.create(text: "doge", answer: false, question_id: q1.id)
Choice.create(text: "chevale", answer: false, question_id: q1.id)
Choice.create(text: "chat", answer: true, question_id: q1.id)
Choice.create(text: "fromage", answer: false, question_id: q1.id)

Choice.create(text: "rauge", answer: false, question_id: q2.id)
Choice.create(text: "reuge", answer: false, question_id: q2.id)
Choice.create(text: "rouge", answer: true, question_id: q2.id)
Choice.create(text: "rouje", answer: false, question_id: q2.id)

Choice.create(text: "merci beaucoup", answer: true, question_id: q3.id)
Choice.create(text: "merci bonboon", answer: false, question_id: q3.id)

Choice.create(text: "un, deux, trois, quatre", answer: true, question_id: q4.id)
Choice.create(text: "cinq, deux, quatre, neuf", answer: false, question_id: q4.id)
Choice.create(text: "deux, un, quatre, trois", answer: false, question_id: q4.id)

Choice.create(text: "c'est un vie", answer: false, question_id: q5.id)
Choice.create(text: "c'est la vie", answer: true, question_id: q5.id)

# Quiz 3
q1 = Question.create(text: "This tech tycoon dropped out of Harvard University and founded which company in 2004?", quiz_id: quiz3.id)
q2 = Question.create(text: "Originally fired from the company he helped found, he was later hired back in 1997. Who is this CEO?", quiz_id: quiz3.id)
q3 = Question.create(text: "Who created the genius videogame mega-hit 'Flappy Bird'?", quiz_id: quiz3.id)

Choice.create(text: "Apple", answer: false, question_id: q1.id)
Choice.create(text: "Microsoft", answer: false, question_id: q1.id)
Choice.create(text: "Facebook", answer: true, question_id: q1.id)

Choice.create(text: "Bill Gates", answer: false, question_id: q2.id)
Choice.create(text: "Steve Jobs", answer: true, question_id: q2.id)
Choice.create(text: "Warren Buffett", answer: false, question_id: q2.id)
Choice.create(text: "Jonathan Ive", answer: false, question_id: q2.id)

Choice.create(text: "Dong Nguyen", answer: true, question_id: q3.id)
Choice.create(text: "Shigeru Miyamoto", answer: false, question_id: q3.id)
Choice.create(text: "Sukiyabashi Jiro", answer: false, question_id: q3.id)
// Fetch the questions JSON file
fetch('../test/questions.json')
  .then((response) => {
    // Parse the JSON data
    return response.json();
  })
  .then((questions) => {
    
    const questionsContainer = document.getElementById('questions-container');
    const searchBar = document.getElementById('search-bar');

    // Function to render the filtered questions
    function renderFilteredQuestions() {
      const searchTerm = searchBar.value.toLowerCase();

      //Clear the previous questions
      questionsContainer.innerHTML = '';

      // Filter the questions based on the search term
      const filteredQuestions = questions.filter((question) =>
        question.question.toLowerCase().includes(searchTerm)
      );

      // Render the filtered questions
      filteredQuestions.forEach((question) => {
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('question-answer-container');

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.textContent = `${question.question_id}. ${question.question}`;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = `${question.correct_answer}`;

        containerDiv.appendChild(questionDiv);
        containerDiv.appendChild(answerDiv);
        questionsContainer.appendChild(containerDiv);
      });
    }

    // Initial rendering of questions
    renderFilteredQuestions();

    // Add an input event listener to the search bar

    searchBar.addEventListener('input', renderFilteredQuestions);
  })
  .catch((error) => {
    console.log('Error fetching questions: ', error);

  });
    
const fetchQuiz = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );
  return data;
};
export const quizQuenstion = {
  fetchQuiz,
};

import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const FormUI = () => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(400);
  const [questions, setQuestions] = useState(null);
  let history = useHistory();
  useEffect(() => {
    getData();
    async function getData() {
      const url = `https://api.findcollege.us/questions`;
      const response = await fetch(url);
      const data = await response.json();
      const res = data;
      setQuestions(res);
    }
  }, []);

  const handleClick = (input, waited) => {
    input === waited ? setScore(score + 120) : setScore(score);
    counter < 9 ? (
      setCounter(counter + 1)
    ) : (
      history.push("colleges/" + score)
    );
  };

  return (
    <div className="flex h-screen">
      {questions && (
        <div className="flex flex-col items-center justify-around m-auto">
          <h1 className="text-2xl text-center m-6 font-extrabold text-black mb-6">
            {questions[counter].question}
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            <button
              type="button"
              class="m-4 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-64 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={() => handleClick("a", questions[counter].correct)}
            >
              {questions[counter].answers["a"]}
            </button>
            <button
              type="button"
              class="m-4 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-64 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={() => handleClick("b", questions[counter].correct)}
            >
              {questions[counter].answers["b"]}
            </button>
            <button
              type="button"
              class="m-4 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-64 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={() => handleClick("c", questions[counter].correct)}
            >
              {questions[counter].answers["c"]}
            </button>
            <button
              type="button"
              class="m-4 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-64 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              onClick={() => handleClick("d", questions[counter].correct)}
            >
              {questions[counter].answers["d"]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormUI;

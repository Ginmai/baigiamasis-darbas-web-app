import { useEffect, useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };
  const headers = {
    authorization: cookie.get("jwt_token"),
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      setQuestions(response.data.questions);
    } catch (err) {
      console.log(err);
    }
  };

  const clickLike = async (_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/questions/${_id}/like`,
        {},
        { headers: headers }
      );

      if (response.status === 200) {
        fetchQuestions();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clickDislike = async (_id) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/questions/${_id}/dislike`,
        {},
        { headers: headers }
      );

      if (response.status === 200) {
        fetchQuestions();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
    checkUserToken();
  }, []);

  return (
    <>
      <Header token={token} />

      {questions.map((question) => {
        return (
          <div key={question._id}>
            <Card
              _id={question._id}
              question_text={question.question_text}
              date={question.date}
              likes={question.likes}
              dislikes={question.dislikes}
              clickLike={clickLike}
              clickDislike={clickDislike}
            />
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default Home;

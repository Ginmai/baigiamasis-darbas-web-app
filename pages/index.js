import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState();

  // const checkUserToken = () => {
  //   setToken(cookie.get("jwt_token"));
  // };

  const fetchQuestions = async () => {
    const headers = {
      authorization: cookie.get("jwt_token"),
    };
    try {
      const response = await axios.get("http://localhost:3001/questions", {
        headers: headers,
      });
      setQuestions(response.data.questions);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchQuestions();
    // checkUserToken();
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
            />
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default Home;

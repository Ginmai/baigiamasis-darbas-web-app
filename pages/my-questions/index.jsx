import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import MyCard from "../../components/MyCard/MyCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      setQuestions(response.data.questions);
    } catch (err) {
      router.push("/login");
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
          <MyCard
            _id={question._id}
            question_text={question.question_text}
            date={question.date}
            likes={question.likes}
            dislikes={question.dislikes}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Home;

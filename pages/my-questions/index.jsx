import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import MyCard from "../../components/MyCard/MyCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const MyQuestions = () => {
  const router = useRouter();
  const [myQuestions, setMyQuestions] = useState([]);
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      setMyQuestions(response.data.questions);
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

      {myQuestions.map((question) => {
        return (
          <MyCard
            _id={question._id}
            key={question._id}
            question_text={question.question_text}
            date={question.date}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default MyQuestions;

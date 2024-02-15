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

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      console.log(response);
      setQuestions(response.data.questions);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <Header />
      <Link href="/addQuestion">
        <h4 className={styles.addTutorial}>Add tutorial</h4>
      </Link>
      {questions.map((question) => {
        return (
          <Card
            _id={question.question._id}
            question_text={question.question.question_text}
            date={question.question.date}
            user={question.user}
            likes={question.question.likes}
            dislikes={question.question.dislikes}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import MyCard from "../../components/MyCard/MyCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MyQuestions = () => {
  const router = useRouter();
  const [myQuestions, setMyQuestions] = useState([]);
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };

  const headers = {
    authorization: cookie.get("jwt_token"),
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions", {
        headers: headers,
      });
      setMyQuestions(response.data.questions);
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

  const clickDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/questions/${_id}`,
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

      {myQuestions.map((question) => {
        return (
          <div key={question._id}>
            <MyCard
              _id={question._id}
              key={question._id}
              question_text={question.question_text}
              date={question.date}
              clickDelete={clickDelete}
            />
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default MyQuestions;

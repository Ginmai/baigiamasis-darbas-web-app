import axios from "axios";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Delete = () => {
  const router = useRouter();

  const headers = {
    authorization: cookie.get("jwt_token"),
  };

  const fetchResource = async () => {
    const response = await axios.delete(
      `http://localhost:3001/questions/${router.query.id}`,
      {},
      { headers: headers }
    );
  };

  useEffect(() => {
    router.query.id && fetchResource();
  }, [router.query.id]);

  return <div>Resource</div>;
};

export default Delete;

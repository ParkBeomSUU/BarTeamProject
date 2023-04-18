import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminInfo from "../Button/AdminInfo";

const Users = () => {
  const [user, setUsers] = useState("혠오");

  useEffect(() => {
    axios
      .get("http://localhost:8080/login")
      .then((response) => {
        /*
       아래 코드의 reponse.data 부분이
       사용자의 별명에 접근하는 코드로 변경되어야 한다 
       */
        setUsers(response.data["userId"]);
      })
      .catch(() => {
        console.error("네트워크 에러가 발생한 듯합니다");
      });
  }, []);

  return <>{user}</>;
};

export default Users;

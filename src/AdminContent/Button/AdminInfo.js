import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";

const Users = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/login").then((response) => {
      console.log(response.data);
    });
  }, []);
  return <>{}</>;
};

export default Users;

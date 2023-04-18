import { Component, useEffect, useState, useRef } from "react";
// import userData from "../../local-json/users.json";
import { InputWithLabel, RegisterLink } from "../../components/";
import styled from "styled-components";
import oc from "open-color";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
const LoginBtn = styled.button`
  position: fixed;
  margin-top: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.5rem;
  background: #1ebaed;
  border-color: #cacaca;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  display: block;
  width: 100px;
  height: 45px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  left : 27%;
  align-items: center;


}
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`;
const Login = (props) => {
  const KAKAO_AUTH_URL = "https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/oauth2/authorization/kakao";
  //자체서버 로그인 토큰 저장
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = { userId: userId, userPw: userPw };
    axios
        .post("https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/login", data, {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        .then((response) => {
          console.log("성공" + response.headers);
          // Access Token을 받아서 로컬 스토리지에 저장합니다.
          let accessToken = response.headers.get("Authorization").substring(7);
          // 로그인이 성공한 경우 메인 페이지로 이동합니다.
          if (userId === "admin") {
            window.localStorage.setItem("adminAccessToken", accessToken);
            window.location.href = "/admin";
          } else {
            window.localStorage.setItem("userAccessToken", accessToken);
            window.location.href = "/Menu";
          }
        })
        .catch((ex) => {
          console.log("로그인 실패 : " + ex);
        })
        .finally(() => {
          console.log("login request end");
        });
  };

  useEffect(() => {
    console.log("LoginPage render ... ");
  });

  return (
      <>
        <form onSubmit={handleSubmit}>
          <Title>로그인</Title>
          <InputWithLabel
              onChange={(e) => setUserId(e.target.value)}
              label="아이디"
              name="userId"
              placeholder="아이디"
          />
          <InputWithLabel
              onChange={(e) => setUserPw(e.target.value)}
              label="비밀번호"
              name="password"
              placeholder="비밀번호"
              type="password"
          />
          <br/>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <LoginBtn type="submit">로그인</LoginBtn>
            <a
                type="submit"
                href={KAKAO_AUTH_URL}
                style={{
                  marginTop: "1rem",
                  marginLeft: "5rem",
                  paddingTop: "0.6rem",
                  paddingBottom: "0.5rem",
                  paddingLeft: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
            >
              <img
                  style={{ width: "100px", height: "45px" }}
                  src={process.env.PUBLIC_URL + "/Kakaoplus.png"}
                  alt="카카오 연동하기"
              />
            </a>
          </div>

        </form>
        <div>
          {/*<br/>*/}

          <RegisterLink to="/auth/register">회원가입</RegisterLink>
        </div>
      </>
  );
};

export default Login;
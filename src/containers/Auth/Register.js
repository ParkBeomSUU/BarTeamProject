
import react, {Component, useEffect, useState} from 'react';
import userData from "../../local-json/users.json";
import {InputWithLabel, RegisterLink } from "../../components/";
import styled from "styled-components";
import { shadow } from "../../lib/styleUtil";
import axios from "axios";
import Swal from "sweetalert2";
// import {color} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: gray;
  margin-bottom: 1rem;
`;
//아이디 비번 중복 체크 스타일
const checkIdPw = {
    border : "0",
    // marginLeft :"40%",
    // marginTop : "4%",
    paddingLeft:"130px",
    color : "#1ebaed",
    backgroundColor : "white",
    fontSize: "0.9rem",
    position: "absolute",
    right: 0
}

const LoginBtn = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: #1ebaed;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  display: block;
  width: 100%;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: #1ebaed;
    ${shadow(0)}
  }

  &:active {
    background: #1ebaed;
  }
`;

const registerFunc = async (value) => await axios.post('https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/join',
    {"userId":value.UserId, "userPw":value.UserPw,"tableNum":value.tableNum});



const Register = () => {
    const [UserId, setUserId] = useState("");
    const [UserPw,setUserPw] = useState("");
    const [tableNum,setTableNum]= useState(0);
    //비밀번호 일치 불일치 판단
    const [confirmPw, setConfirmPw] = useState("");
    // 비번 일치 안되면 회원가입 안되도록 함
    const [match, setMatch] = useState(null);
    const [checkVal,setCheckVal] =useState(null);

    //아이지 중복체크 true면 중복/ 중복 아니면 false
    const dupleId = (e)=>{e.preventDefault()
        axios.post('https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/checkId',{"userId":UserId}).then(response=>{
            console.log(response.data)
            if(response.data){
                setCheckVal(true)
            }
            else{
                setCheckVal(false)
            }
        })
    }

    const allCheck = ()=>{
        let checkId =Boolean(dupleId());
    }
    //비밀번호 중복체크
    const handlePwChange = (e) => {
        setUserPw(e.target.value);
    };

    const handleConfirmPwChange = (e) => {
        setConfirmPw(e.target.value);
    };

    useEffect(() => {

        if(UserPw === "" || confirmPw === ""){
            setMatch(null);
            return;
        }
        if (UserPw === confirmPw) {
            setMatch(true);
        } else {
            setMatch(false);
        }


    }, [UserPw, confirmPw])

    //버튼느낌 비밀번호확인

    // const handleCheckPw = () => {

    //   if (UserPw === confirmPw) {
    //     setMatch(true);
    //   } else {
    //     setMatch(false);
    //   }
    // };

    const SignUp = async (event) => {
        event.preventDefault();

        if(tableNum === 0){
            // alert("테이블 번호를 선택해 주세요!")
            return
        }

        registerFunc({
            UserId, UserPw, tableNum
        })
            .then(()=>{
                Swal.fire({
                    icon: "success",
                    title: "회원가입 완료!!",
                    text: "로그인 해주세요",
                    confirmButtonText: "확인",
                }).then(()=>{
                    window.location.href = '/auth/login';})
            .catch(error=>{
                console.log(error.response.data);
            })
    })
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    SignUp(e);
                }}
            >
                <Title>회원 가입</Title>
                <h6 style={{ color: "black" }}>테이블 번호</h6>
                <select
                    name="TableNumber"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                        setTableNum(parseInt(e.target.value));
                        console.log(tableNum);
                    }}
                >
                    <option style={{ display: "none" }} value="0" disabled selected>
                        테이블을 선택해주세요.
                    </option>
                    <option value="1">1번 테이블</option>
                    <option value="2">2번 테이블</option>
                    <option value="3">3번 테이블</option>
                    <option value="4">4번 테이블</option>
                </select>
                <div style={{position:"relative", }}>
                {checkVal === null ? <span style={{color:"red"}}>아이디 중복 체크 해주세요</span> :
                    checkVal ? <span style={{color:"red"}}>이미 존재하는 아이디</span> : <span style={{color:"black"}}>사용 가능한 아이디</span>}
                <button style={checkIdPw} onClick={dupleId}>아이디 중복체크</button>
                </div>
                <InputWithLabel
                    label="아이디"
                    name="userId"
                    placeholder="아이디"
                    onChange={(e) => setUserId(e.target.value)}
                />
                <div>
                    <InputWithLabel
                        label="비밀번호"
                        name="userPw"
                        placeholder="비밀번호"
                        type="password"
                        value={UserPw}
                        onChange={handlePwChange}
                    />
                    <InputWithLabel
                        label="비밀번호 확인"
                        name="confirmPw"
                        placeholder="비밀번호 확인"
                        type="password"
                        value={confirmPw}
                        onChange={handleConfirmPwChange}
                    />
                    {/* <button style={checkIdPw} onClick={handleCheckPw}>
      비밀번호 확인
    </button> */}
                    {/* {match === true && (
      <p style={{ color: "blue" }}>비밀번호가 일치합니다.</p>
    )}
    {match === false && (
      <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
    )}
              {match === null && <p></p>} */}


                    {match === null ? <span></span> :
                        (match ? <span></span> : <span style={{color: "red"}}>비밀번호를 확인해 주세요</span>)}

                    {/* {match === null && UserPw !== "" && confirmPw !== "" && (
            <p style={{ color: "gray" }}>비밀번호를 확인해주세요.</p>
          )} */}
                </div>

                <LoginBtn type="submit" disabled={!match}>
                    회원가입
                    {match === null ? <span></span> :
                        match ? <span></span> : <span >  불가</span>}

                </LoginBtn>

                <RegisterLink to="/auth/login">로그인</RegisterLink>
            </form>
        </>
    );
};

export default Register;
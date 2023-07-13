import React, { useState } from "react";
import api from "../api/api";

import classes from "./SignIn.module.css";

const SignIn = ({ isOpen, close }) => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameCheck, setNicknameCheck] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const eamilHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const nicknameHandler = (e) => {
    setNickname(e.target.value);
  }

  const SubmitHandler = () => {

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
    const nicknameRegex = /^[a-zA-Z0-9]{3,}$/;

    if (emailRegex.test(email)) {
      setEmailCheck(true);
    }
    if (passwordRegex.test(password)) {
      setPasswordCheck(true);
    }
    if (nicknameRegex.test(nickname)) {
      setNicknameCheck(true);
    }


    if (isSignUp) {
      if (emailCheck && passwordCheck && nicknameCheck) {
        api
          .post("/user/signup", {
            email: email,
            password: password,
            nickname: nickname,
          })
          .then((res) => {
            if (res.status === 200) {
              alert("회원가입이 완료되었습니다.");
              close();
            } else {
              alert("회원가입에 실패하였습니다.");
            }
          })
          .catch((err) => {
            alert("회원가입에 실패하였습니다.");
          });
      } else {
        alert("입력한 정보를 다시 확인해주세요.");
      }
    }else{
      if (emailCheck && passwordCheck) {
        api
          .post("/user/login", {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.status === 200) {
              alert("로그인이 완료되었습니다.");
              close();
            } else {
              alert("로그인에 실패하였습니다.");
            }
          })
          .catch((err) => {
            alert("로그인에 실패하였습니다.");
          });
      } else {
        alert("입력한 정보를 다시 확인해주세요.");
      }
    }
  }

  const signUpMove = () => {
    setIsSignUp(!isSignUp);
  }
  return (
    <>
      {isOpen ? (
        <div className={classes.modal} onClick={close}>
          <div className={classes.loginModal}>
            <span className={classes.close} onClick={close}>
              ×
            </span>
            <div className={classes.modalContents} onClick={(e) => e.stopPropagation()}>
              <img className={classes.signinIcon} src="images/logo.png" alt="애플마켓 로그인" />
              {isSignUp ? 
              <input
                name="nickname"
                className={classes.loginId}
                type="text"
                placeholder="닉네임을 3글자 이상 입력해주세요."
                onChange={nicknameHandler}
               />
              :
              ''}
              <input
                name="email"
                className={classes.loginId}
                type="text"
                placeholder="이메일 형식으로 입력해주세요."
                onChange={eamilHandler}
              />
              <input
                name="password"
                className={classes.loginPw}
                type="password"
                placeholder="비밀번호를 8자리 이상 입력해주세요."
                onChange={passwordHandler}
              />
              <div className={classes.loginMid}>
                <label className={classes.autoLogin} htmlFor="hint">
                </label> 
                <div className={classes.autoLogin}>아이디/비밀번호 찾기</div>
              </div>
              {isSignUp ?
                <button onClick={SubmitHandler} className={classes.loginBtn} >
                  회원가입
                </button> :
                <button onClick={SubmitHandler} className={classes.loginBtn} >
                  로그인
                </button>
                }
              <div className={classes.socialBox}>
                <div className={classes.kakao}>
                  <img className={classes.kakaoLogo} src="images/signUp/kakao.jpg" alt="Kakao Logo" />
                  <div className={classes.kakaoText}>카카오톡 계정으로 신규가입</div>
                </div>
                <div className={classes.google}>
                  <img className={classes.googleLogo} src="images/signUp/google.png" alt="Facebook Logo" />
                  <div className={classes.googleText}>구글 계정으로 신규가입</div>
                </div>
              </div>
              <div className={classes.loginEnd}>
                {isSignUp ? '' : 
                  <div className={classes.loginLine}>
                    회원이 아니신가요? 
                  </div> 
                  }
                {isSignUp ? 
                <button onClick={signUpMove}  className={classes.signUpLink}>
                  로그인
                </button>
                 :
                <button onClick={signUpMove}  className={classes.signUpLink}>
                  회원가입
                </button>}
                <div className={classes.noUser}>비회원 주문 조회</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SignIn;
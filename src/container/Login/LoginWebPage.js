import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./LoginWebPage.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  handleLoginService,
  checkPhonenumberEmail,
  createNewUser,
} from "../../services/userService";
import Otp from "./Otp";
import { authentication } from "../../utils/firebase";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { async } from "@firebase/util";
const LoginWebPage = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "passwordsecrect",
    lastName: "",
    phonenumber: "",
    isOpen: false,
    dataUser: {},
  });
  let history = useHistory();
  const handleOnChange = (event) => {
    const { name, value, phonenumber } = event.target;
    console.log("phonenumber");
    console.log(event.target, "event.target");
    setInputValues({ ...inputValues, [name]: value });
  };
  const isValidatePhoneNumber = (phone) => {
    return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(phone);
  };

  let handleLogin = async () => {
    const element = document.querySelector("form");
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    let res = await handleLoginService({
      email: inputValues.email,
      password: inputValues.password,
    });

    console.log("res :", res);
    if (res && res.errCode === 0) {
      localStorage.setItem("userData", JSON.stringify(res.user));
      localStorage.setItem("token", JSON.stringify(res.accessToken));
      if (res.user.roleId === "R1" || res.user.roleId === "R3") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } else {
      toast.error(res.errMessage);
    }
  };

  let handleLoginSocial = async (email) => {
    const element = document.querySelector("form");
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    let res = await handleLoginService({
      email: email,
      password: inputValues.password,
    });
    console.log("res :::", res);
    if (res && res.errCode === 0) {
      localStorage.setItem("userData", JSON.stringify(res.user));
      localStorage.setItem("token", JSON.stringify(res.accessToken));
      if (res.user.roleId === "R1" || res.user.roleId === "R3") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } else {
      toast.error(res.errMessage);
    }
  };

  let handleSaveUser = async () => {
    const element = document.querySelector("form");
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setInputValues({
      ...inputValues,
      ["dataUser"]: {
        email: inputValues.email,
        lastName: inputValues.lastName,
        phonenumber: inputValues.phonenumber,
        password: inputValues.password,
        roleId: "R2",
      },
      ["isOpen"]: false,
    });
    console.log("222222222222");
    if (!isValidatePhoneNumber(inputValues.phonenumber)) {
      toast.error("Số điện thoại không hợp lệ");
      return;
    }
    isValidatePhoneNumber(inputValues.phonenumber);
    console.log("1", inputValues);
    let createUser = async () => {
      let res = await createNewUser({
        email: inputValues.email,
        lastName: inputValues.lastName,
        phonenumber: inputValues.phonenumber,
        password: inputValues.password,
        roleId: inputValues.roleId,
      });
      if (res && res.err === 0) {
        toast.success("Tạo tài khoản thành công");
        handleLogin(inputValues.email, inputValues.password);
      } else {
        toast.error(res.errMessage);
      }
    };
    createUser();

    // let res = await checkPhonenumberEmail({
    //     phonenumber: inputValues.phonenumber,
    //     email: inputValues.email
    // })
    // if (res.isCheck === true) {
    //     toast.error(res.errMessage)
    // } else {
    //     setInputValues({
    //         ...inputValues, ["dataUser"]:
    //         {
    //             email: inputValues.email,
    //             lastName: inputValues.lastName,
    //             phonenumber: inputValues.phonenumber,
    //             password: inputValues.password,
    //             roleId: 'R2',
    //         }, ["isOpen"]: true
    //     })
    // }
  };
  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };
  let signInwithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        LoginWithSocial(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  let LoginWithSocial = async (re) => {
    let res = await checkPhonenumberEmail({
      phonenumber: re.user.providerData[0].phoneNumber,
      email: re.user.providerData[0].email,
    });

    if (res.isCheck === true) {
      setInputValues({
        ...inputValues,
        ["email"]: re.user.providerData[0].email,
      });
      handleLoginSocial(re.user.providerData[0].email);
    } else {
      getBase64FromUrl(re.user.providerData[0].photoURL).then(async (value) => {
        let res = await createNewUser({
          email: re.user.providerData[0].email,
          lastName: re.user.providerData[0].displayName,
          phonenumber: re.user.providerData[0].phoneNumber,
          avatar: value,
          roleId: "R2",
          password: inputValues.password,
        });
        if (res && res.errCode === 0) {
          toast.success("Tạo tài khoản thành công");
          handleLoginSocial(re.user.providerData[0].email);
        } else {
          toast.error(res.errMessage);
        }
      });
    }
  };
  let signInwithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then(async (re) => {
        LoginWithSocial(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {inputValues.isOpen === false && (
        <div className="box-login">
          <div className="login-container">
            <section id="formHolder">
              <div className="row">
                {/* Brand Box */}
                <div className="col-sm-6 brand">
                  <a href="#" className="logo">
                    MR <span>.</span>
                  </a>
                  <div className="heading">
                    <h2>True Mobile</h2>
                    <p>Cửa Hàng Điện Thoại Số 1 Việt Nam</p>
                  </div>
                </div>
                {/* Form Box */}
                <div className="col-sm-6 form">
                  {/* Login Form */}
                  <div className="login form-peice ">
                    <form className="login-form">
                      <div className="form-group">
                        <label htmlFor="loginemail">Địa chỉ email</label>
                        <input
                          name="email"
                          onChange={(event) => handleOnChange(event)}
                          type="email"
                          id="loginemail"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="loginPassword">Mật khẩu</label>
                        <input
                          name="password"
                          onChange={(event) => handleOnChange(event)}
                          type="password"
                          id="loginPassword"
                          required
                        />
                      </div>
                      <br />
                      <div className="CTA">
                        <input
                          onClick={() => handleLogin()}
                          type="submit"
                          value="Đăng nhập"
                        />
                        <a style={{ cursor: "pointer" }} className="switch">
                          Tài khoản mới
                        </a>
                      </div>
                      {/* <FacebookLoginButton
                        text="Đăng nhập với Facebook"
                        iconSize="25px"
                        style={{
                          width: "300px",
                          height: "40px",
                          fontSize: "16px",
                          marginTop: "40px",
                          marginBottom: "10px",
                        }}
                        onClick={() => signInwithFacebook()}
                      /> */}
                      {/* <GoogleLoginButton
                        text="Đăng nhập với Google"
                        iconSize="25px"
                        style={{
                          width: "300px",
                          height: "40px",
                          fontSize: "16px",
                        }}
                        onClick={() => signInwithGoogle()}
                      /> */}
                    </form>
                  </div>
                  {/* End Login Form */}
                  {/* Signup Form */}
                  <div className="signup form-peice switched">
                    <form className="signup-form">
                      <div className="form-group">
                        <label htmlFor="name">Tên của bạn</label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={(event) => handleOnChange(event)}
                          id="name"
                          className="name"
                        />
                        <span className="error" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Địa chỉ email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={(event) => handleOnChange(event)}
                          id="email"
                          className="email"
                        />
                        <span className="error" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                          type="text"
                          name="phonenumber"
                          onChange={(event) => handleOnChange(event)}
                          id="phone"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                          type="password"
                          name="password"
                          onChange={(event) => handleOnChange(event)}
                          id="password"
                          className="pass"
                        />
                        <span className="error" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordCon">Xác nhận mật khẩu</label>
                        <input
                          type="password"
                          name="passwordCon"
                          id="passwordCon"
                          className="passConfirm"
                        />
                        <span className="error" />
                      </div>
                      <div className="CTA">
                        <input
                          onClick={() => handleSaveUser()}
                          type="submit"
                          value="Đăng ký"
                          id="submit"
                        />
                        <a style={{ cursor: "pointer" }} className="switch">
                          Tôi đã có tài khoản
                        </a>
                      </div>
                    </form>
                  </div>
                  {/* End Signup Form */}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {inputValues.isOpen === true && <Otp dataUser={inputValues.dataUser} />}
    </>
  );
};
export default LoginWebPage;

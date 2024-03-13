import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import jwt from "jwt-decode";
import Router from "next/router";

import {
  getCookie,
  getCookieFromBrowser,
  removeCookie,
  setCookie,
} from "../services/cookies";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null)
  //   const [loading, setLoading] = useState(true);
  const [avaliation, setAvaliation] = useState(true);
  const [enableRating, setEnableRating] = useState(false);
  const [verificado, setVerificado] = useState(false)
  const [user_id, setUserID] = useState(null);

  function handleBoxActivation(param) {
    const body = document.getElementsByTagName("body")[0];
    if (param) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookieFromBrowser("token");

      if (token) {
        try {
          //   api.defaults.headers.Authorization = `Bearer ${token}`;
          //   const userData = jwt(token);
          //   const { data: user } = await api.get(`/api/user/${userData._id}`);
          const { data: resp } = await api.get("https://beta.lawyerlamp.com/api/v1/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (resp) {
            setUser(resp);
          }

          handleBoxActivation(true);
        } catch (e) {
          if (401 === e.response.status) {
            removeCookie("token");
            setUser(null);
            handleBoxActivation(false);
          }
        }
      }
      //   setLoading(false);
    }
    loadUserFromCookies();
  }, []);
  const signup = async (name, email, password, telegram_username, language) => {
    try {
      const { data: response } = await api.post("https://beta.lawyerlamp.com/api/v1/api/signup", {
        name: name,
        email: email,
        password: password,
        telegram_username: telegram_username,
        language: language
      });
      console.log(response)
      const token = response.token;
      if (token) {
        const { data: resp } = await api.get("https://beta.lawyerlamp.com/api/v1/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (resp) {
          setUser(resp);
          setCookie("token", token);
        }
        // Router.push('/dashboard')
        // await Router.push("/");
        console.log("Logado com sucesso");
        return { success: true };
      }
    } catch (e) {
      if (409 === e.response.status) {
        removeCookie("token");
        setUser(null);
        handleBoxActivation(false);
        return { success: false, message: "Usuário já cadastrado" };
      }
    }
  }
  const login = async (email, password) => {
    const { data: response } = await api.post("https://beta.lawyerlamp.com/api/v1/api/login", {
      email: email,
      password,
    });

    // const response = {
    //   token: "teste",
    // };
    const token = response.token;
    if (token) {

      //   api.defaults.headers.Authorization = `Bearer ${token}`;
      //   const userData = jwt(token);
      //   const { data: user } = await api.get(`/api/user/${userData._id}`);
      //   setUser(user);
      const { data: resp } = await api.get("https://beta.lawyerlamp.com/api/v1/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (resp) {
        setUser(resp);
        setCookie("token", token);
      }
      Router.push('/dashboard')
      // await Router.push("/");
      console.log("Logado com sucesso");
    }
  };
  const delete_accout = async (token) => {
    const url_user_delete = process.env.url_user_delete;
    console.log(url_user_delete)
    const { data: response } = await api.delete(url_user_delete, {
      headers: {
        token: token,
      }
    });
    if (response) {

      removeCookie("token");
      setUser(null);
      Router.push("/");
    }
  }

  const logout = () => {
    removeCookie("token");
    setUser(null);
    Router.push("/");
    console.log("Deslogado com sucesso");
  };
  const verify = async (Token) => {
    try {
      const { data: response } = await api.post('https://beta.lawyerlamp.com/api/v1/mail/verify/token', {
        token: Token
      });
      if (response == 'Success') {
        setVerificado(true);
        return { success: true }

      }
    } catch (e) {
      console.log(e)
      setVerificado(false);
    }
  };
  const change_pass = async (new_pass, token) => {
    const { data: response } = await api.patch("https://beta.lawyerlamp.com/api/v1/update/user", {
      password: new_pass
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(token);
  };
  const send_mail = async (email) => {
    Router.push('/confirmEmailSend');
    // const { data: response } = await api.post("https://beta.lawyerlamp.com/api/v1/mail/recover/pass", {
    //   email: email
    // });
    setCookie('email', email);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, verificado, login, logout, signup, delete_accout, verify, change_pass, send_mail }}
    >

      {children}
    </AuthContext.Provider>

  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

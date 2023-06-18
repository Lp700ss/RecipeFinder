import React, { useState } from "react";
import Router from "next/router";
import { whoAmI } from "../lib/auth";
import { removeToken } from "../lib/token";
import Navbar from "../components/Navbar/Navbar";
import RecipeApp from "../components/Recipie/Recipe";


export default function Dashboard() {
  const [user, setUser] = useState({});
  // Watchers
  React.useEffect(() => {
    const token = window.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    if (!token) {
      // redirectToLogin();
    } else {
      (async () => {
        try {
          const data = await whoAmI();
          if (data.error === "Unauthorized") {
            // User is unauthorized and there is no way to support the User, it should be redirected to the Login page and try to logIn again.
            redirectToLogin();
          } else {
            setUser(data.payload);
          }
        } catch (error) {
          // If we receive any error, we should be redirected to the Login page
          redirectToLogin();
        }
      })();
    }
  }, []);

  function redirectToLogin() {
    Router.push("/auth/login");
  }

  function handleLogout(e) {
    e.preventDefault();

    removeToken();
    redirectToLogin();
  }

  if (user.hasOwnProperty("username")) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: "#e3f2fd" }}>
          <Navbar 
          />
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Welcome {user.username}!
            </a>
            <button
              className="btn btn-info"
              type="button"
              style={{ color: "white", backgroundColor: "#0d6efd" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
        
        <div className="container mt-4" style={{ paddingTop: '100px' }}>
    <RecipeApp />
  </div>
      </>
    );
  }
  return <div>Welcome back soldier. Welcome to your empty profile.</div>;
}

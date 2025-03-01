import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

// const temp = {
//   clientId:
//     "47554898255-qbqsb6qonpdg4u2cea3h2qfp3p2hrluq.apps.googleusercontent.com",
//   credential:
//     "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc2M2Y3YzRjZDI2YTFlYjJiMWIzOWE4OGY0NDM0ZDFmNGQ5YTM2OGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0NzU1NDg5ODI1NS1xYnFzYjZxb25wZGc0dTJjZWEzaDJxZnAzcDJocmx1cS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjQ3NTU0ODk4MjU1LXFicXNiNnFvbnBkZzR1MmNlYTNoMnFmcDNwMmhybHVxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAxNTA5NjM2OTgyMjk4MzcyMzA1IiwiaGQiOiJjb2Rpbmd3b3JreC5jb20iLCJlbWFpbCI6ImtyaXNobmEubWFodG9AY29kaW5nd29ya3guY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTc0MDY1NTE1NywibmFtZSI6IktyaXNobmEgTWFodG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS2xUcmd6UmpEdXoxTXJ0RVBLLWROZWp2Z05IX0VpLVlGNllRM1JxeU5GMk43Rmh0bHk9czk2LWMiLCJnaXZlbl9uYW1lIjoiS3Jpc2huYSIsImZhbWlseV9uYW1lIjoiTWFodG8iLCJpYXQiOjE3NDA2NTU0NTcsImV4cCI6MTc0MDY1OTA1NywianRpIjoiZjhlMGYzYzNkNTA0YTk0MzM5M2YyYTVlYzk4MDQ3MzEyZDQ1YjlhYyJ9.N_wdA0azM0HzIoEmTxQl1FFt2nH-0lFlLc98Xwot3yHGKqS4ey9_w9xZSa0v-V3F-kdTpq9fJndt8n5YGUrrtzJBJmne3nVp1T_5xbjZnpYNG7GbvTd7j4Er09RPdRMsq2bd7UDE_j8YKwt1SixSfiVz3qkMgabNmss7sKV7hTW0Tyw3mYNVPm5CEbKGhLYxAgmcgouHvbnRpER1fQWP_XCSuOnlcsEDp-42r39s5zAl0fvct6A_cj_uIp6cOYjvn9rx5m_sgip9jAwY4rDkW9jK_tNEKH69upT0m49Hu_x13tAD8-7-6aM54enhEpUvivxqifkPuHDEbAUOJjLnsg",
//   select_by: "btn",
// };

function GoogleLoginScreen() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Login response :", codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("response :", res);
          setProfile(res.data);
        })
        .catch((err) => {
          console.log("error :", err);
        });
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          <img src={profile.picture} alt="user image" height={100} width={100} />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}
export default GoogleLoginScreen;

import * as React from "react";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import Advertisements from "./components/Advertisements/Advertisements";
import { codepathUserProfile, firstTweet, navLinks } from "./constants";
import { useState } from "react";

export default function App() {
  const [userProfile, setUserProfile] = React.useState(codepathUserProfile);
  const [tweets, setTweets] = React.useState(firstTweet);
  let arr = [tweets]

  return (
    <div className="app">
      <Navbar navLinks={navLinks} />
      <main>
        <UserProfile  userProfile={userProfile}/>
        <Feed tweets={arr} setTweets={setTweets} userProfile = {userProfile}/>
        <Advertisements />
      </main>
    </div>
  );
}

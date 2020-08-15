import React, { useState } from "react";

export function CreateDev(props) {
  const [username, setUserName] = useState(props.addDevResult.username);
  const [password, setPassword] = useState(props.addDevResult.password);
  const [profile, setProfile] = useState(props.addDevResult.profile);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitHandler({
      username: username,
      password: password,
      profile: profile,
    });

    setUserName("");
    setPassword("");
    setProfile("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{props.pageTitle}</h2>
        <label>
          User Name:
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label>
        <label>
          Profile:
          <input
            type="text"
            name="profile"
            onChange={(e) => setProfile(e.currentTarget.value)}
            value={profile}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

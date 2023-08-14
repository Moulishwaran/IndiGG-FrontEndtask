import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TournamentContext from "./tournamenetContext";
import axios from "axios";

const ViewParticipants = () => {
  let params = useParams();
  // const userContext = useContext(TournamentContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://64d90fabe947d30a2609e057.mockapi.io/participant/${params.id}`
      );
      setUser(response.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ color: "teal" }}>
      <h1 style={{ color: "yellowgreen" }}>View Participants</h1>

      <h2>Name: {user.name}</h2>
      <h2>Email: {user.emailId}</h2>
      <h2>MobileNumber: {user.mobileNumber}</h2>
      <h2>Country: {user.country}</h2>
      <h2>Gender: {user.gender}</h2>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default ViewParticipants;

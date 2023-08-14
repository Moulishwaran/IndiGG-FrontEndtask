import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TournamentContext from "./tournamenetContext";
import axios from "axios";

const ViewTournament = () => {
  let params = useParams();
  // const userContext = useContext(TournamentContext);
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://64d90fabe947d30a2609e057.mockapi.io/tour/${params.id}`
      );
      setUser(response.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ color: "teal" }}>
      <h1 style={{ color: "yellowgreen" }}>ViewTournament</h1>
      <h2>Name: {user.name}</h2>
      <h2>Tournament: {user.tournamentName}</h2>
      <h2>StartDate: {user.startDate}</h2>
      <h2>End Date: {user.endDate}</h2>
      <h2>Status: {user.tournamentStatus}</h2>
    </div>
  );
};

export default ViewTournament;

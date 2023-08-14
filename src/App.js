import "./App.css";
import CreateParticipant from "./component/CreateParticipant";
import CreateTournament from "./component/CreateTournament";
import Dashboard from "./component/Dashboard";
import Participants from "./component/Participants";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import Tournament from "./component/Tournament";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewTournament from "./component/ViewTournament";
import EditTournament from "./component/EditTournament";
import ViewParticipants from "./component/ViewParticipants";
import EditParticipants from "./component/EditParticipants";
import { TournamentProvider } from "./component/tournamenetContext";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [participants, setParticipants] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <TournamentProvider
          value={{ users, setUsers, participants, setParticipants }}
        >
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                  <Route path="/tournament" element={<Tournament />} />
                  <Route
                    path="/create-tournament"
                    element={<CreateTournament />}
                  />
                  <Route
                    path="/view-tournament/:id"
                    element={<ViewTournament />}
                  />
                  <Route
                    path="/edit-tournament/:id"
                    element={<EditTournament />}
                  />
                  <Route path="/participants" element={<Participants />} />
                  <Route
                    path="/create-participants"
                    element={<CreateParticipant />}
                  />
                  <Route
                    path="/view-participants/:id"
                    element={<ViewParticipants />}
                  />
                  <Route
                    path="/edit-participants/:id"
                    element={<EditParticipants />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </TournamentProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

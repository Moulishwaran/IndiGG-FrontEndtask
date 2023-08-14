import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TournamentContext from "./tournamenetContext";
import axios from "axios";
import swal from "sweetalert";

const Tournament = () => {
  const [usersDate, setUsersData] = useState([]);
  let params = useParams();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "https://64d90fabe947d30a2609e057.mockapi.io/tour"
      );
      setUsersData(response.data);
    }
    fetchData();
  }, []);

  const deletetour = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Tournament Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://64d90fabe947d30a2609e057.mockapi.io/tour/${id}`)
          .then(() => {
            getData();
          });
        swal("Sucessfully deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  async function getData() {
    try {
      let Data = await axios.get(
        `https://64d90fabe947d30a2609e057.mockapi.io/tour`
      );
      setUsersData(Data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const userContext = useContext(TournamentContext);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Tournament List</h1>
        <Link
          to={"/create-tournament"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create
          Tournaments
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Tournament Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Tournament Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersDate.map((user, index) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.tournamentName}</td>
                    <td>{user.startDate}</td>
                    <td>{user.endDate}</td>
                    <td>{user.tournamentStatus}</td>
                    <td>
                      <Link
                        to={`/view-tournament/${user.id}`}
                        className="btn btn-warning btn-sm mr-1"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit-tournament/${user.id}`}
                        className="btn btn-primary  btn-sm mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletetour(user.id)}
                        className="btn btn-danger btn-sm mr-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tournament;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TournamentContext from "./tournamenetContext";
import axios from "axios";
import swal from "sweetalert";

const Participants = () => {
  const userContext = useContext(TournamentContext);
  const [userpartcpn, setUserpartcpn] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "https://64d90fabe947d30a2609e057.mockapi.io/participant"
      );
      setUserpartcpn(response.data);
    }
    fetchData();
  }, []);
  const deletePartcpn = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Tournament Details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        axios
          .delete(
            `https://64d90fabe947d30a2609e057.mockapi.io/participant/${id}`
          )
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
        `https://64d90fabe947d30a2609e057.mockapi.io/participant`
      );
      setUserpartcpn(Data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Participants List</h1>
        <Link
          to="/create-participants"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Create Participants
        </Link>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>EmailId</th>
                <th>Mobile Number</th>
                <th>Country</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userpartcpn.map((list, index) => {
                return (
                  <tr>
                    <td>{list.name}</td>
                    <td>{list.emailId}</td>
                    <td>{list.mobileNumber}</td>
                    <td>{list.country}</td>
                    <td>{list.gender}</td>
                    <td>{list.age}</td>
                    <td>
                      <Link
                        to={`/view-participants/${list.id}`}
                        className="btn btn-warning btn-sm mr-1"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit-participants/${list.id}`}
                        className="btn btn-primary  btn-sm mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deletePartcpn(list.id)}
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
//

export default Participants;

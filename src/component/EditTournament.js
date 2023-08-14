import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTournament = () => {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://64d90fabe947d30a2609e057.mockapi.io/tour/${params.id}`
      );
      formik.setValues(user.data);
    }
    fetchData();
  }, []);
  let formik = useFormik({
    initialValues: {
      name: "",
      tournamentName: "",
      startDate: "",
      endDate: "",
      tournamentStatus: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please Enter Company  Name";
      }
      if (!values.tournamentName) {
        errors.tournamentName = "Please Tournament  Name";
      }
      if (!values.startDate) {
        errors.startDate = "Please Enter Start Date";
      }
      if (!values.endDate) {
        errors.endDate = "Please Enter End Date";
      }
      if (!values.tournamentStatus) {
        errors.tournamentStatus = "Please Enter Tournament Status";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://64d90fabe947d30a2609e057.mockapi.io/tour/${params.id}`,
        values
      );
      navigate("/tournament");
    },
  });

  return (
    <div className="container">
      <h5 style={{ color: "green", fontWeight: "bolder", fontSize: "15px" }}>
        EDIT TOURNAMENT
      </h5>
      <form onSubmit={formik.handleSubmit}>
        {/* {JSON.stringify(formik.values)} */}
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={"text"}
              placeholder="Company Name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              style={{
                border: formik.errors.name ? "1px solid red" : "",
                border: formik.values.name !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6">
            <label>Tournament Name</label>
            <input
              type={"text"}
              placeholder="Tournament Name"
              name="tournamentName"
              onChange={formik.handleChange}
              value={formik.values.tournamentName}
              className="form-control"
              style={{
                border: formik.errors.tournamentName
                  ? "1px solid red"
                  : "1px solid green",
                border:
                  formik.values.tournamentName !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.tournamentName}</span>
          </div>
          <div className="col-lg-6">
            <label>Start Date</label>
            <input
              type={"date"}
              name="startDate"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              className="form-control"
              style={{
                border: formik.errors.startDate
                  ? "1px solid red"
                  : "1px solid green",
                border: formik.values.startDate !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.startDate}</span>
          </div>
          <div className="col-lg-6">
            <label>End Date</label>
            <input
              type={"date"}
              name="endDate"
              onChange={formik.handleChange}
              value={formik.values.endDate}
              className="form-control"
              style={{
                border: formik.errors.endDate
                  ? "1px solid red"
                  : "1px solid green",
                border: formik.values.endDate !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.endDate}</span>
          </div>
          <div className="col-lg-6">
            <label>Tournament Status</label>
            <input
              type={"text"}
              placeholder="Tournament status"
              name="tournamentStatus"
              onChange={formik.handleChange}
              value={formik.values.tournamentStatus}
              className="form-control"
              style={{
                border: formik.errors.tournamentStatus ? "1px solid red" : "",
                border:
                  formik.values.tournamentStatus !== ""
                    ? "1px solid green"
                    : "",
              }}
            />
            <span style={{ color: "red" }}>
              {formik.errors.tournamentStatus}
            </span>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mr-3">
          <input
            disabled={Object.keys(formik.errors).length !== 0}
            type={"submit"}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTournament;

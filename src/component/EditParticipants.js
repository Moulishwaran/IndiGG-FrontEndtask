import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditParticipants = () => {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://64d90fabe947d30a2609e057.mockapi.io/participant/${params.id}`
      );
      formik.setValues(user.data);
    }
    fetchData();
  }, []);
  let formik = useFormik({
    initialValues: {
      name: "",
      emailId: "",
      mobileNumber: "",
      country: "",
      gender: "",
      age: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Please Enter Your Name";
      }
      if (!values.emailId) {
        errors.emailId = "Enter Your EmailId";
      }
      if (!values.mobileNumber) {
        errors.mobileNumber = "Enter Mobile Number";
      }
      if (!values.country) {
        errors.country = "Enter Your  Country Name";
      }
      if (!values.gender) {
        errors.gender = "Enter Gender";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age is Required and age should be grater than 18";
      }
      return errors;
    },

    onSubmit: async (values) => {
      // console.log(userContext.participants);
      // console.log(values);
      try {
        await axios.put(
          `https://64d90fabe947d30a2609e057.mockapi.io/participant/${params.id}`,
          values
        );
        navigate("/participants");
      } catch (error) {
        console.log(error);
      }
    },
  });
  // userContext.setParticipants([...userContext.participants, values]);
  return (
    <div className="container">
      <h5
        style={{ color: "yellowgreen", fontWeight: "bolder", fontSize: "15px" }}
      >
        EDIT PARTICIPANTS
      </h5>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type={"text"}
              placeholder="Enter Your Name"
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
            <label>EmailID</label>
            <input
              type={"email"}
              placeholder="Enter Your Email"
              name="emailId"
              onChange={formik.handleChange}
              value={formik.values.emailId}
              className="form-control"
              style={{
                border: formik.errors.emailId ? "1px solid red" : "",
                border: formik.values.emailId !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.emailId}</span>
          </div>
          <div className="col-lg-6">
            <label>Mobile Number</label>
            <input
              type={"number"}
              placeholder="Mobile Number"
              name="mobileNumber"
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
              className="form-control"
              style={{
                border: formik.errors.mobileNumber ? "1px solid red" : "",
                border:
                  formik.values.mobileNumber !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>
          </div>
          <div className="col-lg-6">
            <label>Country</label>
            <input
              type={"text"}
              placeholder="Enter Your Country"
              name="country"
              onChange={formik.handleChange}
              value={formik.values.country}
              className="form-control"
              style={{
                border: formik.errors.country ? "1px solid red" : "",
                border: formik.values.country !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.country}</span>
          </div>
          <div className="col-lg-6">
            <label>Gender</label>
            <input
              type={"text"}
              placeholder="Gender"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-control"
              style={{
                border: formik.errors.gender ? "1px solid red" : "",
                border: formik.values.gender !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.gender}</span>
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type={"text"}
              placeholder="Age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
              style={{
                border: formik.errors.age ? "1px solid red" : "",
                border: formik.values.age !== "" ? "1px solid green" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mr-3">
          <input
            type={"submit"}
            disabled={Object.keys(formik.errors).length !== 0}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditParticipants;

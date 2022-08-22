import { useState } from "react";
import axios from "axios";
import { Button, notification } from "antd";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    case_no: "",
    implantee_name: "",
    feedback: "",
    improvement: "",
    suggestion: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${BACKEND_URL}/feedback`, {
        formData,
      })
      .then(() => {
        setLoading(false);
        notification.success({
          message: "Feedback Submitted",
          placement: "bottomLeft",
        });
      })
      .catch(() => {
        setLoading(false);
        notification.error({
          message: "Failed to Submit",
          placement: "bottomLeft",
        });
      });
  };

  return (
    <div className="feedback-form m-3 p-3 border-main">
      <h4 className="main-color">GIVE YOUR FEEDBACK HERE</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group m-3">
          <label htmlFor="exampleInputName1 my-1">
            Name<span className="main-color">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
            value={formData.name || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputEmail1">
            Email address<span className="main-color">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={formData.email || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputNumber1 my-1">
            Contact Number<span className="main-color">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            name="contact_no"
            type="number"
            className="form-control"
            id="exampleInputNumber1"
            value={formData.contact_no || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputNumber2 my-1">
            Case Number of the Cochlear Implantee
            <span className="main-color">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            name="case_no"
            type="number"
            className="form-control"
            id="exampleInputNumber2"
            value={formData.case_no || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleInputName2 my-1">
            Name of the Cochlear Implantee<span className="main-color">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            name="implantee_name"
            type="name"
            className="form-control"
            id="exampleInputName2"
            value={formData.implantee_name || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleFormControlTextarea1">
            Feedback about the surgery<span className="main-color">*</span>
          </label>
          <textarea
            required
            name="feedback"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formData.feedback || ""}
            onChange={handleChange || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleFormControlTextarea2">
            Childs Improvement in Communication
          </label>
          <textarea
            name="improvement"
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            value={formData.improvement || ""}
            onChange={handleChange || ""}
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="exampleFormControlTextarea2">
            Suggestion /Requirement
          </label>
          <textarea
            name="suggestion"
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="3"
            value={formData.suggestion || ""}
            onChange={handleChange || ""}
          />
        </div>
        <div className="text-center">
          {loading ? (
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Submitting...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

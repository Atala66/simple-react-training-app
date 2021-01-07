import React, { useState, useReducer } from "react";
import Title from "./title";
import form_styles from "../../styles/form_styles.scss";

const NewForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    },2000);
  };

  return (
    <div>
      <Title title="New Form" style="title"></Title>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <p>Pet Name:</p>
            <input className="form-control" name="name" />
          </label>
        </div>
        <div className="form-group">
          <label>
            <p>Pet Age:</p>
            <input className="form-control" name="age" />
          </label>
        </div>
        <input type="submit" value="submit" className="btn btn-primary" />
		{submitting && <div className="fake-submit">Submitting form .....</div>}
      </form>
    </div>
  );
};

export default NewForm;

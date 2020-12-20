import React from "react";
import propTypes from "prop-types";

const Person = ({
  person,
  fullName,
  handlePersonChange,
  handleDeletePerson,
}) => {
  return (
    <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
      <div className="card-body text-center">
        <p className="d-block">{fullName}</p>
        <div className="input-group justify-content-center">
          <input
            className="form-control w-50"
            type="text"
            placeholder={fullName}
            value={fullName}
            onChange={(e) => handlePersonChange(e, person.id)}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-sm btn-danger fa fa-trash"
              onClick={() => handleDeletePerson(person.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: propTypes.object.isRequired,
  fullName: propTypes.string.isRequired,
  handlePersonChange: propTypes.func.isRequired,
  handleDeletePerson: propTypes.func.isRequired,
};

export default Person;

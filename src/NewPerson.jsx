import React, { useContext } from "react";
import SimpleContext from "./context/SimpleContext";

const NewPerson = () => {
  const context = useContext(SimpleContext);

  return (
    <div className="m-2 p-2">
      <form
        className="form-inline justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-group w-25">
          <input
            type="text"
            placeholder="اسم بهم بده"
            className="form-control"
            value={context.person}
            onChange={(e) => context.setSinglePerson(e)}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              variant="success"
              size="sm"
              className="btn btn-sm  btn-success fa fa-plus-square"
              onClick={(e) => context.handleNewPerson(e)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPerson;

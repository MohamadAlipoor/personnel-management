import React, { useContext } from "react";
import SimpleContext from "./context/SimpleContext";

const Header = () => {
  const context = useContext(SimpleContext);

  let badgeStyle = "";
  if (context.persons.length >= 3) badgeStyle = "badge-success";
  if (context.persons.length <= 2) badgeStyle = "badge-warning";
  if (context.persons.length <= 1) badgeStyle = "badge-danger";

  return (
    <div>
      <div className="alert alert-info">
        <h1>مدیریت کننده اشخاص</h1>
      </div>

      <div className="alert alert-light">
        تعداد اشخاص{" "}
        <span className={`badge badge-pill ${badgeStyle}`}>
          {context.persons.length}
        </span>
        {"  "}نفر میباشد
      </div>
    </div>
  );
};

export default Header;

import React from "react";

const SeriesList = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((series) => (
          <li>{series.show.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesList;

import React from "react";

const ServicesDetalis = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <h1>hello services detalis page</h1>
      <p>id no. {id}</p>
    </div>
  );
};

export default ServicesDetalis;

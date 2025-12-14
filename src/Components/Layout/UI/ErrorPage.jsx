import React, { use } from 'react'
import { NavLink, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error=useRouteError();
    //this is the new hooks in react router dom v6.4
    console.log(error);
  return (
    <div>
      <h1> this is the error page this is most easy way to create this page </h1>
      {error.data && <p>{error.data}</p>}
       <NavLink to='/'> <button>go Home </button></NavLink>
    </div>
  )
}

export default ErrorPage

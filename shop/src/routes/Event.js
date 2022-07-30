import { Outlet } from "react-router-dom";

export default function Event() {
  return (
    <>
      <h2>this is event </h2>
      <Outlet></Outlet>
    </>
  );
}

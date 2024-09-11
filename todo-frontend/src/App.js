import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import Form from "./components/Form";

const Heading = () => {
  return <h1 className="text-center text-3xl pt-5">USER LIST</h1>;
};
const DashBoard = () => {
  return (
    <>
      <div className="">
        <div className="w-2/3 mx-auto">
          <Link to={"/add"}>
            <button className="m-2 p-2 w-1/12 ml-[39px] bg-green-300">
              Add
            </button>
          </Link>
        </div>
        <Heading />
        <TaskList />
      </div>
    </>
  );
};

let root = ReactDom.createRoot(document.getElementById("root"));

const AppLayOut = () => {
  return <Outlet />;
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <span>error</span>,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/add",
        element: <Form />,
      },
      {
        path: "/update/:id",
        element: <Modal />,
      },
    ],
  },
]);

// root.render(<AppLayOut />);
root.render(<RouterProvider router={appRouter} />);

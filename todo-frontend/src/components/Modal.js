import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  let [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function check() {
      const pathname = window.location.pathname.split("/");
      console.log("==============>>>>", pathname[pathname.length - 1]);
      const id = pathname[pathname.length - 1];
      let user = await getUserByID(id);
      setUserData(user);
      console.log("userData==========>>", user);
    }
    check();
  }, []);

  async function getUserByID(id) {
    const rawResponse = await fetch("http://localhost:5000/user/getByID", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
      // body: data,
    });
    console.log(rawResponse);
    const content = await rawResponse.json();
    return content;
  }

  async function updateUser(data) {
    console.log(data);
    const rawResponse = await fetch("http://localhost:5000/user/update", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: data,
    });
    console.log(rawResponse);
    const content = await rawResponse.json();

    if (content.status) alert("User Updated Successfully");
    navigate("/");
  }

  return (
    <div className="w-1/2 mx-auto">
      <div className="bg-[#e2ffde] m-2 p-2">
        <label>User Name</label>
        <br />
        <input
          placeholder="name"
          className="h-14 w-[99.99%]"
          type="text"
          id="username"
          name="task-heading"
          defaultValue={userData.name || ""}
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          placeholder="email"
          className="w-[99.99%] h-14"
          id="email"
          type="text"
          name="task-body"
          defaultValue={userData.email || ""}
        />
        <br />
        <br />
        <label>Phone</label>
        <br />
        <input
          placeholder="Phone"
          className="w-[99.99%] h-14"
          id="phone"
          type="text"
          name="task-body"
          defaultValue={userData.phone || ""}
        />
        <button
          onClick={() => {
            let i = userData._id;
            let u = document.getElementById("username").value.trim();
            let e = document.getElementById("email").value.trim();
            let p = document.getElementById("phone").value.trim();


            let phoneNum = p.replace(/\D/g,'');
            let email = String(e).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            
            if (!u || !e || !p) alert("Field must have some value");
            else if(phoneNum.length != 10)alert("Phone must have 10 numner");
            else if(!email) alert("User must have proper email");
            else updateUser({ _id: i, name: u, email: e, phone: phoneNum });
          }}
          className="m-2 p-2 bg-green-300"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Modal;

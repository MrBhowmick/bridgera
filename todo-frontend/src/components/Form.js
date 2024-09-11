import { Link } from "react-router-dom";

const Form = () => {
  async function sendData(data) {
    console.log(data);
    const rawResponse = await fetch("http://localhost:5000/user/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // body: data,
    });
    console.log(rawResponse);
    const content = await rawResponse.json();

    if(content.status) alert('User Added Successfully')
  }
  return (
    <div className="w-1/2 mx-auto">
      <Link to={"/"}>
        <button className="m-2 p-2 bg-green-300">Task List</button>
      </Link>
      <div className="bg-[#e2ffde] m-2 p-2">
        <label>User Name</label>
        <br />
        <input
          placeholder="full name"
          className="h-14 w-[99.99%]"
          type="text"
          id="username"
          name="task-heading"
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
        />
        <button
          onClick={() => {
            let u = document.getElementById("username").value.trim();
            let e = document.getElementById("email").value.trim();
            let p = document.getElementById("phone").value.trim();
            let phoneNum = p.replace(/\D/g,'');
            let email = String(e).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            
            if (!u || !e || !p) alert("Field must have some value");
            else if(phoneNum.length != 10)alert("Phone must have 10 numner");
            else if(!email) alert("User must have proper email");
            else sendData({ name: u, email: e, phone: phoneNum});
          }}
          className="m-2 p-2 bg-green-300"
        >
          Submit
        </button>
      </div>

    </div>
  );
};

export default Form;

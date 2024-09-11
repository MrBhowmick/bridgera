import {
  Link,
} from "react-router-dom";

const Task = (props) => {
  console.log(props);
  const { _id, name, email, phone } = props.taskData;

  async function deleteTask(id) {
    const rawResponse = await fetch("http://localhost:5000/user/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
      // body: data,
    });
    console.log(rawResponse);
    const content = await rawResponse.json();
    console.log(content);
    if (content.status) {
      document.getElementById(_id).remove();
    }
  }
  
  return (
    <>
      <div id={_id} className="mx-auto w-3/4">
        <div className="text-center">
          <h2 className="bg-[#C4F1DB] text-2xl p-2 pb-[11px] w-3/4 inline-block">
            {name}
          </h2>
          <Link to={"/update/"+_id}>
          <button className="w-1/12 inline-block bg-blue-300 pt-[5px] h-[51px]">
            Update
          </button>
          </Link>

          <button
            onClick={() => {
              deleteTask(_id);
            }}
            className="w-1/12 inline-block bg-red-300 pt-[5px] h-[51px]"
          >
            Delete
          </button>
          

          <div className="p-2 w-3/4 text-left mx-auto">
            <blockquote className="border-s-4 border-gray-300">
              <p className="italic font-medium ml-2">Email: {email}</p>
            </blockquote>
            <blockquote className="border-s-4 border-gray-300">
              <p className="italic font-medium ml-2">Phone: {phone}</p>
            </blockquote>
          </div>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </div>
    </>
  );
};

export default Task;

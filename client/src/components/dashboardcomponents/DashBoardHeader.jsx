import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useUserStore } from "../../state/store";

const DashBoardHeader = () => {
  const token = useUserStore((state) => state.token);
  const user = useUserStore((state) => state.user);
  const [showModal, setModal] = useState(false);

  const [file, setFile] = useState({file: ""})

  const changeHandler = (e) => {
    setFile({ ...file, [e.target.name]: e.target.files[0] });
    console.log(e.target.files[0]);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(`/users/avatar/${user._id}`, formData, options)
      .then((result) => console.log("Successful: ", result))
      .catch((err) => console.log("Error: ", err));
  };
  
  return (
    <>
      <div className="bg-dashboard-image1a bg-cover w-screen pt-72 h-full relative"></div>
      <button
        onClick={() => setModal(true)}
        className="bg-recipeRed-800 bg-opacity-69 p-2 text-white text-sm font-bold ml-80 absolute top-12 right-1 focus:outline-none"
      >
        Hire Me
      </button>
      <Modal isOpen={showModal} contentLabel="Hire A Cook/Chef">
        <label for="phoneNumber" className="w-full text-base font-bold">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className="mx-10 focus:outline-none bg-gray-100 w-1/2"
          placeholder="Phone Number"
        />
        <br />
        <label for="Message" className="w-1/2 focus text-base font-bold">
          Message
        </label>
        <textarea className="w-1/2 mx-10 focus:outline-none bg-gray-100 mt-20"></textarea>
        <div className="flex mt-10 text-sm">
          <button
            onClick={() => setModal(false)}
            className="mr-10 focus:outline-none text-recipeRed-800 font-bold p-2 rounded border-2 border-recipeRed-800"
          >
            Cancle
          </button>
          <button
            onClick={() => setModal(false)}
            className="focus:outline-none text-white font-bold bg-recipeRed-800 bg-opacity-60 p-2 rounded"
          >
            Send Message
          </button>
        </div>
      </Modal>
      <form>
        <img
          src="https://placeimg.com/240/240/people"
          alt="big"
          className="w-40 h-40 rounded-full ml-12 absolute top-56 left-32"
        />
        {/* <input type="file" accept="image/*" onChange={changeHandler} /> */}
      </form>
    </>
  );
};

export default DashBoardHeader;

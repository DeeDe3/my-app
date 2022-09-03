import { IProps } from "./interfaces";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props: IProps) {
  const [showModal, setShowModal] = useState(false);
  function deleteHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;

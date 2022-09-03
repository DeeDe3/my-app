import { IPropsCancel } from "./interfaces";

export default function Modal(props: IPropsCancel) {
  //eslint-disable-next-line @typescript-eslint/no-unused-expressions
  function cancelHandler() {
    props.onCancel();
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-expressions
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

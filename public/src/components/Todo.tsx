import { IProps } from "./interfaces";

function Todo(props: IProps) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;

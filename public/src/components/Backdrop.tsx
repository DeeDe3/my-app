import { IProps } from "./interfaces";

export default function Backdrop(props: IProps) {
  return <div className="backdrop" onClick={props.onClick} />;
}

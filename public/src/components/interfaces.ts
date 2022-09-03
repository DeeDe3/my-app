export interface IProps {
  title?: string;
  onClick?: () => void;
}

export interface IPropsCancel {
  onCancel: () => void;
  onConfirm: () => void;
}

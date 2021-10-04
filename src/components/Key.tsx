import { FC } from "react";
import clsx from "clsx";
import { NoteType } from "../domain/notes";
import styles from '../stylesheets/Key.module.css';
import { usePressObserver } from "./observer/PressObserver";

type PressCallback = () => void

type KeyProps = {
  type: NoteType
  label: string
  disabled?: boolean
  onUp: PressCallback
  onDown: PressCallback
}

export const Key: FC<KeyProps> = (props) => {
  const { type, label, onUp, onDown, ...rest } = props;
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp
  });

  return (
    <button
      type="button"
      className={clsx(styles.key, styles[type], pressed && 'is-pressed')}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {label}
    </button>
  );
};
import { FC } from "react";
import { selectKey } from "../domain/keyboard";
import { notes, MidiValue } from "../domain/notes";
import { Key } from "./Key";
import styles from '../stylesheets/Keyboard.module.css';

export type KeyboardProps = {
  loading: boolean
  play: (note: MidiValue) => Promise<void>
  stop: (note: MidiValue) => Promise<void>
}

const Keyboard: FC<KeyboardProps> = ({ loading, play, stop }) => (
  <div className={styles.keyboard}>
    {notes.map(({ midi, type, index, octave }) => {
      const label = selectKey(octave, index);
      return (
        <Key
          key={midi}
          type={type}
          label={label}
          disabled={loading}
          onDown={() => play(midi)}
          onUp={() => stop(midi)}
        />
      )
    })}
  </div>
);

export default Keyboard;
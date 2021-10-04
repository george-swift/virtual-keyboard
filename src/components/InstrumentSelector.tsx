import { ChangeEvent } from "react";
import { InstrumentName } from "soundfont-player";
import { useInstrument } from "../context";
import { options } from './options';
import styles from '../stylesheets/InstrumentSelector.module.css';

export const InstrumentSelector = (): JSX.Element => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) => setInstrument(target.value as InstrumentName);

  return (
    <select className={styles.instrument} onChange={updateValue} value={instrument}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
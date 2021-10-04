import { InstrumentContextProvider } from "../context/Provider";
import { InstrumentSelector } from "./InstrumentSelector";
import { KeyboardWithInstrument } from "./Instrument";

export const Playground = (): JSX.Element => (
  <InstrumentContextProvider>
    <div className="playground">
      <KeyboardWithInstrument />
      <InstrumentSelector />
    </div>
  </InstrumentContextProvider>
)
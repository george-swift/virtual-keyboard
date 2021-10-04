import { useEffect } from "react";
import { useInstrument } from "../context";
import { useAudioContext } from "../audioContext";
import { useSoundFont } from "../adapters/useSoundFont";
import Keyboard from "./Keyboard";

export const KeyboardWithInstrument = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()
  const { loading, current, play, stop, load } = useSoundFont({ AudioContext })

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument)
  }, [load, loading, current, instrument]);


  return <Keyboard loading={loading} play={play} stop={stop} />
}
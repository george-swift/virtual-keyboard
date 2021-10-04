import { Playground } from './Playground';
import { useAudioContext } from '../audioContext';
import NoAudio from './NoAudio';

export const Main = (): JSX.Element => {
  const AudioContext = useAudioContext();
  return AudioContext ? <Playground /> : <NoAudio />
}
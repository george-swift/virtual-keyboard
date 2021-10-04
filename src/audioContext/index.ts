import { useRef } from 'react';
import { Optional } from '../domain/audio';
import { accessContext } from '../domain/audio';

export const useAudioContext = (): Optional<AudioContextType> => {
  const AudioCtx = useRef(accessContext());
  return AudioCtx.current
}

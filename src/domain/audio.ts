export type Optional<TEntity> = TEntity | null

export const accessContext = (): Optional<AudioContextType> => window.AudioContext || window.webkitAudioContext || null

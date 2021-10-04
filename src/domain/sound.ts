import { InstrumentName, Player } from "soundfont-player";
import { Optional } from "./audio";
import { MidiValue } from "./notes";

export type AudioNodesRegistry = Record<MidiValue, Optional<Player>>
export const DEFAULT_INSTRUMENT: InstrumentName = 'acoustic_grand_piano'

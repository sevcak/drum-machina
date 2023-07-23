import DrumPad from "./DrumPad";

const DrumMachine = () => {
  return (
    <div
      id='drum-machine'
      className='text-3xl text-center bg-zinc-700 p-4 rounded-md border-b-8 border-zinc-900 shadow-2xl'
    >
      {/* Drum pads */}
      <div className='grid grid-cols-3 gap-2 w-64 h-64'>
        <DrumPad trigger='Q' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='W' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='E' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='A' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='S' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='D' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='Z' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='X' sound='/audio/Heater-1.mp3' />
        <DrumPad trigger='C' sound='/audio/Heater-1.mp3' />
      </div>

    </div>
  );
}

export default DrumMachine;
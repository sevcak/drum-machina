import DrumPad from "./DrumPad";

const DrumMachine = () => {
  return (
    <div id='drum-machine' className='text-3xl text-center w-full grid grid-cols-3'>
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
      <DrumPad />
    </div>
  );
}

export default DrumMachine;
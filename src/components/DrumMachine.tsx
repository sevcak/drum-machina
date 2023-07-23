import DrumPad from "./DrumPad";

const DrumMachine = () => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    const drumPadAudio = document.getElementById(event.key.toUpperCase()) as HTMLAudioElement | null;

    if (drumPadAudio) {
      const drumPad = document.getElementById(`${event.key.toUpperCase()}-button`);
      const activeClasses = ['brightness-75', 'hover:translate-y-[2px]', 'border-t-2', 'shadow-inner'];
      
      drumPadAudio.currentTime = 0;
      drumPadAudio.play();

      drumPad!.classList.add(...activeClasses);

      setTimeout(() => {
        drumPad!.classList.remove(...activeClasses);
      }, 200);
    }
  }

  return (
    <div
      id='drum-machine'
      className='text-3xl text-center bg-zinc-700 p-4 rounded-md border-b-8 border-zinc-900 shadow-2xl'
      onKeyDown={handleKeyPress}
    >
      {/* Drum pads */}
      <div className='grid grid-cols-3 gap-2 w-64 h-64'>
        <DrumPad trigger='Q' sound='./audio/Heater-1.mp3' />
        <DrumPad trigger='W' sound='./audio/Heater-2.mp3' />
        <DrumPad trigger='E' sound='./audio/Heater-3.mp3' />
        <DrumPad trigger='A' sound='./audio/Heater-4.mp3' />
        <DrumPad trigger='S' sound='./audio/Clap.mp3' />
        <DrumPad trigger='D' sound='./audio/Open-HH.mp3' />
        <DrumPad trigger='Z' sound='./audio/Kick_n_Hat.mp3' />
        <DrumPad trigger='X' sound='./audio/Kick.mp3' />
        <DrumPad trigger='C' sound='./audio/Closed-HH.mp3' />
      </div>

    </div>
  );
}

export default DrumMachine;
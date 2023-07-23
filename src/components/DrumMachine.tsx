import { drumPads } from "./drumPads";
import DrumPad from "./DrumPad";

const DrumMachine = () => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    const trigger = event.key.toUpperCase()
    const drumPadAudio = document.getElementById(trigger) as HTMLAudioElement | null;

    if (drumPadAudio) {
      const drumPad = document.getElementById(`${trigger}-button`);
      const activeClasses = ['brightness-75', 'hover:translate-y-[2px]', 'border-t-2', 'shadow-inner'];
      const display = document.getElementById('display');
      
      drumPadAudio.currentTime = 0;
      drumPadAudio.play();

      drumPad!.classList.add(...activeClasses);
      setTimeout(() => {
        drumPad!.classList.remove(...activeClasses);
      }, 200);

      display!.innerText = drumPads.find(pad => pad.trigger === trigger)!['name'];
    }
  }

  return (
    <div
      id='drum-machine'
      className='
        flex flex-col gap-4
        text-3xl text-center bg-zinc-700 p-4 rounded-md 
        border-b-8 border-zinc-900 shadow-2xl
      '
      onKeyDown={handleKeyPress}
    >
      <div className='w-full bg-slate-300 h-16 rounded shadow-inner flex flex-col items-center justify-center'>
        <div id='display'>
          
        </div>
      </div>
      {/* Drum pads */}
      <div className='grid grid-cols-3 gap-2 w-64 h-64'>
        {/* using Array.map() doesn't pass the freeCodeCamp tests for some reason */}
        {/*
          drumPads.map(drumPad => {
            return <DrumPad name={drumPad.name} trigger={drumPad.trigger} sound={drumPad.audio} />
          })
        */}
        <DrumPad name='Heater 1' trigger='Q' sound='./audio/Heater-1.mp3' />
        <DrumPad name='Heater 2' trigger='W' sound='./audio/Heater-2.mp3' />
        <DrumPad name='Heater 3' trigger='E' sound='./audio/Heater-3.mp3' />
        <DrumPad name='Heater 4' trigger='A' sound='./audio/Heater-4.mp3' />
        <DrumPad name='Clap' trigger='S' sound='./audio/Clap.mp3' />
        <DrumPad name='Open HH' trigger='D' sound='./audio/Open-HH.mp3' />
        <DrumPad name='Kick_n_Hat' trigger='Z' sound='./audio/Kick_n_Hat.mp3' />
        <DrumPad name='Kick' trigger='X' sound='./audio/Kick.mp3' />
        <DrumPad name='Closed HH' trigger='C' sound='./audio/Closed-HH.mp3' />
      </div>
    </div>
  );
}

export default DrumMachine;
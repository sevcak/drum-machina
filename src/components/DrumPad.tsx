import { useEffect, useState } from 'react';

interface DrumPad {
  trigger: string;
  sound: string;
}

const DrumPad = (props: DrumPad) => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  
  const playAudio = () => {
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
  
  useEffect(() => {
    setAudioElement(document.getElementById(props.trigger) as HTMLAudioElement)
  }, [props.trigger])
  

  return (
    <button
      id={`${props.trigger}-button`}
      className='
        drum-pad p-2 bg-zinc-500 text-gray-100 rounded
        border-b-2 border-zinc-800 shadow-lg
        hover:border-b-0 hover:translate-y-px hover:brightness-90
        active:brightness-75 active:hover:translate-y-[2px] active:border-t-2 active:shadow-inner
        focus-visible:outline-0
      '
      onMouseDownCapture={() => playAudio()}
    >
      <audio id={props.trigger} className='clip' src={props.sound}></audio>
      {props.trigger}
    </button>
  );
};

export default DrumPad;

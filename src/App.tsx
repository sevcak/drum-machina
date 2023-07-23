import DrumMachine from "./components/DrumMachine";

const App = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8 gap-4'>
      <DrumMachine />
      <p className='text-gray-200'>coded by <a href='https://github.com/sevcak' className='font-semibold hover:underline'>sevcak</a></p>
    </div>
  )
}

export default App;

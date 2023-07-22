import DrumMachine from "./components/DrumMachine";

const App = () => {
  return (
    <div className='flex flex-col items-center w-screen'>
      <DrumMachine />
      {/* Credit label */}
      <iframe src="https://sevcak.github.io/sevcak-credit/"></iframe>
    </div>
  )
}

export default App;

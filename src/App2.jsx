import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/useRecorder";
 import "./App2.css";

 function App2() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <section className="voice-recorder">
      <h1 className="title">Voice Recorder</h1>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
    </section>
  );
}

export default App2;
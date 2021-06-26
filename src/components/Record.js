import {useState} from 'react';
import {ReactMic} from 'react-mic';
const RecordApp = () => {
  const init_data = {
    record:false
  }
  const [state,setState] = useState(init_data)
  const startRecording = () => {
   setState({record:true})
  }
  const stopRecording = () => {
   setState({record:false})
  }
  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
  }
  return (
   <>
     <ReactMic
       record={state.record}
       className="sound-wave"
       onStop={onStop}
       onData={onData}
    />
    <div className="container">
      <button onClick={startRecording} type="button" className="btn btn-primary">Start</button>
      <button onClick={stopRecording} type="button" className="btn btn-danger btn-stop"> Stop</button>
    </div>
   </>
  )
}
export default RecordApp
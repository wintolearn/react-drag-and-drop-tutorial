import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from 'react-dnd-touch-backend'
import DragDrop from "./components/DragDrop";

function App() {
  return (
    <DndProvider backend={TouchBackend}>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}

export default App;

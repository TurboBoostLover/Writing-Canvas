import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  const mouseLocation = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(20);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(0.1);

  // Initialization when the component
  // mounts for the first time
  useEffect(() => {
    const canvas = canvasRef.current;
    const mouse = canvas.getContext("2d");
    mouse.lineCap = "round";
    mouse.lineJoin = "round";
    mouse.globalAlpha = lineOpacity;
    mouse.strokeStyle = lineColor;
    mouse.lineWidth = lineWidth;
    mouseLocation.current = mouse;
  }, [lineColor, lineOpacity, lineWidth]);

  // Function for starting the drawing
  const startDrawing = (event) => {
    mouseLocation.current.beginPath();
    mouseLocation.current.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  // Function for ending the drawing
  const endDrawing = () => {
    mouseLocation.current.closePath();
    setIsDrawing(false);
  };

  // Function to keep drawing 
  const draw = (event) => {
    if (!isDrawing) {
      return;
    }
    mouseLocation.current.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    mouseLocation.current.stroke();
  };

  // Function to clear the canvas
  const wipeBoard = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <h1 className="Title">Paint App</h1>
        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
          wipeBoard={wipeBoard}
        />
      <div className="draw-area">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={`2200px`}
          height={`1000px`}
        />
      </div>
    </div>
  );
}

export default App;

import React, { Suspense, useMemo, useState, useRef, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import RubiksCubeModel from "./RubiksCubeModel";
import "./App.css";
import { useLoader } from "react-three-fiber";
import { useMouseHandlers } from "./mouseEventHandlers";

const RubiksCube = () => {
  const { scene } = useLoader(GLTFLoader, "/rubikcube.gltf");
  const manuallyTriggerPointerEventsRef = useRef();
  const [displayText, setDisplayText] = useState(
    "Wait... Please stay in this window"
  );
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [drag, setDrag] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [showDarkOverlay, setShowDarkOverlay] = useState(null);
  const [time, settime] = useState(null);
  const {
    handleMouseDown,
    handleMouseUp,
    set,
    xyzdirection,
    direction,
    finish,
  } = useMouseHandlers();
  const generateNodesSubset = useMemo(() => {
    const subsets = [];

    for (let i = 0; i <= 26; i++) {
      subsets.push(scene.children.slice(i, i + 1));
    }
    return subsets;
  }, [scene]);
  const handleDragChange = (newDrag) => {
    setDrag(newDrag);
  };

  const StartClick = async () => {
    setButtonClicked(true);
    await manuallyTriggerPointerEventsRef.current();
    setDisplayText("Go Ahead to Solve...");
    startTimer();
  };

  const startTimer = () => {
    setTimerRunning(true);
    const startTime = performance.now();
    const intervalId = setInterval(() => {
      const elapsedSeconds = Math.floor((performance.now() - startTime) / 1000);
      setTimer(elapsedSeconds);
    }, 1000);
    setTimerIntervalId(intervalId);
  };

  useEffect(() => {
    if (displayText === "Go Ahead to Solve...") {
      startTimer();
    } else {
      setTimer(0);
      clearInterval(timerIntervalId);
    }
  }, [displayText]);

  useEffect(() => {
    if (displayText === "Go Ahead to Solve..."){
      console.log("finish" + finish);
      if (finish === 1) {
        finishNavigate();
      }
    }

  }, [finish]);
  
  const finishNavigate = async () => {
    clearInterval(timerIntervalId);
    settime(formatTime(timer));
    console.log(time);
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("game over");
    setShowDarkOverlay(true);
  };

  const handleStartAgain = () => {
    window.location.reload();
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    return formattedTime;
  };

  return (
    <>
      {!showDarkOverlay && (
        <p className="timer">
          {displayText === "Go Ahead to Solve..." && (
            <span>({formatTime(timer)})</span>
          )}
        </p>
      )}
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          {generateNodesSubset.map((nodesSubset, index) => (
            <RubiksCubeModel
              index={index}
              key={index}
              nodesSubset={nodesSubset}
              drag={drag}
              onDragChange={handleDragChange}
              mouseDownPlane={handleMouseDown}
              mouseUpPlane={handleMouseUp}
              set={set}
              xyzdirection={xyzdirection}
              direction={direction}
              manuallyTriggerPointerEventsRef={manuallyTriggerPointerEventsRef}
              finish={finish}
              buttonClicked={buttonClicked}
              timerRunning={timerRunning}
            />
          ))}
        </Suspense>
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      {!buttonClicked && (
        <button className="button" onClick={StartClick}>
          Start
        </button>
      )}
      {buttonClicked && !showDarkOverlay && (
        <p className="wait">{displayText}</p>
      )}

      {showDarkOverlay && (
        <div className="dark-overlay">
          <div>
            <p className="congrat">Congratulations!!!</p>
            <p className="time">Time You Take : {time}</p>
            <button className="button" onClick={handleStartAgain}>
              Start Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default RubiksCube;

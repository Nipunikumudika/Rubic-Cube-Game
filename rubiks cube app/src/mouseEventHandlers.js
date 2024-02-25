// mouseEventHandlers.js
import {  useState } from "react";
const set1=[1,4,7,10,13,16,30,33,36,39,42,45];
const set2=[2,5,8,11,14,17,29,32,35,38,41,44];
const set3=[3,6,9,12,15,18,28,31,34,37,41,43];
const set4=[1,2,3,48,51,54,34,35,36,19,22,25];
const set5=[4,5,6,47,50,53,31,32,33,20,23,26];
const set6=[7,8,9,46,49,52,28,29,30,21,24,27];
const set7=[10,11,12,46,47,48,43,44,45,25,26,27];
const set8=[13,14,15,49,50,51,40,41,42,22,23,24];
const set9=[16,17,18,52,53,54,37,38,39,19,20,21];


const cubeset1=[24,15,6,3,0,9,18,21,12];
const cubeset2=[25,16,7,4,1,10,19,22,13];
const cubeset3=[26,17,8,5,2,11,20,23,14];
const cubeset4=[24,25,26,23,20,19,18,21,22];//
const cubeset5=[15,16,17,14,11,10,9,12,13];//
const cubeset6=[6,7,8,5,2,1,0,3,4];//
const cubeset7=[6,7,8,17,26,25,24,15,16];
const cubeset8=[3,4,5,14,23,22,21,12,13];
const cubeset9=[0,1,2,11,20,19,18,9,10];


let set;
const rubiksCubeMatrixWithIdentifiers = [
    //imitialcubeno,initialplaneno,initialPlanename,newcubeno,newcubeplane,newplanename
    // 1
    [
      [[24,1, "Cube024_3",24,1,"Cube024_3"], [25,2, "Cube025_3",25,2,"Cube025_3"], [26,3, "Cube026_3",26,3, "Cube026_3"]],
      [[15,4, "Cube015_2",15,15, "Cube015_2"], [16,5, "Cube016_2",16,5,"Cube016_2"], [17,6, "Cube017_2",17,6,"Cube017_2"]],
      [[6,7, "Cube006_2",6,7,"Cube006_2"], [7,8, "Cube007_2",7,8, "Cube007_2"], [8,9, "Cube008_2",8,9,"Cube008_2"]],
    ],
    // 2
    [
      [[6,10, "Cube006_4",6,10, "Cube006_4"], [7,11, "Cube007_3",7,11,"Cube007_3"], [8,12, "Cube008_4",8,12, "Cube008_4"]],
      [[3,13, "Cube003_3",3,13, "Cube003_3"], [4,14, "Cube004_2",4,14,"Cube004_2"], [5,15, "Cube005_3",5,15,"Cube005_3"]],
      [[0,16, "Cube000_3",0,16,"Cube000_3"], [1,17, "Cube001_3",1,17,"Cube001_3"], [2,18, "Cube002_4",2,18,"Cube002_4"]],
    ],
    // 3
    [
      [[24,25, "Cube024_4",24,25, "Cube024_4"], [15,26, "Cube015_3",15,26,"Cube015_3"], [6,27, "Cube006_3",6,27,"Cube006_3"]],
      [[21,22, "Cube021_3",21,22,"Cube021_3"], [12,23, "Cube012_2",12,23,"Cube012_2"], [3,24, "Cube003_2",5,24,"Cube003_2"]],
      [[18,19, "Cube018_4",18,19, "Cube018_4"], [9,20, "Cube009_3",9,20,"Cube009_3"], [0,21, "Cube000_2",0,21,"Cube000_2"]],
    ],
    // 4
    [
      [[0,30, "Cube000_1",0,30,"Cube000_1"], [1,29, "Cube001_2",1,29,"Cube001_2"], [2,28, "Cube002_3",2,28, "Cube002_3"]],
      [[9,33, "Cube009_2",9,33, "Cube009_2"], [10,32, "Cube010_2",10,32, "Cube010_2"], [11,31, "Cube011_3",11,31, "Cube011_3"]],
      [[18,36, "Cube018_3",18,36,"Cube018_3"], [19,35, "Cube019_3",19,35, "Cube019_3"], [20,34, "Cube020_4",20,34,"Cube020_4"]],
    ],
    // 5
    [
      [[26,43, "Cube026_2",26,43, "Cube026_2"], [25,44, "Cube025_2",25,44,"Cube025_2"], [24,45, "Cube024_2",24,45,"Cube024_2"]],
      [[23,40, "Cube023_2",23,40, "Cube023_2"], [22,41, "Cube022_2",22,41, "Cube022_2"], [21,42, "Cube021_2",21,42,"Cube021_2"]],
      [[20,37, "Cube020_2",20,37, "Cube020_2"], [19,38, "Cube019_2",19,38, "Cube019_2"], [18,39, "Cube018_2",18,39,"Cube018_2"]],
    ],
    // 6
    [
      [[8,46, "Cube008_3",8,46, "Cube008_3"], [17,47, "Cube017_3",17,47, "Cube017_3"], [26,48, "Cube026_4",26,48,"Cube026_4"]],
      [[5,49, "Cube005_2",5,49, "Cube005_2"], [14,50, "Cube014_2",14,50,"Cube014_2"], [23,51, "Cube023_3",23,51, "Cube023_3"]],
      [[2,52, "Cube002_1",2,52,"Cube002_1"], [11,53, "Cube011_2",11,53, "Cube011_2"], [20,54, "Cube020_3",20,54,"Cube020_3"]],
    ],
];



export const useMouseHandlers = () => {
  const [downnew, setDownNew] = useState(null);
  const [downnewCube, setDownNewCube] = useState(null);
  const [setrot, setSetrot] = useState(null); 
  const [xyzdirection, setxyzdirection] = useState(null); 
  const [direction, setdirection] = useState(null); 
  const handleMouseDown = (down) => {
    setDownNew(down);
  };

  const handleMouseDownCube = (down) => {
    setDownNewCube(down);
  };

  const handleMouseUpCube = (up) => {
  };



  const handleMouseUp = (up) => {

let first,end;
    if (downnew) {
        const nameToSearchDown = downnew;
        console.log(nameToSearchDown);
        const nameToSearchUp = up;
        for (let i = 0; i < rubiksCubeMatrixWithIdentifiers.length; i++) {
          for (let j = 0; j < rubiksCubeMatrixWithIdentifiers[i].length; j++) {
            for (let k = 0; k < rubiksCubeMatrixWithIdentifiers[i][j].length; k++) {
              const [cube,plane, name,newcube,newPlane,newname] = rubiksCubeMatrixWithIdentifiers[i][j][k];
              if (name === nameToSearchDown) {
                console.log(`Found corresponding number Down: ${plane}  ${cube}`);
                first = plane;
              }
              if (name === nameToSearchUp) {
                console.log(`Found corresponding number Up: ${plane} ${cube}`);
                end = plane;
                
              }
              const isInSet = (set) => set.includes(first) && set.includes(end);
                if (isInSet(set1)) {
                    // console.log("Both first and end are present in set1");
                    set=cubeset1;
                    setxyzdirection("x");
                  } else if (isInSet(set2)) {
                    // console.log("Both first and end are present in set2");
                    set=cubeset2;
                    setxyzdirection("x");
                  } else if (isInSet(set3)) {
                    // console.log("Both first and end are present in set3");
                    set=cubeset3;
                    setxyzdirection("x");
                  } else if (isInSet(set4)) {
                    // console.log("Both first and end are present in set4");
                    set=cubeset4;
                    setxyzdirection("z");
                  } else if (isInSet(set5)) {
                    // console.log("Both first and end are present in set5");
                    set=cubeset5;
                    setxyzdirection("z");
                  } else if (isInSet(set6)) {
                    // console.log("Both first and end are present in set6");
                    set=cubeset6;
                    setxyzdirection("z");
                  } else if (isInSet(set7)) {
                    // console.log("Both first and end are present in set7");
                    set=cubeset7;
                    setxyzdirection("y");
                  } else if (isInSet(set8)) {
                    // console.log("Both first and end are present in set8");
                    set=cubeset8;
                    setxyzdirection("y");
                  } else if (isInSet(set9)) {
                    // console.log("Both first and end are present in set9");
                    set=cubeset9;
                    setxyzdirection("y");
                  } else {
                    // console.log("First and/or end are not present in any set");
                  }

                  setSetrot(set);
                  if(set===cubeset1||set===cubeset2||set===cubeset3||set===cubeset7||set===cubeset8||set===cubeset9){
                    if(end>first){
                      setdirection("c");
                  }else if(end<first){
                      setdirection("a");
                  }
                  }else if(set===cubeset4||set===cubeset5||set===cubeset6){
                    if(end<first){
                      setdirection("c");
                  }else if(end>first){
                      setdirection("a");
                  }
                  }
            }
          }
        }
    }


  };
console.log(setrot);
  return { handleMouseDown, handleMouseUp,handleMouseDownCube,handleMouseUpCube, set: setrot ,xyzdirection:xyzdirection,direction:direction};
};

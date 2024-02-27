
import {  useState } from "react";
// const set1=[1,4,7,10,13,16,30,33,36,39,42,45];
// const set2=[2,5,8,11,14,17,29,32,35,38,41,44];
// const set3=[3,6,9,12,15,18,28,31,34,37,40,43];
// const set4=[1,2,3,48,51,54,34,35,36,19,22,25];
// const set5=[4,5,6,47,50,53,31,32,33,20,23,26];
// const set6=[7,8,9,46,49,52,28,29,30,21,24,27];
// const set7=[10,11,12,46,47,48,43,44,45,25,26,27];
// const set8=[13,14,15,49,50,51,40,41,42,22,23,24];
// const set9=[16,17,18,52,53,54,37,38,39,19,20,21];


// let setcubePlane=[1,4,7,10,13,16,30,33,36,39,42,45,
//             2,5,8,11,14,17,29,32,35,38,41,44,
//             3,6,9,12,15,18,28,31,34,37,40,43,
//             48,51,54,19,22,25,47,50,53,20,23,26,46,49,52,21,24,27];


//plane no,cube no,colour

let setcubePlane=[[1,24,"Cube024_3"],[4,15,"Cube015_2"],[7,6,"Cube006_2"],[10,6,"Cube006_4"],[13,3,"Cube003_3"],[16,0,"Cube000_3"],[30,0,"Cube000_1"],[33,9,"Cube009_2"],[36,18,"Cube018_3"],[39,18,"Cube018_2"],[42,21,"Cube021_2"],[45,24,"Cube024_2"],
            [2,25,"Cube025_3"],[5,16,"Cube016_2"],[8,7,"Cube007_2"],[11,7,"Cube007_3"],[14,4,"Cube004_2"],[17,1,"Cube001_3"],[29,1,"Cube001_2"],[32,10,"Cube010_2"],[35,19, "Cube019_3"],[38,19,"Cube019_2"],[41,22,"Cube022_2"],[44,25,"Cube025_2"],
            [3,26,"Cube026_3"],[6,17,"Cube017_2"],[9,8,"Cube008_2"],[12,8,"Cube008_4"],[15,5,"Cube005_3"],[18,2,"Cube002_4"],[28,2,"Cube002_3"],[31,11,"Cube011_3"],[34,20,"Cube020_4"],[37,20,"Cube020_2"],[40,23,"Cube023_2"],[43,26,"Cube026_2"],
            [48,26,"Cube026_4"],[51,23,"Cube023_3"],[54,20,"Cube020_3"],[19,18,"Cube018_4"],[22,21,"Cube021_3"],[25,24,"Cube024_4"],[47,17,"Cube017_3"],[50,14,"Cube014_2"],[53,11,"Cube011_2"],[20,9,"Cube009_3"],[23,12,"Cube012_2"],[26,15,"Cube015_3"],[46,8,"Cube008_3"],[49,5,"Cube005_2"],[52,2,"Cube002_1"],[21,0,"Cube000_2"],[24,3,"Cube003_2"],[27,6,"Cube006_3"]];

const orderIndices1 = [0,1,2,3,4,5,6,7,8,9,10,11]; 
const orderIndices2 = [12,13,14,15,16,17,18,19,20,21,22,23]; 
const orderIndices3 = [24,25,26,27,28,29,30,31,32,33,34,35]; 
const orderIndices4 = [0,12,24,36,37,38,32,20,8,39,40,41]; 
const orderIndices5 = [1,13,25,42,43,44,31,19,7,45,46,47]; 
const orderIndices6 = [2,14,26,48,49,50,30,18,6,51,52,53]; 
const orderIndices7 = [3,15,27,48,42,36,35,23,11,41,47,53]; 
const orderIndices8 = [4,16,28,49,43,37,34,22,10,40,46,52]; 
const orderIndices9 = [5,17,29,50,44,28,33,21,9,39,45,51]; 

let set1=orderIndices1.map(index => setcubePlane[index][0]);
let set2=orderIndices2.map(index => setcubePlane[index][0]);
let set3=orderIndices3.map(index => setcubePlane[index][0]);
let set4=orderIndices4.map(index => setcubePlane[index][0]);
let set5=orderIndices5.map(index => setcubePlane[index][0]);
let set6=orderIndices6.map(index => setcubePlane[index][0]);
let set7=orderIndices7.map(index => setcubePlane[index][0]);
let set8=orderIndices8.map(index => setcubePlane[index][0]);
let set9=orderIndices9.map(index => setcubePlane[index][0]);


// const cubeset1=[24,15,6,3,0,9,18,21,12];
// const cubeset2=[25,16,7,4,1,10,19,22,13];
// const cubeset3=[26,17,8,5,2,11,20,23,14];
// const cubeset4=[24,25,26,23,20,19,18,21,22];
// const cubeset5=[15,16,17,14,11,10,9,12,13];
// const cubeset6=[6,7,8,5,2,1,0,3,4];
// const cubeset7=[6,7,8,17,26,25,24,15,16];
// const cubeset8=[3,4,5,14,23,22,21,12,13];
// const cubeset9=[0,1,2,11,20,19,18,9,10];


let cubeset1=[setcubePlane[0][1],setcubePlane[1][1],setcubePlane[2][1],setcubePlane[4][1],setcubePlane[5][1],setcubePlane[7][1],setcubePlane[8][1],setcubePlane[10][1],setcubePlane[46][1]];
let cubeset2=[setcubePlane[12][1],setcubePlane[13][1],setcubePlane[14][1],setcubePlane[16][1],setcubePlane[17][1],setcubePlane[19][1],setcubePlane[20][1],setcubePlane[22][1],13];
let cubeset3=[setcubePlane[24][1],setcubePlane[25][1],setcubePlane[26][1],setcubePlane[28][1],setcubePlane[29][1],setcubePlane[31][1],setcubePlane[33][1],setcubePlane[34][1],setcubePlane[43][1]];
let cubeset4=[setcubePlane[0][1],setcubePlane[12][1],setcubePlane[24][1],setcubePlane[37][1],setcubePlane[38][1],setcubePlane[20][1],setcubePlane[8][1],setcubePlane[40][1],setcubePlane[22][1]];
let cubeset5=[setcubePlane[1][1],setcubePlane[13][1],setcubePlane[25][1],setcubePlane[43][1],setcubePlane[44][1],setcubePlane[19][1],setcubePlane[7][1],setcubePlane[46][1],13];
let cubeset6=[setcubePlane[2][1],setcubePlane[14][1],setcubePlane[26][1],setcubePlane[49][1],setcubePlane[50][1],setcubePlane[18][1],setcubePlane[6][1],setcubePlane[52][1],setcubePlane[16][1]];
let cubeset7=[setcubePlane[3][1],setcubePlane[15][1],setcubePlane[27][1],setcubePlane[42][1],setcubePlane[36][1],setcubePlane[23][1],setcubePlane[11][1],setcubePlane[47][1],setcubePlane[13][1]];
let cubeset8=[setcubePlane[4][1],setcubePlane[16][1],setcubePlane[28][1],setcubePlane[43][1],setcubePlane[37][1],setcubePlane[22][1],setcubePlane[10][1],setcubePlane[46][1],13];
let cubeset9=[setcubePlane[5][1],setcubePlane[17][1],setcubePlane[29][1],setcubePlane[44][1],setcubePlane[38][1],setcubePlane[21][1],setcubePlane[9][1],setcubePlane[45][1],setcubePlane[19][1]];

let set,change=1;

// const rubiksCubeMatrixWithIdentifiers = [
//     //imitialcubeno,initialplaneno,initialPlanename,newcubeno,newcubeplane,newplanename
//     // 1
//     [
//       [[24,1, "Cube024_3",24,1,"Cube024_3"], [25,2, "Cube025_3",25,2,"Cube025_3"], [26,3, "Cube026_3",26,3, "Cube026_3"]],
//       [[15,4, "Cube015_2",15,15, "Cube015_2"], [16,5, "Cube016_2",16,5,"Cube016_2"], [17,6, "Cube017_2",17,6,"Cube017_2"]],
//       [[6,7, "Cube006_2",6,7,"Cube006_2"], [7,8, "Cube007_2",7,8, "Cube007_2"], [8,9, "Cube008_2",8,9,"Cube008_2"]],
//     ],
//     // 2
//     [
//       [[6,10, "Cube006_4",6,10, "Cube006_4"], [7,11, "Cube007_3",7,11,"Cube007_3"], [8,12, "Cube008_4",8,12, "Cube008_4"]],
//       [[3,13, "Cube003_3",3,13, "Cube003_3"], [4,14, "Cube004_2",4,14,"Cube004_2"], [5,15, "Cube005_3",5,15,"Cube005_3"]],
//       [[0,16, "Cube000_3",0,16,"Cube000_3"], [1,17, "Cube001_3",1,17,"Cube001_3"], [2,18, "Cube002_4",2,18,"Cube002_4"]],
//     ],
//     // 3
//     [
//       [[24,25, "Cube024_4",24,25, "Cube024_4"], [15,26, "Cube015_3",15,26,"Cube015_3"], [6,27, "Cube006_3",6,27,"Cube006_3"]],
//       [[21,22, "Cube021_3",21,22,"Cube021_3"], [12,23, "Cube012_2",12,23,"Cube012_2"], [3,24, "Cube003_2",5,24,"Cube003_2"]],
//       [[18,19, "Cube018_4",18,19, "Cube018_4"], [9,20, "Cube009_3",9,20,"Cube009_3"], [0,21, "Cube000_2",0,21,"Cube000_2"]],
//     ],
//     // 4
//     [
//       [[0,30, "Cube000_1",0,30,"Cube000_1"], [1,29, "Cube001_2",1,29,"Cube001_2"], [2,28, "Cube002_3",2,28, "Cube002_3"]],
//       [[9,33, "Cube009_2",9,33, "Cube009_2"], [10,32, "Cube010_2",10,32, "Cube010_2"], [11,31, "Cube011_3",11,31, "Cube011_3"]],
//       [[18,36, "Cube018_3",18,36,"Cube018_3"], [19,35, "Cube019_3",19,35, "Cube019_3"], [20,34, "Cube020_4",20,34,"Cube020_4"]],
//     ],
//     // 5
//     [
//       [[26,43, "Cube026_2",26,43, "Cube026_2"], [25,44, "Cube025_2",25,44,"Cube025_2"], [24,45, "Cube024_2",24,45,"Cube024_2"]],
//       [[23,40, "Cube023_2",23,40, "Cube023_2"], [22,41, "Cube022_2",22,41, "Cube022_2"], [21,42, "Cube021_2",21,42,"Cube021_2"]],
//       [[20,37, "Cube020_2",20,37, "Cube020_2"], [19,38, "Cube019_2",19,38, "Cube019_2"], [18,39, "Cube018_2",18,39,"Cube018_2"]],
//     ],
//     // 6
//     [
//       [[8,46, "Cube008_3",8,46, "Cube008_3"], [17,47, "Cube017_3",17,47, "Cube017_3"], [26,48, "Cube026_4",26,48,"Cube026_4"]],
//       [[5,49, "Cube005_2",5,49, "Cube005_2"], [14,50, "Cube014_2",14,50,"Cube014_2"], [23,51, "Cube023_3",23,51, "Cube023_3"]],
//       [[2,52, "Cube002_1",2,52,"Cube002_1"], [11,53, "Cube011_2",11,53, "Cube011_2"], [20,54, "Cube020_3",20,54,"Cube020_3"]],
//     ],
// ];


let rubiksCubeMatrixWithIdentifiers = [
    //imitialcubeno,initialplaneno,initialPlanename,newcubeno,newcubeplane,newplanename
    // 1
    [
      [[24,1, "Cube024_3",setcubePlane[0][1],setcubePlane[0][0],setcubePlane[0][2]], [25,2, "Cube025_3",setcubePlane[12][1],setcubePlane[12][0],setcubePlane[12][2]], [26,3, "Cube026_3",setcubePlane[24][1],setcubePlane[24][0],setcubePlane[24][2]]],
      [[15,4, "Cube015_2",setcubePlane[1][1],setcubePlane[1][0],setcubePlane[1][2]], [16,5, "Cube016_2",setcubePlane[13][1],setcubePlane[13][0],setcubePlane[13][2]], [17,6, "Cube017_2",setcubePlane[25][1],setcubePlane[25][0],setcubePlane[25][2]]],
      [[6,7, "Cube006_2",setcubePlane[2][1],setcubePlane[2][0],setcubePlane[2][2]], [7,8, "Cube007_2",setcubePlane[14][1],setcubePlane[14][0],setcubePlane[14][2]], [8,9, "Cube008_2",setcubePlane[26][1],setcubePlane[26][0],setcubePlane[26][2]]],
    ],
    // 2
    [
      [[6,10, "Cube006_4",setcubePlane[3][1],setcubePlane[3][0],setcubePlane[3][2]], [7,11, "Cube007_3",setcubePlane[15][1],setcubePlane[15][0],setcubePlane[15][2]], [8,12, "Cube008_4",setcubePlane[27][1],setcubePlane[27][0],setcubePlane[27][2]]],
      [[3,13, "Cube003_3",setcubePlane[4][1],setcubePlane[4][0],setcubePlane[4][2]], [4,14, "Cube004_2",setcubePlane[16][1],setcubePlane[16][0],setcubePlane[16][2]], [5,15, "Cube005_3",setcubePlane[28][1],setcubePlane[28][0],setcubePlane[28][2]]],
      [[0,16, "Cube000_3",setcubePlane[5][1],setcubePlane[5][0],setcubePlane[5][2]], [1,17, "Cube001_3",setcubePlane[17][1],setcubePlane[17][0],setcubePlane[17][2]], [2,18, "Cube002_4",setcubePlane[29][1],setcubePlane[29][0],setcubePlane[29][2]]],
    ],
    // 3
    [
      [[24,25, "Cube024_4",setcubePlane[41][1],setcubePlane[41][0],setcubePlane[41][2]], [15,26, "Cube015_3",setcubePlane[47][1],setcubePlane[47][0],setcubePlane[47][2]], [6,27, "Cube006_3",setcubePlane[53][1],setcubePlane[53][0],setcubePlane[53][2]]],
      [[21,22, "Cube021_3",setcubePlane[40][1],setcubePlane[40][0],setcubePlane[40][2]], [12,23, "Cube012_2",setcubePlane[46][1],setcubePlane[46][0],setcubePlane[46][2]], [3,24, "Cube003_2",setcubePlane[52][1],setcubePlane[52][0],setcubePlane[52][2]]],
      [[18,19, "Cube018_4",setcubePlane[39][1],setcubePlane[39][0],setcubePlane[39][2]], [9,20, "Cube009_3",setcubePlane[45][1],setcubePlane[45][0],setcubePlane[45][2]], [0,21, "Cube000_2",setcubePlane[51][1],setcubePlane[51][0],setcubePlane[51][2]]],
    ],
    // 4
    [
      [[0,30, "Cube000_1",setcubePlane[6][1],setcubePlane[6][0],setcubePlane[6][2]], [1,29, "Cube001_2",setcubePlane[18][1],setcubePlane[18][0],setcubePlane[18][2]], [2,28, "Cube002_3",setcubePlane[30][1],setcubePlane[30][0],setcubePlane[30][2]]],
      [[9,33, "Cube009_2",setcubePlane[7][1],setcubePlane[7][0],setcubePlane[7][2]], [10,32, "Cube010_2",setcubePlane[19][1],setcubePlane[19][0],setcubePlane[19][2]], [11,31, "Cube011_3",setcubePlane[31][1],setcubePlane[31][0],setcubePlane[31][2]]],
      [[18,36, "Cube018_3",setcubePlane[8][1],setcubePlane[8][0],setcubePlane[8][2]], [19,35, "Cube019_3",setcubePlane[20][1],setcubePlane[20][0],setcubePlane[20][2]], [20,34, "Cube020_4",setcubePlane[32][1],setcubePlane[32][0],setcubePlane[32][2]]],
    ],
    // 5
    [
      [[26,43, "Cube026_2",setcubePlane[35][1],setcubePlane[35][0],setcubePlane[35][2]], [25,44, "Cube025_2",setcubePlane[23][1],setcubePlane[23][0],setcubePlane[23][2]], [24,45, "Cube024_2",setcubePlane[11][1],setcubePlane[11][0],setcubePlane[11][2]]],
      [[23,40, "Cube023_2",setcubePlane[34][1],setcubePlane[34][0],setcubePlane[34][2]], [22,41, "Cube022_2",setcubePlane[22][1],setcubePlane[22][0],setcubePlane[22][2]], [21,42, "Cube021_2",setcubePlane[10][1],setcubePlane[10][0],setcubePlane[10][2]]],
      [[20,37, "Cube020_2",setcubePlane[33][1],setcubePlane[33][0],setcubePlane[33][2]], [19,38, "Cube019_2",setcubePlane[21][1],setcubePlane[21][0],setcubePlane[21][2]], [18,39, "Cube018_2",setcubePlane[9][1],setcubePlane[9][0],setcubePlane[9][2]]],
    ],
    // 6
    [
      [[8,46, "Cube008_3",setcubePlane[48][1],setcubePlane[48][0],setcubePlane[48][2]], [17,47, "Cube017_3",setcubePlane[42][1],setcubePlane[42][0],setcubePlane[42][2]], [26,48, "Cube026_4",setcubePlane[36][1],setcubePlane[36][0],setcubePlane[36][2]]],
      [[5,49, "Cube005_2",setcubePlane[49][1],setcubePlane[49][0],setcubePlane[49][2]], [14,50, "Cube014_2",setcubePlane[43][1],setcubePlane[43][0],setcubePlane[43][2]], [23,51, "Cube023_3",setcubePlane[37][1],setcubePlane[37][0],setcubePlane[37][2]]],
      [[2,52, "Cube002_1",setcubePlane[50][1],setcubePlane[50][0],setcubePlane[50][2]], [11,53, "Cube011_2",setcubePlane[44][1],setcubePlane[44][0],setcubePlane[44][2]], [20,54, "Cube020_3",setcubePlane[38][1],setcubePlane[38][0],setcubePlane[38][2]]],
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

  const Updateset=()=>{
    set1=orderIndices1.map(index => setcubePlane[index][0]);
    set2=orderIndices2.map(index => setcubePlane[index][0]);
    set3=orderIndices3.map(index => setcubePlane[index][0]);
    set4=orderIndices4.map(index => setcubePlane[index][0]);
    set5=orderIndices5.map(index => setcubePlane[index][0]);
    set6=orderIndices6.map(index => setcubePlane[index][0]);
    set7=orderIndices7.map(index => setcubePlane[index][0]);
    set8=orderIndices8.map(index => setcubePlane[index][0]);
    set9=orderIndices9.map(index => setcubePlane[index][0]);


 cubeset1=[setcubePlane[0][1],setcubePlane[1][1],setcubePlane[2][1],setcubePlane[4][1],setcubePlane[5][1],setcubePlane[7][1],setcubePlane[8][1],setcubePlane[10][1],setcubePlane[46][1]];
 cubeset2=[setcubePlane[12][1],setcubePlane[13][1],setcubePlane[14][1],setcubePlane[16][1],setcubePlane[17][1],setcubePlane[19][1],setcubePlane[20][1],setcubePlane[22][1],13];
 cubeset3=[setcubePlane[24][1],setcubePlane[25][1],setcubePlane[26][1],setcubePlane[28][1],setcubePlane[29][1],setcubePlane[31][1],setcubePlane[33][1],setcubePlane[34][1],setcubePlane[43][1]];
 cubeset4=[setcubePlane[0][1],setcubePlane[12][1],setcubePlane[24][1],setcubePlane[37][1],setcubePlane[38][1],setcubePlane[20][1],setcubePlane[8][1],setcubePlane[40][1],setcubePlane[22][1]];
 cubeset5=[setcubePlane[1][1],setcubePlane[13][1],setcubePlane[25][1],setcubePlane[43][1],setcubePlane[44][1],setcubePlane[19][1],setcubePlane[7][1],setcubePlane[46][1],13];
 cubeset6=[setcubePlane[2][1],setcubePlane[14][1],setcubePlane[26][1],setcubePlane[49][1],setcubePlane[50][1],setcubePlane[18][1],setcubePlane[6][1],setcubePlane[52][1],setcubePlane[16][1]];
 cubeset7=[setcubePlane[3][1],setcubePlane[15][1],setcubePlane[27][1],setcubePlane[42][1],setcubePlane[36][1],setcubePlane[23][1],setcubePlane[11][1],setcubePlane[47][1],setcubePlane[13][1]];
 cubeset8=[setcubePlane[4][1],setcubePlane[16][1],setcubePlane[28][1],setcubePlane[43][1],setcubePlane[37][1],setcubePlane[22][1],setcubePlane[10][1],setcubePlane[46][1],13];
 cubeset9=[setcubePlane[5][1],setcubePlane[17][1],setcubePlane[29][1],setcubePlane[44][1],setcubePlane[38][1],setcubePlane[21][1],setcubePlane[9][1],setcubePlane[45][1],setcubePlane[19][1]];

 rubiksCubeMatrixWithIdentifiers = [
  //imitialcubeno,initialplaneno,initialPlanename,newcubeno,newcubeplane,newplanename
  // 1
  [
    [[24,1, "Cube024_3",setcubePlane[0][1],setcubePlane[0][0],setcubePlane[0][2]], [25,2, "Cube025_3",setcubePlane[12][1],setcubePlane[12][0],setcubePlane[12][2]], [26,3, "Cube026_3",setcubePlane[24][1],setcubePlane[24][0],setcubePlane[24][2]]],
    [[15,4, "Cube015_2",setcubePlane[1][1],setcubePlane[1][0],setcubePlane[1][2]], [16,5, "Cube016_2",setcubePlane[13][1],setcubePlane[13][0],setcubePlane[13][2]], [17,6, "Cube017_2",setcubePlane[25][1],setcubePlane[25][0],setcubePlane[25][2]]],
    [[6,7, "Cube006_2",setcubePlane[2][1],setcubePlane[2][0],setcubePlane[2][2]], [7,8, "Cube007_2",setcubePlane[14][1],setcubePlane[14][0],setcubePlane[14][2]], [8,9, "Cube008_2",setcubePlane[26][1],setcubePlane[26][0],setcubePlane[26][2]]],
  ],
  // 2
  [
    [[6,10, "Cube006_4",setcubePlane[3][1],setcubePlane[3][0],setcubePlane[3][2]], [7,11, "Cube007_3",setcubePlane[15][1],setcubePlane[15][0],setcubePlane[15][2]], [8,12, "Cube008_4",setcubePlane[27][1],setcubePlane[27][0],setcubePlane[27][2]]],
    [[3,13, "Cube003_3",setcubePlane[4][1],setcubePlane[4][0],setcubePlane[4][2]], [4,14, "Cube004_2",setcubePlane[16][1],setcubePlane[16][0],setcubePlane[16][2]], [5,15, "Cube005_3",setcubePlane[28][1],setcubePlane[28][0],setcubePlane[28][2]]],
    [[0,16, "Cube000_3",setcubePlane[5][1],setcubePlane[5][0],setcubePlane[5][2]], [1,17, "Cube001_3",setcubePlane[17][1],setcubePlane[17][0],setcubePlane[17][2]], [2,18, "Cube002_4",setcubePlane[29][1],setcubePlane[29][0],setcubePlane[29][2]]],
  ],
  // 3
  [
    [[24,25, "Cube024_4",setcubePlane[41][1],setcubePlane[41][0],setcubePlane[41][2]], [15,26, "Cube015_3",setcubePlane[47][1],setcubePlane[47][0],setcubePlane[47][2]], [6,27, "Cube006_3",setcubePlane[53][1],setcubePlane[53][0],setcubePlane[53][2]]],
    [[21,22, "Cube021_3",setcubePlane[40][1],setcubePlane[40][0],setcubePlane[40][2]], [12,23, "Cube012_2",setcubePlane[46][1],setcubePlane[46][0],setcubePlane[46][2]], [3,24, "Cube003_2",setcubePlane[52][1],setcubePlane[52][0],setcubePlane[52][2]]],
    [[18,19, "Cube018_4",setcubePlane[39][1],setcubePlane[39][0],setcubePlane[39][2]], [9,20, "Cube009_3",setcubePlane[45][1],setcubePlane[45][0],setcubePlane[45][2]], [0,21, "Cube000_2",setcubePlane[51][1],setcubePlane[51][0],setcubePlane[51][2]]],
  ],
  // 4
  [
    [[0,30, "Cube000_1",setcubePlane[6][1],setcubePlane[6][0],setcubePlane[6][2]], [1,29, "Cube001_2",setcubePlane[18][1],setcubePlane[18][0],setcubePlane[18][2]], [2,28, "Cube002_3",setcubePlane[30][1],setcubePlane[30][0],setcubePlane[30][2]]],
    [[9,33, "Cube009_2",setcubePlane[7][1],setcubePlane[7][0],setcubePlane[7][2]], [10,32, "Cube010_2",setcubePlane[19][1],setcubePlane[19][0],setcubePlane[19][2]], [11,31, "Cube011_3",setcubePlane[31][1],setcubePlane[31][0],setcubePlane[31][2]]],
    [[18,36, "Cube018_3",setcubePlane[8][1],setcubePlane[8][0],setcubePlane[8][2]], [19,35, "Cube019_3",setcubePlane[20][1],setcubePlane[20][0],setcubePlane[20][2]], [20,34, "Cube020_4",setcubePlane[32][1],setcubePlane[32][0],setcubePlane[32][2]]],
  ],
  // 5
  [
    [[26,43, "Cube026_2",setcubePlane[35][1],setcubePlane[35][0],setcubePlane[35][2]], [25,44, "Cube025_2",setcubePlane[23][1],setcubePlane[23][0],setcubePlane[23][2]], [24,45, "Cube024_2",setcubePlane[11][1],setcubePlane[11][0],setcubePlane[11][2]]],
    [[23,40, "Cube023_2",setcubePlane[34][1],setcubePlane[34][0],setcubePlane[34][2]], [22,41, "Cube022_2",setcubePlane[22][1],setcubePlane[22][0],setcubePlane[22][2]], [21,42, "Cube021_2",setcubePlane[10][1],setcubePlane[10][0],setcubePlane[10][2]]],
    [[20,37, "Cube020_2",setcubePlane[33][1],setcubePlane[33][0],setcubePlane[33][2]], [19,38, "Cube019_2",setcubePlane[21][1],setcubePlane[21][0],setcubePlane[21][2]], [18,39, "Cube018_2",setcubePlane[9][1],setcubePlane[9][0],setcubePlane[9][2]]],
  ],
  // 6
  [
    [[8,46, "Cube008_3",setcubePlane[48][1],setcubePlane[48][0],setcubePlane[48][2]], [17,47, "Cube017_3",setcubePlane[42][1],setcubePlane[42][0],setcubePlane[42][2]], [26,48, "Cube026_4",setcubePlane[36][1],setcubePlane[36][0],setcubePlane[36][2]]],
    [[5,49, "Cube005_2",setcubePlane[49][1],setcubePlane[49][0],setcubePlane[49][2]], [14,50, "Cube014_2",setcubePlane[43][1],setcubePlane[43][0],setcubePlane[43][2]], [23,51, "Cube023_3",setcubePlane[37][1],setcubePlane[37][0],setcubePlane[37][2]]],
    [[2,52, "Cube002_1",setcubePlane[50][1],setcubePlane[50][0],setcubePlane[50][2]], [11,53, "Cube011_2",setcubePlane[44][1],setcubePlane[44][0],setcubePlane[44][2]], [20,54, "Cube020_3",setcubePlane[38][1],setcubePlane[38][0],setcubePlane[38][2]]],
  ],
];
// console.log("after update");
for(let i=0;i<setcubePlane.length;i++){
  // console.log(setcubePlane[i][0]);
}


  }
  const handleMouseDownCube = (down) => {
    setDownNewCube(down);
  };



  const handleMouseUp = (up) => {

let first,end;
    if (downnew) {
        const nameToSearchDown = downnew;
        // console.log(nameToSearchDown);
        const nameToSearchUp = up;
        for (let i = 0; i < rubiksCubeMatrixWithIdentifiers.length; i++) {
          for (let j = 0; j < rubiksCubeMatrixWithIdentifiers[i].length; j++) {
            for (let k = 0; k < rubiksCubeMatrixWithIdentifiers[i][j].length; k++) {
              const [cube,plane, name,newcube,newPlane,newname] = rubiksCubeMatrixWithIdentifiers[i][j][k];
              if (newname === nameToSearchDown) {
                // console.log(`Found corresponding number Down: ${newPlane}  ${newcube}`);
                first = newPlane;
              }
              if (newname === nameToSearchUp) {
                // console.log(`Found corresponding number Up: ${newPlane} ${newcube}`);
                end = newPlane;
                
              }
              const isInSet = (set) => set.includes(first) && set.includes(end);
                if (isInSet(set1)) {
                    // console.log("Both first and end are present in set1");
                    set=cubeset1;
                    setxyzdirection("x");
                    // console.log("cubeset1 "+cubeset1);
                    
                  } else if (isInSet(set2)) {
                    // console.log("Both first and end are present in set2");
                    set=cubeset2;
                    setxyzdirection("x");
                    // console.log("cubeset2 "+cubeset2);
                  } else if (isInSet(set3)) {
                    // console.log("Both first and end are present in set3");
                    set=cubeset3;
                    setxyzdirection("x");
                    // console.log("cubeset3 "+cubeset3);
                    
                  } else if (isInSet(set4)) {
                    // console.log("Both first and end are present in set4");
                    set=cubeset4;
                    setxyzdirection("z");
                    // console.log("cubeset4 "+cubeset4);
                  } else if (isInSet(set5)) {
                    // console.log("Both first and end are present in set5");
                    set=cubeset5;
                    setxyzdirection("z");
                    // console.log("cubeset5 "+cubeset5);
                  } else if (isInSet(set6)) {
                    // console.log("Both first and end are present in set6");
                    set=cubeset6;
                    // console.log("cubeset6 "+cubeset6);
                    setxyzdirection("z");
                  } else if (isInSet(set7)) {
                    // console.log("Both first and end are present in set7");
                    set=cubeset7;
                    setxyzdirection("y");
                    // console.log("cubeset7 "+cubeset7);
                  } else if (isInSet(set8)) {
                    // console.log("Both first and end are present in set8");
                    set=cubeset8;
                    setxyzdirection("y");
                    // console.log("cubeset8 "+cubeset8);
                  } else if (isInSet(set9)) {
                    // console.log("Both first and end are present in set9");
                    set=cubeset9;
                    setxyzdirection("y");
                    // console.log("cubeset9 "+cubeset9);
                  } else {
                    // console.log("First and/or end are not present in any set");
                  }

                  setSetrot(set);
                  change=1;
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

  if(set===cubeset1 && direction==="c" && change===1){
    // console.log(set1);
    const removedElements = setcubePlane.splice(9, 3);
    setcubePlane.unshift(...removedElements);
    Updateset();
    // console.log(set1);
    // console.log(setcubePlane)
    change=0;
  }else if(set===cubeset2 && direction==="c" && change===1){
    const removedElements = setcubePlane.splice(21, 3);
    setcubePlane.splice(12, 0, ...removedElements);
    // console.log(setcubePlane);
    Updateset();
    change=0;
  }else if(set===cubeset3 && direction==="c" && change===1){
    const removedElements = setcubePlane.splice(33, 3);
    setcubePlane.splice(24, 0, ...removedElements);
    // console.log(setcubePlane);
    Updateset();
    change=0;
  }else if(set===cubeset1 && direction==="a" && change===1){
    const removedElements = setcubePlane.splice(0, 3);
    setcubePlane.splice(9, 0, ...removedElements);
    // console.log(setcubePlane);
    Updateset();
    change=0;
  }else if(set===cubeset2 && direction==="a" && change===1){
    const removedElements = setcubePlane.splice(12, 3);
    setcubePlane.splice(21, 0, ...removedElements);
    // console.log(setcubePlane);
    Updateset();
    change=0;
  }else if(set===cubeset3 && direction==="a" && change===1){
    const removedElements = setcubePlane.splice(24, 3);
    setcubePlane.splice(33, 0, ...removedElements);
    // console.log(setcubePlane);
    Updateset();
    change=0;
  }



  else if(set===cubeset4 && direction==="c" && change===1){
    console.log("4,c")
    //1,36,2,35,3,34,48,51,54,19,22,25
    const tempset=[setcubePlane[0],setcubePlane[8],setcubePlane[12],setcubePlane[20],setcubePlane[24],setcubePlane[32],setcubePlane[36],setcubePlane[37],setcubePlane[38],setcubePlane[39],setcubePlane[40],setcubePlane[41]];
    setcubePlane[0]=tempset[6];
    setcubePlane[8]=tempset[11];
    setcubePlane[12]=tempset[7];
    setcubePlane[20]=tempset[10];
    setcubePlane[24]=tempset[8];
    setcubePlane[32]=tempset[9];
    setcubePlane[36]=tempset[5];
    setcubePlane[37]=tempset[3];
    setcubePlane[38]=tempset[1];
    setcubePlane[39]=tempset[0];
    setcubePlane[40]=tempset[3];
    setcubePlane[41]=tempset[4];
    Updateset();
    change=0;
  } else if(set===cubeset5 && direction==="c" && change===1){
    console.log("5,c")
    //4,33,5,32,6,31,47,50,53,20,23,26
    const tempset=[setcubePlane[1],setcubePlane[7],setcubePlane[13],setcubePlane[19],setcubePlane[25],setcubePlane[31],setcubePlane[42],setcubePlane[43],setcubePlane[44],setcubePlane[45],setcubePlane[46],setcubePlane[47]];
    setcubePlane[1]=tempset[6];
    setcubePlane[7]=tempset[11];
    setcubePlane[13]=tempset[7];
    setcubePlane[19]=tempset[10];
    setcubePlane[25]=tempset[8];
    setcubePlane[31]=tempset[9];
    setcubePlane[42]=tempset[5];
    setcubePlane[43]=tempset[3];
    setcubePlane[44]=tempset[1];
    setcubePlane[45]=tempset[0];
    setcubePlane[46]=tempset[2];
    setcubePlane[47]=tempset[4];
    Updateset();
    change=0;
  }else if(set===cubeset6 && direction==="c" && change===1){
    console.log("6,c")
    //7,30,8,29,9,28,46,49,52,21,24,27
    const tempset=[setcubePlane[2],setcubePlane[6],setcubePlane[14],setcubePlane[18],setcubePlane[26],setcubePlane[30],setcubePlane[48],setcubePlane[49],setcubePlane[50],setcubePlane[51],setcubePlane[52],setcubePlane[53]];
    setcubePlane[2]=tempset[6];
    setcubePlane[6]=tempset[11];
    setcubePlane[14]=tempset[7];
    setcubePlane[18]=tempset[10];
    setcubePlane[26]=tempset[8];
    setcubePlane[30]=tempset[9];
    setcubePlane[48]=tempset[5];
    setcubePlane[49]=tempset[3];
    setcubePlane[50]=tempset[1];
    setcubePlane[51]=tempset[0];
    setcubePlane[52]=tempset[2];
    setcubePlane[53]=tempset[4];
    Updateset();
    change=0;
  }else if(set===cubeset4 && direction==="a" && change===1){
    console.log("4,a")
    //1,36,2,35,3,34,48,51,54,19,22,25
    const tempset=[setcubePlane[0],setcubePlane[8],setcubePlane[12],setcubePlane[20],setcubePlane[24],setcubePlane[32],setcubePlane[36],setcubePlane[37],setcubePlane[38],setcubePlane[39],setcubePlane[40],setcubePlane[41]];
    setcubePlane[0]=tempset[9];
    setcubePlane[8]=tempset[8];
    setcubePlane[12]=tempset[10];
    setcubePlane[20]=tempset[7];
    setcubePlane[24]=tempset[11];
    setcubePlane[32]=tempset[6];
    setcubePlane[36]=tempset[0];
    setcubePlane[37]=tempset[2];
    setcubePlane[38]=tempset[4];
    setcubePlane[39]=tempset[5];
    setcubePlane[40]=tempset[3];
    setcubePlane[41]=tempset[1];
    Updateset();
    change=0;
  }else if(set===cubeset5 && direction==="a" && change===1){
    console.log("5,a")
    //4,33,5,32,6,31,47,50,53,20,23,26
    const tempset=[setcubePlane[1],setcubePlane[7],setcubePlane[13],setcubePlane[19],setcubePlane[25],setcubePlane[31],setcubePlane[42],setcubePlane[43],setcubePlane[44],setcubePlane[45],setcubePlane[46],setcubePlane[47]];
    setcubePlane[1]=tempset[9];
    setcubePlane[7]=tempset[8];
    setcubePlane[13]=tempset[10];
    setcubePlane[19]=tempset[7];
    setcubePlane[25]=tempset[11];
    setcubePlane[31]=tempset[6];
    setcubePlane[42]=tempset[0];
    setcubePlane[43]=tempset[2];
    setcubePlane[44]=tempset[4];
    setcubePlane[45]=tempset[5];
    setcubePlane[46]=tempset[3];
    setcubePlane[47]=tempset[1];
    Updateset();
    change=0;
  }else if(set===cubeset6 && direction==="a" && change===1){
    console.log("6,a")
    //7,30,8,29,9,28,46,49,52,21,24,27
    const tempset=[setcubePlane[2],setcubePlane[6],setcubePlane[14],setcubePlane[18],setcubePlane[26],setcubePlane[30],setcubePlane[48],setcubePlane[49],setcubePlane[50],setcubePlane[51],setcubePlane[52],setcubePlane[53]];
    setcubePlane[2]=tempset[9];
    setcubePlane[6]=tempset[8];
    setcubePlane[14]=tempset[10];
    setcubePlane[18]=tempset[7];
    setcubePlane[26]=tempset[11];
    setcubePlane[30]=tempset[6];
    setcubePlane[48]=tempset[0];
    setcubePlane[49]=tempset[2];
    setcubePlane[50]=tempset[4];
    setcubePlane[51]=tempset[5];
    setcubePlane[52]=tempset[3];
    setcubePlane[53]=tempset[1];
    Updateset();
    change=0;
  }



  else if(set===cubeset7 && direction==="c" && change===1){
    // console.log("before update");
for(let i=0;i<setcubePlane.length;i++){
  // console.log(setcubePlane[i][0]);
}

    console.log("7,c")
    ////10,45,11,44,12,43,48,25,47,26,46,27
    //10,45,11,44,12,43,48,25,53,26,46,27
    // console.log(setcubePlane);
    const tempset=[setcubePlane[3],setcubePlane[11],setcubePlane[15],setcubePlane[23],setcubePlane[27],setcubePlane[35],setcubePlane[36],setcubePlane[41],setcubePlane[44],setcubePlane[47],setcubePlane[48],setcubePlane[53]];
    setcubePlane[3]=tempset[7];//10
    setcubePlane[11]=tempset[6];//45
    setcubePlane[15]=tempset[9];//11
    setcubePlane[23]=tempset[8];//44
    setcubePlane[27]=tempset[11];//12
    setcubePlane[35]=tempset[10];//43
    setcubePlane[36]=tempset[4];//48
    setcubePlane[41]=tempset[5];//25
    setcubePlane[44]=tempset[2];//53
    setcubePlane[47]=tempset[3];//26//
    setcubePlane[48]=tempset[0];//46
    setcubePlane[53]=tempset[1];//27//
    // console.log("tempset ");
    for(let i=0;i<tempset.length;i++){
      // console.log(tempset[i][0]);
    }
    
    Updateset();
    change=0;
  }  else if(set===cubeset8 && direction==="c" && change===1){
    console.log("8,c")
    //13,42,14,41,15,40,51,22,50,23,49,24
    const tempset=[setcubePlane[4],setcubePlane[10],setcubePlane[16],setcubePlane[22],setcubePlane[28],setcubePlane[34],setcubePlane[37],setcubePlane[40],setcubePlane[43],setcubePlane[46],setcubePlane[49],setcubePlane[52]];
    setcubePlane[4]=tempset[7];
    setcubePlane[10]=tempset[6];
    setcubePlane[16]=tempset[9];
    setcubePlane[22]=tempset[8];
    setcubePlane[28]=tempset[11];
    setcubePlane[34]=tempset[10];
    setcubePlane[37]=tempset[4];
    setcubePlane[40]=tempset[5];
    setcubePlane[43]=tempset[2];
    setcubePlane[46]=tempset[3];
    setcubePlane[49]=tempset[0];
    setcubePlane[52]=tempset[1];
    Updateset();
    change=0;
  }else if(set===cubeset9 && direction==="c" && change===1){
    console.log("9,c")
    //16,39,17,38,18,37,54,19,53,20,52,21
    const tempset=[setcubePlane[5],setcubePlane[9],setcubePlane[17],setcubePlane[21],setcubePlane[29],setcubePlane[33],setcubePlane[38],setcubePlane[39],setcubePlane[44],setcubePlane[45],setcubePlane[50],setcubePlane[51]];
    setcubePlane[5]=tempset[7];
    setcubePlane[9]=tempset[6];
    setcubePlane[17]=tempset[9];
    setcubePlane[21]=tempset[8];
    setcubePlane[29]=tempset[11];
    setcubePlane[33]=tempset[10];
    setcubePlane[38]=tempset[4];
    setcubePlane[39]=tempset[5];
    setcubePlane[44]=tempset[2];
    setcubePlane[45]=tempset[3];
    setcubePlane[50]=tempset[0];
    setcubePlane[51]=tempset[1];
    Updateset();
    change=0;
  }else if(set===cubeset7 && direction==="a" && change===1){
    console.log("7,a")
    //10,45,11,44,12,43,48,25,47,26,46,27
    const tempset=[setcubePlane[3],setcubePlane[11],setcubePlane[15],setcubePlane[23],setcubePlane[27],setcubePlane[35],setcubePlane[36],setcubePlane[41],setcubePlane[42],setcubePlane[47],setcubePlane[48],setcubePlane[53]];
    setcubePlane[3]=tempset[10];
    setcubePlane[11]=tempset[11];
    setcubePlane[15]=tempset[8];
    setcubePlane[23]=tempset[9];
    setcubePlane[27]=tempset[6];
    setcubePlane[35]=tempset[7];
    setcubePlane[36]=tempset[1];
    setcubePlane[41]=tempset[0];
    setcubePlane[42]=tempset[3];
    setcubePlane[47]=tempset[2];
    setcubePlane[48]=tempset[5];
    setcubePlane[53]=tempset[4];
    Updateset();
    change=0;
  }  else if(set===cubeset8 && direction==="a" && change===1){
    console.log("8,a")
    ////13,42,14,41,15,40,51,22,50,23,49,24
    //13,42,14,41,15,40,51,22,50,23,49,24
    const tempset=[setcubePlane[4],setcubePlane[10],setcubePlane[16],setcubePlane[22],setcubePlane[28],setcubePlane[34],setcubePlane[37],setcubePlane[40],setcubePlane[43],setcubePlane[46],setcubePlane[49],setcubePlane[52]];
    setcubePlane[4]=tempset[10];
    setcubePlane[10]=tempset[11];
    setcubePlane[16]=tempset[8];
    setcubePlane[22]=tempset[9];
    setcubePlane[28]=tempset[6];
    setcubePlane[34]=tempset[7];
    setcubePlane[37]=tempset[1];
    setcubePlane[40]=tempset[0];
    setcubePlane[43]=tempset[3];
    setcubePlane[46]=tempset[2];
    setcubePlane[49]=tempset[5];
    setcubePlane[52]=tempset[4];
    // console.log("tempset");
    for(let i=0;i<tempset.length;i++){
      // console.log(tempset[i][0]);
    }
    Updateset();
    change=0;
  }else if(set===cubeset9 && direction==="a" && change===1){
    console.log("9,a")
    //16,39,17,38,18,37,54,19,53,20,52,21
    const tempset=[setcubePlane[5],setcubePlane[9],setcubePlane[17],setcubePlane[21],setcubePlane[29],setcubePlane[33],setcubePlane[38],setcubePlane[39],setcubePlane[44],setcubePlane[45],setcubePlane[50],setcubePlane[51]];
    setcubePlane[5]=tempset[10];
    setcubePlane[9]=tempset[11];
    setcubePlane[17]=tempset[9];
    setcubePlane[21]=tempset[9];
    setcubePlane[29]=tempset[6];
    setcubePlane[33]=tempset[7];
    setcubePlane[38]=tempset[1];
    setcubePlane[39]=tempset[0];
    setcubePlane[44]=tempset[3];
    setcubePlane[45]=tempset[2];
    setcubePlane[50]=tempset[5];
    setcubePlane[51]=tempset[4];
    Updateset();
    change=0;
  }




// console.log(setrot);
  return { handleMouseDown, handleMouseUp,handleMouseDownCube, set: setrot ,xyzdirection:xyzdirection,direction:direction};
};

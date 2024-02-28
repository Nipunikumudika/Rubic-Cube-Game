
import {  useState } from "react";
let finish=0;

//plane no,cube no,colour

let setcubePlane=[[1,24,"Cube024_3"],[4,15,"Cube015_2"],[7,6,"Cube006_2"],[10,6,"Cube006_4"],[13,3,"Cube003_3"],[16,0,"Cube000_3"],[30,0,"Cube000_1"],[33,9,"Cube009_2"],[36,18,"Cube018_3"],[39,18,"Cube018_2"],[42,21,"Cube021_2"],[45,24,"Cube024_2"],
            [2,25,"Cube025_3"],[5,16,"Cube016_2"],[8,7,"Cube007_2"],[11,7,"Cube007_3"],[14,4,"Cube004_2"],[17,1,"Cube001_3"],[29,1,"Cube001_2"],[32,10,"Cube010_2"],[35,19, "Cube019_3"],[38,19,"Cube019_2"],[41,22,"Cube022_2"],[44,25,"Cube025_2"],
            [3,26,"Cube026_3"],[6,17,"Cube017_2"],[9,8,"Cube008_2"],[12,8,"Cube008_4"],[15,5,"Cube005_3"],[18,2,"Cube002_4"],[28,2,"Cube002_3"],[31,11,"Cube011_3"],[34,20,"Cube020_4"],[37,20,"Cube020_2"],[40,23,"Cube023_2"],[43,26,"Cube026_2"],
            [48,26,"Cube026_4"],[51,23,"Cube023_3"],[54,20,"Cube020_3"],[19,18,"Cube018_4"],[22,21,"Cube021_3"],[25,24,"Cube024_4"],[47,17,"Cube017_3"],[50,14,"Cube014_2"],[53,11,"Cube011_2"],[20,9,"Cube009_3"],[23,12,"Cube012_2"],[26,15,"Cube015_3"],[46,8,"Cube008_3"],[49,5,"Cube005_2"],[52,2,"Cube002_2"],[21,0,"Cube000_2"],[24,3,"Cube003_2"],[27,6,"Cube006_3"]];

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
      [[2,52, "Cube002_2",setcubePlane[50][1],setcubePlane[50][0],setcubePlane[50][2]], [11,53, "Cube011_2",setcubePlane[44][1],setcubePlane[44][0],setcubePlane[44][2]], [20,54, "Cube020_3",setcubePlane[38][1],setcubePlane[38][0],setcubePlane[38][2]]],
    ],
];


export const useMouseHandlers = () => {
  const [downnew, setDownNew] = useState(null);
  const [setrot, setSetrot] = useState(null); 
  const [xyzdirection, setxyzdirection] = useState(null); 
  const [direction, setdirection] = useState(null); 
  let downnew2;
  const handleMouseDown = (down) => {
    downnew2=down;
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
    [[2,52, "Cube002_2",setcubePlane[50][1],setcubePlane[50][0],setcubePlane[50][2]], [11,53, "Cube011_2",setcubePlane[44][1],setcubePlane[44][0],setcubePlane[44][2]], [20,54, "Cube020_3",setcubePlane[38][1],setcubePlane[38][0],setcubePlane[38][2]]],
  ],
];



let checkfinish=0;
for (let i = 0; i < rubiksCubeMatrixWithIdentifiers.length; i++) {
  for (let j = 0; j < rubiksCubeMatrixWithIdentifiers[i].length; j++) {
    for (let k = 0; k < rubiksCubeMatrixWithIdentifiers[i][j].length; k++) {
      const [cube,plane, name,newcube,newPlane,newname] = rubiksCubeMatrixWithIdentifiers[i][j][k];
      if(name===newname){
checkfinish++;
      }
    }
  }
}
console.log(checkfinish);
if (checkfinish===54){
finish=1;
}
  }
  const handleMouseUp = async (up) => {
let first,end,firstactual,endactual;
let nameToSearchDown;
    if (downnew || downnew2) {
      if(downnew2){
         nameToSearchDown = downnew2;
      }else{
        nameToSearchDown = downnew;
      }
        
        const nameToSearchUp = up;
        for (let i = 0; i < rubiksCubeMatrixWithIdentifiers.length; i++) {
          for (let j = 0; j < rubiksCubeMatrixWithIdentifiers[i].length; j++) {
            for (let k = 0; k < rubiksCubeMatrixWithIdentifiers[i][j].length; k++) {
              const [cube,plane, name,newcube,newPlane,newname] = rubiksCubeMatrixWithIdentifiers[i][j][k];
              if (newname === nameToSearchDown) {
                first = newPlane;
                firstactual=plane;
              }
              if (newname === nameToSearchUp) {
                end = newPlane;
                endactual=plane;
              }

              const isInSet = (set) => set.includes(first) && set.includes(end);
                if (isInSet(set1)) {
                    set=cubeset1;
                    setxyzdirection("x");
                  } else if (isInSet(set2)) {
                    set=cubeset2;
                    setxyzdirection("x");
                  } else if (isInSet(set3)) {
                    set=cubeset3;
                    setxyzdirection("x");
                  } else if (isInSet(set4)) {
                    set=cubeset4;
                    setxyzdirection("z");
                  } else if (isInSet(set5)) {
                    set=cubeset5;
                    setxyzdirection("z");
                  } else if (isInSet(set6)) {
                    set=cubeset6;
                    setxyzdirection("z");
                  } else if (isInSet(set7)) {
                    set=cubeset7;
                    setxyzdirection("y");
                  } else if (isInSet(set8)) {
                    set=cubeset8;
                    setxyzdirection("y");
                  } else if (isInSet(set9)) {
                    set=cubeset9;
                    setxyzdirection("y");
                  } else {
                  }
                  setSetrot(set);
                  change=1;
                  if(set===cubeset1||set===cubeset2||set===cubeset3||set===cubeset7||set===cubeset8||set===cubeset9){
                    if(endactual>firstactual){
                      setdirection("c");
                  }else if(endactual<firstactual){
                      setdirection("a");
                  }
                  }else if(set===cubeset4||set===cubeset5||set===cubeset6){
                    if(endactual<firstactual){
                      setdirection("c");
                  }else if(endactual>firstactual){
                      setdirection("a");
                  }
                  }

                  
            }
          }
        }
    }
  };

  if(set===cubeset1 && direction==="c" && change===1){
    console.log("1,c")
    const removedElements = setcubePlane.splice(9, 3);
    setcubePlane.unshift(...removedElements);
    //19,22,25,20,26,21,24,27
    const tempset=[setcubePlane[39],setcubePlane[40],setcubePlane[41],setcubePlane[45],setcubePlane[47],setcubePlane[51],setcubePlane[52],setcubePlane[53]];
    setcubePlane[39]=tempset[5];//19
    setcubePlane[40]=tempset[3];//22
    setcubePlane[41]=tempset[0];//25
    setcubePlane[45]=tempset[6];//20
    setcubePlane[47]=tempset[1];//26
    setcubePlane[51]=tempset[7];//21
    setcubePlane[52]=tempset[4];//24
    setcubePlane[53]=tempset[2];//27
    Updateset();
    change=0;
  }else if(set===cubeset2 && direction==="c" && change===1){
    console.log("2,c")
    const removedElements = setcubePlane.splice(21, 3);
    setcubePlane.splice(12, 0, ...removedElements);
    Updateset();
    change=0;
  }else if(set===cubeset3 && direction==="c" && change===1){
    console.log("3,c")
    //48,51,54,47,53,46,49,52
    const tempset=[setcubePlane[36],setcubePlane[37],setcubePlane[38],setcubePlane[42],setcubePlane[44],setcubePlane[48],setcubePlane[49],setcubePlane[50]];
    setcubePlane[36]=tempset[2];//48
    setcubePlane[37]=tempset[4];//51
    setcubePlane[38]=tempset[7];//54
    setcubePlane[42]=tempset[1];//47
    setcubePlane[44]=tempset[6];//53
    setcubePlane[48]=tempset[0];//46
    setcubePlane[49]=tempset[3];//49
    setcubePlane[50]=tempset[5];//52
    const removedElements = setcubePlane.splice(33, 3);
    setcubePlane.splice(24, 0, ...removedElements);
    Updateset();
    change=0;
  }else if(set===cubeset1 && direction==="a" && change===1){
    console.log("1,a")
    const removedElements = setcubePlane.splice(0, 3);
    setcubePlane.splice(9, 0, ...removedElements);
    //19,22,25,20,26,21,24,27
    const tempset=[setcubePlane[39],setcubePlane[40],setcubePlane[41],setcubePlane[45],setcubePlane[47],setcubePlane[51],setcubePlane[52],setcubePlane[53]];
    setcubePlane[39]=tempset[2];//19
    setcubePlane[40]=tempset[4];//22
    setcubePlane[41]=tempset[7];//25
    setcubePlane[45]=tempset[1];//20
    setcubePlane[47]=tempset[6];//26
    setcubePlane[51]=tempset[0];//21
    setcubePlane[52]=tempset[3];//24
    setcubePlane[53]=tempset[5];//27
    Updateset();
    change=0;
  }else if(set===cubeset2 && direction==="a" && change===1){
    console.log("2,a")
    const removedElements = setcubePlane.splice(12, 3);
    setcubePlane.splice(21, 0, ...removedElements);
    Updateset();
    change=0;
  }else if(set===cubeset3 && direction==="a" && change===1){
    console.log("3,a")
    const removedElements = setcubePlane.splice(24, 3);
    setcubePlane.splice(33, 0, ...removedElements);
    //48,51,54,47,53,46,49,52
    const tempset=[setcubePlane[36],setcubePlane[37],setcubePlane[38],setcubePlane[42],setcubePlane[44],setcubePlane[48],setcubePlane[49],setcubePlane[50]];
    setcubePlane[36]=tempset[5];//48
    setcubePlane[37]=tempset[3];//51
    setcubePlane[38]=tempset[0];//54
    setcubePlane[42]=tempset[6];//47
    setcubePlane[44]=tempset[1];//53
    setcubePlane[48]=tempset[7];//46
    setcubePlane[49]=tempset[4];//49
    setcubePlane[50]=tempset[2];//52

    Updateset();
    change=0;
  }



  else if(set===cubeset4 && direction==="c" && change===1){
    console.log("4,c")
    //1,36,2,35,3,34,48,51,54,19,22,25
    const tempset=[setcubePlane[0],setcubePlane[8],setcubePlane[12],setcubePlane[20],setcubePlane[24],setcubePlane[32],setcubePlane[36],setcubePlane[37],setcubePlane[38],setcubePlane[39],setcubePlane[40],setcubePlane[41]];
    setcubePlane[0]=tempset[6];//1
    setcubePlane[8]=tempset[11];//36
    setcubePlane[12]=tempset[7];//2
    setcubePlane[20]=tempset[10];//35
    setcubePlane[24]=tempset[8];//3
    setcubePlane[32]=tempset[9];//34
    setcubePlane[36]=tempset[5];//48
    setcubePlane[37]=tempset[3];//51
    setcubePlane[38]=tempset[1];//54
    setcubePlane[39]=tempset[0];//19
    setcubePlane[40]=tempset[2];//22
    setcubePlane[41]=tempset[4];//25


    //39,42,45,38,44,37,40,43
    const tempset2=[setcubePlane[9],setcubePlane[10],setcubePlane[11],setcubePlane[21],setcubePlane[23],setcubePlane[33],setcubePlane[34],setcubePlane[35]];
    setcubePlane[9]=tempset2[2];//39
    setcubePlane[10]=tempset2[4];//42
    setcubePlane[11]=tempset2[7];//45
    setcubePlane[21]=tempset2[1];//38
    setcubePlane[23]=tempset2[6];//44
    setcubePlane[33]=tempset2[0];//37
    setcubePlane[34]=tempset2[3];//40
    setcubePlane[35]=tempset2[5];//43

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

    //10,13,16,11,17,12,15,18
    const tempset2=[setcubePlane[3],setcubePlane[4],setcubePlane[5],setcubePlane[15],setcubePlane[17],setcubePlane[27],setcubePlane[28],setcubePlane[29]];
    setcubePlane[3]=tempset2[5];//10
    setcubePlane[4]=tempset2[3];//13
    setcubePlane[5]=tempset2[0];//16
    setcubePlane[15]=tempset2[6];//11
    setcubePlane[17]=tempset2[1];//17
    setcubePlane[27]=tempset2[7];//12
    setcubePlane[28]=tempset2[4];//15
    setcubePlane[29]=tempset2[2];//18
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
    

    //39,42,45,38,44,37,40,43
    const tempset2=[setcubePlane[9],setcubePlane[10],setcubePlane[11],setcubePlane[21],setcubePlane[23],setcubePlane[33],setcubePlane[34],setcubePlane[35]];
    setcubePlane[9]=tempset2[5];//39
    setcubePlane[10]=tempset2[3];//42
    setcubePlane[11]=tempset2[0];//45
    setcubePlane[21]=tempset2[6];//38
    setcubePlane[23]=tempset2[1];//44
    setcubePlane[33]=tempset2[7];//37
    setcubePlane[34]=tempset2[4];//40
    setcubePlane[35]=tempset2[2];//43
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

    //10,13,16,11,17,12,15,18
    const tempset2=[setcubePlane[3],setcubePlane[4],setcubePlane[5],setcubePlane[15],setcubePlane[17],setcubePlane[27],setcubePlane[28],setcubePlane[29]];
    setcubePlane[3]=tempset2[2];//10
    setcubePlane[4]=tempset2[4];//13
    setcubePlane[5]=tempset2[7];//16
    setcubePlane[15]=tempset2[1];//11
    setcubePlane[17]=tempset2[6];//17
    setcubePlane[27]=tempset2[0];//12
    setcubePlane[28]=tempset2[3];//15
    setcubePlane[29]=tempset2[5];//18
    Updateset();
    change=0;
  }



  else if(set===cubeset7 && direction==="c" && change===1){
    console.log("7,c")
    ////10,45,11,44,12,43,48,25,47,26,46,27
    //10,45,11,44,12,43,48,25,47,26,46,27
    const tempset=[setcubePlane[3],setcubePlane[11],setcubePlane[15],setcubePlane[23],setcubePlane[27],setcubePlane[35],setcubePlane[36],setcubePlane[41],setcubePlane[42],setcubePlane[47],setcubePlane[48],setcubePlane[53]];
    setcubePlane[3]=tempset[7];//10
    setcubePlane[11]=tempset[6];//45
    setcubePlane[15]=tempset[9];//11
    setcubePlane[23]=tempset[8];//44
    setcubePlane[27]=tempset[11];//12
    setcubePlane[35]=tempset[10];//43
    setcubePlane[36]=tempset[4];//48
    setcubePlane[41]=tempset[5];//25
    setcubePlane[42]=tempset[2];//47
    setcubePlane[47]=tempset[3];//26
    setcubePlane[48]=tempset[0];//46
    setcubePlane[53]=tempset[1];//27

    //1,4,7,2,8,3,6,9
    const tempset2=[setcubePlane[0],setcubePlane[1],setcubePlane[2],setcubePlane[12],setcubePlane[14],setcubePlane[24],setcubePlane[25],setcubePlane[26]];
    setcubePlane[0]=tempset2[5];//1
    setcubePlane[1]=tempset2[3];//4
    setcubePlane[2]=tempset2[0];//7
    setcubePlane[12]=tempset2[6];//2
    setcubePlane[14]=tempset2[1];//8
    setcubePlane[24]=tempset2[7];//3
    setcubePlane[25]=tempset2[4];//6
    setcubePlane[26]=tempset2[2];//9

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


    //30,33,36,29,35,28,31,34
    const tempset2=[setcubePlane[6],setcubePlane[7],setcubePlane[8],setcubePlane[18],setcubePlane[20],setcubePlane[30],setcubePlane[31],setcubePlane[32]];
    setcubePlane[6]=tempset2[2];//30
    setcubePlane[7]=tempset2[4];//33
    setcubePlane[8]=tempset2[7];//36
    setcubePlane[18]=tempset2[1];//29
    setcubePlane[20]=tempset2[6];//35
    setcubePlane[30]=tempset2[0];//28
    setcubePlane[31]=tempset2[3];//31
    setcubePlane[32]=tempset2[5];//34

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

    //1,4,7,2,8,3,6,9
    const tempset2=[setcubePlane[0],setcubePlane[1],setcubePlane[2],setcubePlane[12],setcubePlane[14],setcubePlane[24],setcubePlane[25],setcubePlane[26]];
    setcubePlane[0]=tempset2[2];//1
    setcubePlane[1]=tempset2[4];//4
    setcubePlane[2]=tempset2[7];//7
    setcubePlane[12]=tempset2[1];//2
    setcubePlane[14]=tempset2[6];//8
    setcubePlane[24]=tempset2[0];//3
    setcubePlane[25]=tempset2[3];//6
    setcubePlane[26]=tempset2[5];//9

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
    Updateset();
    change=0;
  }else if(set===cubeset9 && direction==="a" && change===1){
    console.log("9,a")
    //16,39,17,38,18,37,54,19,53,20,52,21
    const tempset=[setcubePlane[5],setcubePlane[9],setcubePlane[17],setcubePlane[21],setcubePlane[29],setcubePlane[33],setcubePlane[38],setcubePlane[39],setcubePlane[44],setcubePlane[45],setcubePlane[50],setcubePlane[51]];
    setcubePlane[5]=tempset[10];//16
    setcubePlane[9]=tempset[11];//39
    setcubePlane[17]=tempset[8];//17
    setcubePlane[21]=tempset[9];//38
    setcubePlane[29]=tempset[6];//18
    setcubePlane[33]=tempset[7];//37
    setcubePlane[38]=tempset[1];//54
    setcubePlane[39]=tempset[0];//19
    setcubePlane[44]=tempset[3];//53
    setcubePlane[45]=tempset[2];//20
    setcubePlane[50]=tempset[5];//52
    setcubePlane[51]=tempset[4];//21

    //30,33,36,29,35,28,31,34
    const tempset2=[setcubePlane[6],setcubePlane[7],setcubePlane[8],setcubePlane[18],setcubePlane[20],setcubePlane[30],setcubePlane[31],setcubePlane[32]];
    setcubePlane[6]=tempset2[5];//30
    setcubePlane[7]=tempset2[3];//33
    setcubePlane[8]=tempset2[0];//36
    setcubePlane[18]=tempset2[6];//29
    setcubePlane[20]=tempset2[1];//35
    setcubePlane[30]=tempset2[7];//28
    setcubePlane[31]=tempset2[4];//31
    setcubePlane[32]=tempset2[2];//34

    Updateset();
    change=0;
  }

  return { handleMouseDown, handleMouseUp, set: setrot ,xyzdirection:xyzdirection,direction:direction,finish: finish};
};

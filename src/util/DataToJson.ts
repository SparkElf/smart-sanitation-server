import { writeFile, writeFileSync } from "fs";
import { generateAreaInfos, generateCollectionInfos, generateMachineInfos, generateProgramInfos, generateWorkerInfos, generateWorkerStates, generateWorkStates } from "./DataGenerator";

writeFile('./src/data/WorkerInfos.json', JSON.stringify(generateWorkerInfos(), null, "\t"), err => console.log(err))

writeFile('./src/data/WorkerStates.json', JSON.stringify(generateWorkerStates(), null, "\t"), err => console.log(err))

writeFile('./src/data/WorkStates.json', JSON.stringify(generateWorkStates(), null, "\t"), err => console.log(err))

writeFile('./src/data/CollectionInfos.json', JSON.stringify(generateCollectionInfos(), null, "\t"), err => console.log(err))

writeFile('./src/data/AreaInfos.json', JSON.stringify(generateAreaInfos(), null, "\t"), err => console.log(err))

writeFile('./src/data/MachineInfos.json', JSON.stringify(generateMachineInfos(), null, "\t"), err => console.log(err))

writeFile('./src/data/ProgramInfos.json', JSON.stringify(generateProgramInfos(), null, "\t"), err => console.log(err))




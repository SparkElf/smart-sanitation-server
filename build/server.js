"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const cabin_1 = __importDefault(require("cabin"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_router_1 = __importDefault(require("koa-router"));
const fs_1 = require("fs");
const app = new koa_1.default();
const cabin = new cabin_1.default();
const router = new koa_router_1.default();
const WorkDir = "C:/Users/37465/Desktop/project/smart-sanitation-server/src/data/";
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});
router
    .get('/WorkerInfo', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const WorkerInfoArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'WorkerInfos.json', 'utf-8'));
    console.log(WorkerInfoArray);
    if (ID === undefined)
        ctx.body = WorkerInfoArray;
    else {
        for (let i = 0; i < WorkerInfoArray.length; i++)
            if (Number(ID) === WorkerInfoArray[i].ID)
                ctx.body = WorkerInfoArray[i];
        ctx.body = "";
    }
})
    .get('/WorkerState', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const WorkerStateArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'WorkerStatesy.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = WorkerStateArray;
    else {
        for (let i = 0; i < WorkerStateArray.length; i++)
            if (Number(ID) === WorkerStateArray[i].ID)
                ctx.body = WorkerStateArray[i];
        ctx.body = "";
    }
})
    .get('/WorkState', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const WorkStateArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'WorkStates.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = WorkStateArray;
    else {
        console.log('success');
        for (let i = 0; i < WorkStateArray.length; i++)
            if (Number(ID) === WorkStateArray[i].ID) {
                ctx.body = WorkStateArray[i];
                break;
            }
    }
})
    .get('/CollectionInfo', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const CollectionInfoArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'CollectionInfos.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = CollectionInfoArray;
    else {
        for (let i = 0; i < CollectionInfoArray.length; i++)
            if (Number(ID) === CollectionInfoArray[i].ID) {
                ctx.body = CollectionInfoArray[i];
                break;
            }
    }
})
    .get('/AreaInfo', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const AreaInfoArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'AreaInfos.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = AreaInfoArray;
    else {
        for (let i = 0; i < AreaInfoArray.length; i++)
            if (Number(ID) === AreaInfoArray[i].ID) {
                ctx.body = AreaInfoArray[i];
                break;
            }
    }
})
    .get('/MachineInfo', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const MachineInfoArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'MachineInfos.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = MachineInfoArray;
    else {
        for (let i = 0; i < MachineInfoArray.length; i++)
            if (Number(ID) === MachineInfoArray[i].ID) {
                ctx.body = MachineInfoArray[i];
                break;
            }
    }
})
    .get('/ProgramInfo', async (ctx, next) => {
    const { ID, offset, amount } = ctx.query;
    const ProgramInfoArray = JSON.parse((0, fs_1.readFileSync)(WorkDir + 'ProgramInfos.json', 'utf-8'));
    if (ID === undefined)
        ctx.body = ProgramInfoArray;
    else {
        for (let i = 0; i < ProgramInfoArray.length; i++)
            if (Number(ID) === ProgramInfoArray[i].ID) {
                ctx.body = ProgramInfoArray[i];
                break;
            }
    }
});
app.use((0, koa_mount_1.default)('/static', (0, koa_static_1.default)('C:/Users/37465/Desktop/project/smart-sanitation-server/src/data/static')));
//app.use(cabin.middleware)
app.use(router.routes());
app.listen(9996);
console.log('server start at http://localhost:9996');

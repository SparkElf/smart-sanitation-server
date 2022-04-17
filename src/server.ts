import Koa from 'koa'
import Static from 'koa-static'
import Cabin from 'cabin'
import Mount from 'koa-mount'
import Router from 'koa-router'
import { readFileSync } from 'fs'

const app = new Koa()
const cabin = new Cabin()
const router = new Router()
const WorkDir = "C:/Users/37465/Desktop/project/smart-sanitation-server/src/data/"
app.use(async (ctx, next) => {//拦截器
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});
router
    .get('/WorkerInfo', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const WorkerInfoArray = JSON.parse(readFileSync(WorkDir + 'WorkerInfos.json', 'utf-8'))
        console.log(WorkerInfoArray)
        if (ID === undefined)
            ctx.body = WorkerInfoArray
        else {
            for (let i = 0; i < WorkerInfoArray.length; i++)
                if (Number(ID) === WorkerInfoArray[i].ID)
                    ctx.body = WorkerInfoArray[i]
            ctx.body = ""
        }
    })
    .get('/WorkerState', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const WorkerStateArray = JSON.parse(readFileSync(WorkDir + 'WorkerStatesy.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = WorkerStateArray
        else {
            for (let i = 0; i < WorkerStateArray.length; i++)
                if (Number(ID) === WorkerStateArray[i].ID)
                    ctx.body = WorkerStateArray[i]
            ctx.body = ""
        }
    })
    .get('/WorkState', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const WorkStateArray = JSON.parse(readFileSync(WorkDir + 'WorkStates.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = WorkStateArray
        else {
            console.log('success')
            for (let i = 0; i < WorkStateArray.length; i++)
                if (Number(ID) === WorkStateArray[i].ID) {
                    ctx.body = WorkStateArray[i]
                    break;
                }
        }
    })
    .get('/CollectionInfo', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const CollectionInfoArray = JSON.parse(readFileSync(WorkDir + 'CollectionInfos.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = CollectionInfoArray
        else {
            for (let i = 0; i < CollectionInfoArray.length; i++)
                if (Number(ID) === CollectionInfoArray[i].ID) {
                    ctx.body = CollectionInfoArray[i]
                    break
                }
        }
    })
    .get('/AreaInfo', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const AreaInfoArray = JSON.parse(readFileSync(WorkDir + 'AreaInfos.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = AreaInfoArray
        else {
            for (let i = 0; i < AreaInfoArray.length; i++)
                if (Number(ID) === AreaInfoArray[i].ID) {
                    ctx.body = AreaInfoArray[i]
                    break
                }
        }
    })
    .get('/MachineInfo', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const MachineInfoArray = JSON.parse(readFileSync(WorkDir + 'MachineInfos.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = MachineInfoArray
        else {
            for (let i = 0; i < MachineInfoArray.length; i++)
                if (Number(ID) === MachineInfoArray[i].ID) {
                    ctx.body = MachineInfoArray[i]
                    break
                }
        }
    })
    .get('/ProgramInfo', async (ctx, next) => {
        const { ID, offset, amount } = ctx.query
        const ProgramInfoArray = JSON.parse(readFileSync(WorkDir + 'ProgramInfos.json', 'utf-8'))
        if (ID === undefined)
            ctx.body = ProgramInfoArray
        else {
            for (let i = 0; i < ProgramInfoArray.length; i++)
                if (Number(ID) === ProgramInfoArray[i].ID) {
                    ctx.body = ProgramInfoArray[i]
                    break
                }
        }
    })



app.use(Mount('/static', Static('C:/Users/37465/Desktop/project/smart-sanitation-server/src/data/static')))

//app.use(cabin.middleware)
app.use(router.routes())
app.listen(9996)

console.log('server start at http://localhost:9996')
import { randomInt } from "./Number"

const name = [
    '王安生', '岳列洋', '周卓浩', '张顺谷', '潘恩依', '易江维', '张灶冲', '张淮森'
    , '叶致力', '张长乐', '岳俊', "周锦"
]
const address = [
    "方浜西路", "济南路114弄", "太平桥公园", "南普庆里", "淡水路229弄", "南普庆里", "上海交通大学",
    "徐家汇路", "建国中路永里二小区", "上海青西郊野公园", "西塘互通", "花米庄行景区"
]
const machineType = ['厨余垃圾箱', '可回收垃圾箱', '其他垃圾箱', '有害垃圾箱']
const areaType = ["社区", '景点', '公共', '餐饮', '商城']
const phone = [
    '15673161932',
    '15672685352',
    '13955248621',
    '13951258255',
    '15785233522',
    '18181158522',
    '18722552252',
    '15482255685',
    '15822563325',
    '13745625255',
    '13958637522',
    '15252288922'
]
export function generateWorkerInfos(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        const type = randomInt(1, 3)
        let capacity, weight, transport
        switch (type) {
            case 1:
                capacity = 2, weight = 800, transport = "小型垃圾车"
                break;
            case 2:
                capacity = 5, weight = 1500, transport = "中型垃圾车"
                break;
            case 3:
                capacity = 8, weight = 2000, transport = "大型垃圾车"
                break;
            default:
                break;
        }
        data.push({
            ID: 17460 + i,
            name: name[i],
            avatar: "",
            phone: "",
            performance: randomInt(69, 95),
            capacity: capacity,
            weight: weight,
            transport: transport,
            atWork: Math.random() < 0.3 ? false : true
        })
    }
    return data
}
export function generateWorkerStates(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            location: null,
            /**
             * 垃圾点处理数
             */
            count: randomInt(3, 10),
            /**
             * 总垃圾处理量
             */
            totalWeight: randomInt(1, 200),
            totalVolume: randomInt(1, 20),
            /**
             * 总路程
             */
            totalDist: randomInt(1, 5),
            time: new Date(),
        })
    }
    return data
}
export function generateWorkStates(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            ID: 17460 + i,
            collectionID: 300 + i,
            areaID: i,
            /**
             * 已经工作的时间
             */
            totalHours: randomInt(1, 6),
            /**
             * 预估剩余时间
             */
            estimatedHours: randomInt(1, 3),
            /**
             * 到目标垃圾点工作的累计距离
             */
            totalDist: randomInt(2, 5),
            /**
             * 当前本轮处理量
             */
            curWeight: randomInt(100, 300),
            curVolume: randomInt(0, 7),
            time: new Date(),
        })
    }
    return data
}
export function generateCollectionInfos(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            ID: 300 + i,
            areaID: i,
            cateID: i,//分类ID
            location: null,
            address: address[i],
            damaged: randomInt(0, 20),
            /**
            * 垃圾堆放点的容量 升
            */
            capacity: randomInt(1, 5),
            weight: randomInt(1, 5)
        })
    }
    return data
}
export function generateAreaInfos(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            ID: 10000 + i,
            location: null,
            type: areaType[randomInt(0, 4)],
            address: address[i],
            damaged: randomInt(0, 20),
            score: randomInt(60, 90),
            workCount: randomInt(3, 7),
            /**
            * 平均垃圾量
            */
            capacity: randomInt(1, 5),
            weight: randomInt(1, 5),
            atWork: Math.random() < 0.3 ? false : true
        })
    }
    return data
}
export function generateMachineInfos(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            ID: 8000 + i,
            location: null,
            type: machineType[randomInt(0, 3)],
            address: address[i],
            damaged: Math.random() < 0.3 ? true : false,
            capacity: randomInt(1, 5),
            weight: randomInt(1, 5),
            avgCapacity: randomInt(1, 5),
            avgWeight: randomInt(1, 5),
        })
    }
    return data
}
export function generateProgramInfos(size = 12) {
    if (size > 12) size = 12
    const data = []
    for (let i = 0; i < size; i++) {
        data.push({
            ID: 13000 + i,
            phone: phone[randomInt(0, 11)],
            score: randomInt(1000, 5000),
            online: Math.random() < 0.3 ? false : true,
            avgtime: randomInt(1, 5),
            weigui: randomInt(1, 13),
            hegui: randomInt(10, 20),
        })
    }
    return data
}

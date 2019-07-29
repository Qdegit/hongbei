import Circle from "@views/circle"
import Home from "@views/home"
import Mine from "@views/mine"
import Question from "@views/question"
const routers =[
    {
        exact:true,
        to:"/",
        content:"学烘焙",
        path:"/",
        component:Home
    },
    {
        to:"/circle",
        content:"烘焙圈",
        path:"/circle",
        component:Circle
    },
    {
        to:"/question",
        content:"问答",
        path:"/question",
        component:Question
    },
    {
        to:"/mine",
        content:"我的小窝",
        path:"/mine",
        component:Mine
    }
]
export default {
    basename:"m",
    forceRefresh:false,
    routers
}
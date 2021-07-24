import Home from '../pages/home'
import User from '../pages/user'

export const routes =[
    {path:'/', exact:true, component:Home },
    {path:'/user', exact:false, component:User},
]
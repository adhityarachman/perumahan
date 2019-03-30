import Home from '@/views/General';
import About from '@/views/General/About';
import LoginAdmin from '@/views/Admin/Auth/LoginAdmin';
import LoginUser from '@/views/General/Auth/Login';
import Dashboard from '@/views/Dashboard'
const paths = [

    {
        name: 'Login User',
        path: '/login',
        component: LoginUser,
        meta: {
            hanyaGuest: true,
        },

    },
    {
        name: 'General',
        path: '/',
        component: Home,
        children: [
            {
                name:'About',
                path: '/about',
                component: About
            }
        ]
    },
    {
        name: 'Login Admin',
        path: '/login_admin',
        component: LoginAdmin,
        meta: {
            hanyaGuest: true,
        },


    },
    {
        name: 'Admin',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            hanyaAdmin: true,
        },
        children: [
            {
                path: '/table',
                component: About,
                meta: {
                    hanyaAdmin: true,
                },
            }
        ]
    }
]

export default paths
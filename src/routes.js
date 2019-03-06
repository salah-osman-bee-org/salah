import Home from './components/Home/Home.vue';
import Services from './components/Services/Services.vue';
import Products from './components/Products/Products.vue';
import ContactUs from './components/Contact-us/contact-us.vue';
import AboutUs from './components/About-us/about-us.vue';
import Allproducts from './components/Products/Allproducts/Allproducts.vue';
import Huny from './components/Products/Huny/Huny.vue';
import Bees from './components/Products/Bees/Bees.vue';
import Tools from './components/Products/Tools/Tools.vue';

import SubHeader from './components/shared/SubHeader.vue';
import AdminDashboard from './components/Admin/AminDashboard.vue';
import AddNewProduct from './components/Admin/AddNewProduct.vue';
import LogIN from './components/Admin/LogIN.vue';




export const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/products', component: Products },
    { path: '/about-us', component: AboutUs },
    { path: '/contact-us', component: ContactUs },
    { path: '/Allproducts', component: Allproducts },
    { path: '/Huny', component: Huny },
    { path: '/Bees', component: Bees },
    { path: '/Tools', component: Tools },
    { path: '/Subheader', component: SubHeader },
    { path: '/AdminDashboard', component: AdminDashboard },
    { path: '/AddNewProduct', component: AddNewProduct },
    { path: '/LogIN', component: LogIN },
]
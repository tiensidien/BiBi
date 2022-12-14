import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Aboutus from 'pages/Aboutus';
import ServiceAreas from 'pages/ServiceAreas';
import CustomizedInputBase from 'components/TextComponen';  
import ContractUs from 'pages/ContractUs';
import FAQs from 'pages/FAQs';
import AdminDashboard from 'pages/AdminDashboard';
import UsersManagement from 'pages/UsersManagement';
import CategoriesManagement from 'pages/CategoriesManagement';
import ProductsManagement from 'pages/ProductsManagement';


import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";


// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Admin from 'pages/Admin';


import ProfileDashboard from 'pages/ProfileDashboard';

import Products from 'pages/Products';
import ProductDetails from 'pages/ProductDetails';
import Cart from 'pages/Cart';



function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Products/Details" component={ProductDetails} />
            <Route exact path="/AboutUs" component={Aboutus} />
            <Route exact path="/ServiceAreas" component={ServiceAreas} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ProfileDashboard" component={ProfileDashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/ContractUs" component={ContractUs} />
            <Route exact path="/FAQs" component={FAQs} />
            <Route exact path="/Admindashboard" component={AdminDashboard} />
            <Route exact path="/UsersManagement" component={UsersManagement} />
            <Route exact path="/AdminsManagement" component={Admin} />
            <Route exact path="/CategoriesManagement" component={CategoriesManagement} />
            <Route exact path="/ProductsManagement" component={ProductsManagement} />
            <Route exact path="/Cart" component={Cart} />
          
            <Route exact path="/text" component={CustomizedInputBase} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;

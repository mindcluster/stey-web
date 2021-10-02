import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import ForgotPassword from '../views/ForgotPassword/ForgotPassword';
import Collaborator from '../views/Collaborator/Collaborator';
import CollaboratorDetail from '../views/Collaborator/CollaboratorDetail';
import MyProfile from '../views/Settings/MyProfile';
import MarketPlace from '../views/MarketPlace/MarketPlace';

export const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: PrincipalDashboard, name: 'home' },
    { path: '/forgot_password', component: ForgotPassword, name: 'forgot_password' },
    { path: '/collaborator', component: Collaborator, name: 'collaborator' },
    { path: '/collaborator/analysis', component: CollaboratorDetail, name: 'collaborator_detail' },
    { path: '/settings', component: MyProfile, name: 'settings' },
    { path: '/marketplace', component: MarketPlace, name: 'marketPlace' },
];
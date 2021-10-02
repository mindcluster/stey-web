import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import ForgotPassword from '../views/ForgotPassword/ForgotPassword';
import CollaboratorDetail from '../views/Collaborator/CollaboratorDetail';

export const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: PrincipalDashboard, name: 'home' },
    { path: '/forgot_password', component: ForgotPassword, name: 'forgot_password' },
    { path: '/collaborator/analysis', component: CollaboratorDetail, name: 'collaborator_detail' },
];
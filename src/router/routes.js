import Login from '../views/Login/Login';
import PrincipalDashboard from '../views/Dashboard/PrincipalDashboard';
import StudentDashboard from '../views/Dashboard/StudentDashboard';
import ClassroomDashboard from '../views/Dashboard/ClassroomDashboard';
import ForgotPassword from '../views/ForgotPassword/ForgotPassword';
import Importation from '../views/Importation/Importation';
import ImportActivity from '../views/Importation/ImportActivity';
import ImportAttendance from '../views/Importation/ImportAttendance';
import ExportActivity from '../views/Exportation/ExportActivity';
import ExportAttendance from '../views/Exportation/ExportAttendance';
import MyProfile from '../views/Profile/MyProfile';

export const routes = [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: PrincipalDashboard, name: 'home' },
    { path: '/forgot_password', component: ForgotPassword, name: 'forgot_password' },
    { path: '/collaborator', component: ForgotPassword, name: 'forgot_password' },

    { path: '/analysis/student', component: StudentDashboard, name: 'student' },
    { path: '/analysis/classroom', component: ClassroomDashboard, name: 'classroom' },

    { path: '/import', component: Importation, name: 'import' },
    { path: '/import/activity', component: ImportActivity, name: 'import_activity' },
    { path: '/import/attendance', component: ImportAttendance, name: 'import_attendance' },
    { path: '/export/activity', component: ExportActivity, name: 'export_activity' },
    { path: '/export/attendance', component: ExportAttendance, name: 'export_attendance' },
    { path: '/profile', component: MyProfile, name: 'profile' }
];
import React from 'react';

const Login = React.lazy(() => import('../views/defaultViews/LoginPage'));
const CommentsChart = React.lazy(() => import('../views/adminViews/CommentsChart/CommentsChart'));
const PersonsChart = React.lazy(() => import('../views/adminViews/PersonsChart'));
const GetMarksCurator = React.lazy(() => import('../views/teacherViews/GetMarksPage'));
const Profile = React.lazy(() => import('../views/teacherViews/Profile/MyProfile'));
const SetMarks = React.lazy(() => import('../views/teacherViews/SetMarks'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/teacher', exact: true, name: 'Login', component: Login },
  { path: '/teacher/clients', exact: true, name: 'Clients', component: PersonsChart },
  { path: '/teacher/comments', exact: true, name: 'Comments', component: CommentsChart },
  { path: '/teacher/getmarks', exact: true, name: 'Marks', component: GetMarksCurator },
  { path: '/teacher/set-marks', exact: true, name: 'Marks', component: SetMarks },
];

export default routes;
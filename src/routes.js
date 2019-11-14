import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const AddProject = React.lazy(() => import('./views/AddProject'));
const ViewProject = React.lazy(() => import('./views/ViewProject'));

const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/addProject', name: 'Add Project', component: AddProject },
	{ path: '/viewProject', name: 'View Project', component: ViewProject },
];

export default routes;

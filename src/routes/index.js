import TodosApp from '~/pages/TodosApp';
import Home from '~/pages/Home';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/todosapp',
        component: TodosApp,
    },
];

export default routes;

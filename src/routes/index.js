import TodosApp from '~/pages/TodosApp';
import Home from '~/pages/Home';
import CalculatorApp from '~/pages/CalculatorApp';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/todosapp',
        component: TodosApp,
    },
    {
        path: '/calculator',
        component: CalculatorApp,
    },
];

export default routes;

import { Link } from 'react-router-dom';

const NotFoundView = () => {
    <h1>
        404 Страница не найдена :(, перейдите на{' '}
        <Link to="/">домашнюю страницу</Link>
    </h1>
};

export default NotFoundView;
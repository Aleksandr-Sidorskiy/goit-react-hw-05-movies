import { PropTypes } from "prop-types";
import css from './Container.module.css';


const Container = ({children}) => {
    return (
        <div className={css.wrapper}>
            {children}
        </div>
    )
}

Container.propTypes = {
    children: PropTypes.element,
};

export default Container;
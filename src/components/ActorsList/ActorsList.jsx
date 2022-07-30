import { PropTypes } from "prop-types";
import Container from "components/Container";
import css from "./ActorsList.module.css";
import actorBg from '../../utilities/images/actor.png';

const ActorsList = ({ actors }) => {
    
    return (     
    <Container>
            <ul className={css.list}>
                {actors.map(({ id, name, photo }) => {
                    return (
                        <li key={id} className={css.item}>
                            <div className={css.wrapper}>
                                <img className={css.image}
                                    src={
                                        photo?`https://image.tmdb.org/t/p/w500/${photo}` : actorBg
                                    }
                                    alt={name}
                                />
                            </div>
                        </li>
                    )
                })}
                
        </ul>
    </Container>
    )
}


export default ActorsList;
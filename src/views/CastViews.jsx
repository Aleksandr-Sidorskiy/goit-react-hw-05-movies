import { useState, useEffect } from "react";
import ActorsList from "components/ActorsList";

const CastViews = () => {
    const [actors, setActors] = useState();
    return (
        <>
            actors && <ActorsList actors={ actors} />

        </>
    )
}

export default CastViews;
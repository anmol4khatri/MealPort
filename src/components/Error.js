import { useRouteError } from "react-router";

const Error = () => {

    const err = useRouteError();

    return(
        <>
            <h1>something went wrong !!</h1>
            <h2>{err.status} : {err.statusText}</h2>
        </>
        
    );
};

export default Error;
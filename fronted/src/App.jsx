import { useDispatch, useSelector } from "react-redux";

import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/userActions";
import { useEffect } from "react";

const App = () => {
    const { user } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        !user && dispatch(asynccurrentuser());
    }, [user]);

    return (
        <div className="py-10 px-[10%] font-thin">
            <Nav />
            <Mainroutes />
            
        </div>
    );
};

export default App;

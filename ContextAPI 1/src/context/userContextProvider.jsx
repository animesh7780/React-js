import UserContext from "./userContext";
import { useState } from "react";

const userContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return(
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
};

export default userContextProvider
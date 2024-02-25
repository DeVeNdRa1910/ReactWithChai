import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user , setUser] = useState(null)

    return (
        // we passing object inside value so that we can pass anything which we want
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
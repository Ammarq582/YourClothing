import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createDocumentWithSignUp } from "../utils/firebase.utils";

export const UserContext = createContext({
    user: null
})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChangedListener((user) => {
            if(user) {
                createDocumentWithSignUp(user)
            }
            setUser(user);
        })
    })

    const value = {user}

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
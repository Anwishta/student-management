const authContext = React.createContext({});
import { useEffect } from "react";
import { auth } from "../../services/firebase";

const authProvider = ({ children }) => {
    const [currentUser, setCurrentUser ] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <authContext.Provider value={{ currentUser, setCurrentUser  }}>
            {children}
        </authContext.Provider>
    );
};
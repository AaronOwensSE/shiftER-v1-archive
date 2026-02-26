// =================================================================================================
// External Dependencies
// =================================================================================================
import React from "react";
import * as SecureStore from "expo-secure-store";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import Login from "./screens/nonuser/Login.js";
import PasswordReset from "./screens/nonuser/PasswordReset.js";
import AccountCreation from "./screens/nonuser/AccountCreation.js";

import Groups from "./screens/user/Groups.js";
import Drafts from "./screens/user/Drafts.js";
import Schedules from "./screens/user/Schedules.js";
import Alerts from "./screens/user/Alerts.js";
import Profile from "./screens/user/Profile.js";

import Group from "./screens/group/Group.js";
import GroupSchedules from "./screens/group/GroupSchedules.js";
import GroupMembership from "./screens/group/GroupMembership.js";

import Schedule from "./screens/Schedule.js";

import Draft from "./screens/draft/Draft.js";
import DraftParticipation from "./screens/draft/DraftParticipation.js";

import apiClient from "./api-client.js";
import errorHandling from "./error-handling.js";

// =================================================================================================
// Component
// =================================================================================================
export default function App() {
    const [ sessionId, setSessionId ] = React.useState();
    const [ sessionIdAuthenticated, setSessionIdAuthenticated ] = React.useState(false);

    const getStoredSessionId = async () => {
        try {
            const storedSessionId = await SecureStore.getItemAsync("sessionId");
            setSessionId(storedSessionId);
        } catch (error) {}
    };

    const authenticateSessionId = async () => {
        const result = await apiClient.authenticateSessionId(sessionId);

        if (result.ok) {
            setSessionIdAuthenticated(true);
            setScreen("Groups");
        } else {
            await SecureStore.deleteItemAsync("sessionId");
        }
    };

    const restoreSession = async () => {
        await getStoredSessionId();
        await authenticateSessionId();
    };

    React.useEffect(() => {
        restoreSession();
    }, []);

    // Need to create a default screen so login screen doesn't flash while checking sessionId on
    // navigation.

    let defaultScreen;

    if (sessionIdAuthenticated) {
        defaultScreen = "Groups";
    } else {
        defaultScreen = "Login";
    }

    const [ screen, setScreen ] = React.useState(defaultScreen);

    const logIn = async ({ id, password }) => {
        let result;
        const apiLoginResult = await apiClient.logIn({ id, password });

        if (apiLoginResult.ok) {
            result = new errorHandling.Result();
            const sessionId = apiLoginResult.value;

            try {
                await SecureStore.setItemAsync("sessionId", sessionId);
            } catch (error) {
                result.ok = false;
                result.message = "Unable to store session ID.";

                return result;
            }

            result.ok = true;

            setSessionId(sessionId);
            setSessionIdAuthenticated(true);
            setScreen("Groups");
        } else {
            result = apiLoginResult;
        }

        return result;
    };

    const logOut = async () => {
        const result = await apiClient.logOut(sessionId);

        if (result.ok) {
            await SecureStore.deleteItemAsync("sessionId");
            setSessionId(null);
            setSessionIdAuthenticated(false);
            setScreen("Login");
        }

        // Should a failed logout request do anything?
        // Delete local session ID and navigate to login page even though database ID remains?
        // Display error message?
    };

    if (sessionIdAuthenticated) {
        switch (screen) {
            case "Groups":
                return <Groups onNavigate={setScreen} />;
            case "Drafts":
                return <Drafts onNavigate={setScreen} />;
            case "Schedules":
                return <Schedules onNavigate={setScreen} />;
            case "Profile":
                return <Profile onNavigate={setScreen} onLogout={logOut} />;
            case "Alerts":
                return <Alerts onNavigate={setScreen} />;
            default:
                return <Groups onNavigate={setScreen} />;
        }
    } else {
        switch (screen) {
            case "Login":
                return <Login onNavigate={setScreen} onLogin={logIn} />;
            case "AccountCreation":
                return <AccountCreation onNavigate={setScreen} />;
            case "PasswordReset":
                return <PasswordReset onNavigate={setScreen} />;
            default:
                return <Login onNavigate={setScreen} onLogin={logIn} />;
        }
    }
};

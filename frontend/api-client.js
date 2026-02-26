// =================================================================================================
// Internal Dependencies
// =================================================================================================
import errorHandling from "./error-handling.js";

// =================================================================================================
// Public API
// =================================================================================================
async function createUser({ id, password, name, email }) {
    const result = await fetchRequest("/create-user", "POST", { id, password, name, email });

    return result;
}

async function logIn({ id, password }) {
    const result = await fetchRequest("/log-in", "POST", { id, password });

    return result;
}

async function authenticateSession(id) {
    const result = await fetchRequest("/authenticate-session", "POST", {id});

    return result;
}

async function logOut(id) {
    const result = await fetchRequest("/log-out", "DELETE", {id});

    return result;
}

const apiClient = { createUser, logIn, authenticateSession, logOut };
export default apiClient;

export const testing =
    process.env.NODE_ENV === "test" ?
    { createUser, logIn, authenticateSession, logOut, fetchRequest }
    : {};

// =================================================================================================
// Helper Functions
// =================================================================================================
async function fetchRequest(route, method, body) {
    const urlParts = [ process.env.EXPO_PUBLIC_API_URL, route ];
    const url = urlParts.join("");

    const response = await fetch(
        url,
        {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }
    );

    let result;

    if (response.ok) {
        result = await response.json();
    } else {
        result = new errorHandling.Result();
        result.ok = false;
        result.message = "Request failed.";
    }

    return result;
}

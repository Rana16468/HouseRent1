
import { jwtDecode } from "jwt-decode";


export const tokenVarified = (tokenKey: string) => {
    const token = localStorage.getItem(tokenKey);
    if (!token) return null;

    try {
        const decoded = jwtDecode(token) as any;
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            localStorage.removeItem(tokenKey);
            return null;
        }

        return decoded; // { id, email, role, iat, exp }
    } catch (error) {
        return null;
    }
};
export const tokenRecorded = (token: string, tokenName: string): boolean => {
    try {
        if (!token || !tokenName) {
            throw new Error("Token or token name missing");
        }

        localStorage.setItem(tokenName, token);
        return true; // ✅ success
    } catch (error) {
        console.error("Failed to store token:", error);
        return false; // ❌ failed
    }
};

export const deleteToken = (tokenName: string) => {

    if (!tokenName) {
        throw new Error("Token or token name missing");
    }

    localStorage.removeItem(tokenName);

    return true; 

}

export const getToken = (tokenName: string) => {

    try {

        return localStorage.getItem(tokenName);

    }
    catch (error) {
        console.error("Failed to store token:", error);
        return false; // ❌ failed
    }


}


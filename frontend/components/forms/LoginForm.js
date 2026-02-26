// =================================================================================================
// External Dependencies
// =================================================================================================
import React from "react";
import { View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import FormField from "./FormField.js";
import ValidationMessage from "./ValidationMessage.js";
import ShifterButton from "../ShifterButton.js";

import apiClient from "../../api-client.js";

// =================================================================================================
// Component
// =================================================================================================
const LoginForm = ({ style, onNavigate, onLogin }) => {
    const [ userId, setUserId ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ loginMessage, setLoginMessage ] = React.useState("");

    const handleLoginSubmission = async () => {
        const result = await onLogin({ id: userId, password: password });

        if (!result.ok) {
            setLoginMessage(result.message);
        }
    };

    return(
        <View style={[ loginFormStyles.outerView, style ]}>
            <FormField style={loginFormStyles.formField} text="User ID" onChangeText={setUserId} />

            <FormField
                style={loginFormStyles.formField}
                text="Password"
                obscureInput={true}
                onChangeText={setPassword}
            />

            <ShifterButton
                style={loginFormStyles.loginButton} text="Log In" onPress={handleLoginSubmission}
            />

            <ValidationMessage style={loginFormStyles.loginMessage} text={loginMessage} />

            <View style={loginFormStyles.innerView}>
                <ShifterButton
                    style={loginFormStyles.recoverPasswordButton}
                    text={"Reset\nPassword"}
                    onPress={ () => { onNavigate("PasswordReset"); } }
                />

                <ShifterButton
                    style={loginFormStyles.createAccountButton}
                    text={"Create\nAccount"}
                    onPress={ () => { onNavigate("AccountCreation"); } }
                />
            </View>
        </View>
    );
};

export default LoginForm;

// =================================================================================================
// Styles
// =================================================================================================
const loginFormStyles = StyleSheet.create({
    outerView: {
        width: 250, // Fallback sizing
        alignItems: "center"
    },

    formField: {
        width: "100%",
        margin: 5
    },

    loginButton: {
        height: 40,
        width: "100%",
        margin: 5
    },

    loginMessage: {
        width: "100%"
    },

    innerView: {
        width: "100%",
        flexDirection: "row"
    },

    recoverPasswordButton: {
        flex: 1,
        margin: 5,
        marginLeft: 0
    },

    createAccountButton: {
        flex: 1,
        margin: 5,
        marginRight: 0
    }
});

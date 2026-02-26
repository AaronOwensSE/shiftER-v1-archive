// =================================================================================================
// External Dependencies
// =================================================================================================
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import FormField from "./FormField.js";
import ValidationMessage from "./ValidationMessage.js";
import ShifterButton from "../ShifterButton.js";

import apiClient from "../../api-client.js";
import constants from "../../constants.js";
import validation from "../../validation.js";

// =================================================================================================
// Component
// =================================================================================================
const AccountCreationForm = ({ style, contentContainerStyle, onNavigate }) => {
    const [ userId, setUserId ] = React.useState("");
    const [ displayName, setDisplayName ] = React.useState("");
    const [ email1, setEmail1 ] = React.useState("");
    const [ email2, setEmail2 ] = React.useState("");
    const [ password1, setPassword1 ] = React.useState("");
    const [ password2, setPassword2 ] = React.useState("");
    const [ createAccountMessage, setCreateAccountMessage ] = React.useState("");
    
    const formStateIsValid = () => {
        return validation.isValidUserId(userId)
            && validation.isValidUserName(displayName)
            && validation.isValidUserEmail(email1)
            && validation.isValidUserPassword(password1)
            && email1 == email2
            && password1 == password2;
    };

    const getUserIdValidationMessage = () => {
        const userIdValid = validation.isValidUserId(userId);
        let userIdValidationMessage;

        if (userIdValid) {
            userIdValidationMessage = "";
        } else {
            userIdValidationMessage =
                `${constants.USER_ID_MIN_LENGTH} to ${constants.USER_ID_MAX_LENGTH} characters`;
        }

        return userIdValidationMessage;
    };

    const getDisplayNameValidationMessage = () => {
        const displayNameValid = validation.isValidUserName(displayName);
        let displayNameValidationMessage;

        if (displayNameValid) {
            displayNameValidationMessage = "";
        } else {
            displayNameValidationMessage =
                `${constants.USER_NAME_MIN_LENGTH} to ${constants.USER_NAME_MAX_LENGTH} characters`;
        }

        return displayNameValidationMessage;
    };

    const getEmail1ValidationMessage = () => {
        const email1Valid = validation.isValidUserEmail(email1);
        let email1ValidationMessage;

        if (email1Valid) {
            email1ValidationMessage = "";
        } else {
            email1ValidationMessage =
                `${constants.USER_EMAIL_MIN_LENGTH} to ${constants.USER_EMAIL_MAX_LENGTH} characters`;
        }

        return email1ValidationMessage;
    };

    const getEmail2ValidationMessage = () => {
        const email2Valid = validation.isValidUserEmail(email2);
        let email2ValidationMessage;

        if (email2Valid && email1 == email2) {
            email2ValidationMessage = "";
        } else {
            email2ValidationMessage =
                `${constants.USER_EMAIL_MIN_LENGTH} to ${constants.USER_EMAIL_MAX_LENGTH} characters and matches email field`;
        }

        return email2ValidationMessage;
    };

    const getPassword1ValidationMessage = () => {
        const password1Valid = validation.isValidUserPassword(password1);
        let password1ValidationMessage;

        if (password1Valid) {
            password1ValidationMessage = "";
        } else {
            password1ValidationMessage =
                `${constants.USER_PASSWORD_MIN_LENGTH} to ${constants.USER_PASSWORD_MAX_LENGTH} characters`;
        }

        return password1ValidationMessage;
    };

    const getPassword2ValidationMessage = () => {
        const password2Valid = validation.isValidUserPassword(password2);
        let password2ValidationMessage;

        if (password2Valid && password1 == password2) {
            password2ValidationMessage = "";
        } else {
            password2ValidationMessage =
                `${constants.USER_PASSWORD_MIN_LENGTH} to ${constants.USER_PASSWORD_MAX_LENGTH} characters and matches password field`;
        }

        return password2ValidationMessage;
    };

    const handleCreateUser = async () => {
        const result = await apiClient.createUser(
            { id: userId, password: password1, name: displayName, email: email1 }
        );

        if (result.ok) {
            onNavigate("Login");
        } else {
            setCreateAccountMessage(result.message);
        }
    };

    const createAccountButtonDisabled = !formStateIsValid();
    
    const userIdValidationMessage = getUserIdValidationMessage();
    const displayNameValidationMessage = getDisplayNameValidationMessage();
    const email1ValidationMessage = getEmail1ValidationMessage();
    const email2ValidationMessage = getEmail2ValidationMessage();
    const password1ValidationMessage = getPassword1ValidationMessage();
    const password2ValidationMessage = getPassword2ValidationMessage();

    return(
        <ScrollView
            style={[ accountCreationFormStyles.scrollView, style ]}

            contentContainerStyle={[
                accountCreationFormStyles.scrollViewContentContainer,
                contentContainerStyle
            ]}
        >
            <FormField
                style={accountCreationFormStyles.formField}
                text="User ID"
                onChangeText={setUserId}
            />
            
            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={userIdValidationMessage}
            />

            <FormField
                style={accountCreationFormStyles.formField}
                text="Display Name"
                onChangeText={setDisplayName}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={displayNameValidationMessage}
            />

            <FormField
                style={accountCreationFormStyles.formField} text="Email" onChangeText={setEmail1}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={email1ValidationMessage}
            />

            <FormField 
                style={accountCreationFormStyles.formField}
                text="Confirm Email"
                onChangeText={setEmail2}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={email2ValidationMessage}
            />

            <FormField
                style={accountCreationFormStyles.formField}
                text="Password"
                obscureInput={true}
                onChangeText={setPassword1}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={password1ValidationMessage}
            />

            <FormField
                style={accountCreationFormStyles.formField}
                text="Confirm Password"
                obscureInput={true}
                onChangeText={setPassword2}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={password2ValidationMessage}
            />

            <ShifterButton
                style={accountCreationFormStyles.shifterButton}
                text="Create Account"
                disabled={createAccountButtonDisabled}
                onPress={handleCreateUser}
            />

            <ValidationMessage
                style={accountCreationFormStyles.validationMessage}
                text={createAccountMessage}
            />
        </ScrollView>
    );
};

export default AccountCreationForm;

// =================================================================================================
// Styles
// =================================================================================================
const accountCreationFormStyles = StyleSheet.create({
    scrollView: {
        width: 250, // Fallback sizing
    },

    scrollViewContentContainer: {
        alignItems: "center"
    },

    formField: {
        width: "100%",
        margin: 5
    },

    validationMessage: {
        width: "100%"
    },

    shifterButton: {
        height: 40,
        width: "100%",
        margin: 5
    }
});

// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import FormField from "./FormField.js";
import ShifterButton from "../ShifterButton.js";

// =================================================================================================
// Component
// =================================================================================================
const PasswordResetForm = ({style}) => {
    return(
        <View style={[ passwordResetFormStyles.view, style ]}>
            <FormField style={passwordResetFormStyles.formField} text="User ID" />
            <ShifterButton style={passwordResetFormStyles.shifterButton} text="Reset Password" />
        </View>
    );
};

export default PasswordResetForm;

// =================================================================================================
// Styles
// =================================================================================================
const passwordResetFormStyles = StyleSheet.create({
    view: {
        width: 250,  // Fallback sizing
        alignItems: "center"
    },

    formField: {
        width: "100%",
        margin: 5
    },

    shifterButton: {
        height: 40,
        width: "100%",
        margin: 5
    }
});

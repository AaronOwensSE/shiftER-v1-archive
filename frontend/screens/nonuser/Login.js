// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import BigLogo from "../../components/logos/BigLogo.js";
import LoginForm from "../../components/forms/LoginForm.js";

// =================================================================================================
// Component
// =================================================================================================
const Login = ({onNavigate, onLogin}) => {
    return(
        <View style={[ loginStyles.screenView ]}>
            <BigLogo style={loginStyles.bigLogo} />

            <View style={loginStyles.contentView}>
                <LoginForm
                    style={loginStyles.loginForm}
                    onNavigate={onNavigate}
                    onLogin={onLogin}
                />
            </View>
        </View>
    );
};

export default Login;

// =================================================================================================
// Styles
// =================================================================================================
const loginStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    bigLogo: {
        marginTop: 30
    },

    contentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    loginForm: {
        width: "75%"
    }
});

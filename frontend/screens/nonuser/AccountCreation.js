// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import BigLogo from "../../components/logos/BigLogo.js";
import ShifterButton from "../../components/ShifterButton.js";
import AccountCreationForm from "../../components/forms/AccountCreationForm.js";

// =================================================================================================
// Component
// =================================================================================================
const AccountCreation = ({onNavigate}) => {
    return(
        <View style={accountCreationStyles.screenView}>
            <BigLogo style={accountCreationStyles.bigLogo} />
            
            <ShifterButton
                style={accountCreationStyles.backButton}
                text="Back"
                onPress={ () => { onNavigate("Login") } }
            />

            <View style={accountCreationStyles.contentView}>
                <AccountCreationForm
                    style={accountCreationStyles.accountCreationForm} onNavigate={onNavigate}
                />
            </View>
        </View>
    );
};

export default AccountCreation;

// =================================================================================================
// Styles
// =================================================================================================
const accountCreationStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    bigLogo: {
        marginTop: 30
    },

    backButton: {
        alignSelf: "flex-start"
    },

    contentView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    accountCreationForm: {
        width: "75%"
    }
});

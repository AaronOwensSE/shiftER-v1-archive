// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import Dashboard from "../../components/navigation/Dashboard.js";
import H1 from "../../components/headings/H1.js";
import Card from "../../components/cards/Card.js";
import TitleRow from "../../components/cards/TitleRow.js";
import FormField from "../../components/forms/FormField.js";
import RightAlignedRow from "../../components/cards/RightAlignedRow.js";
import ShifterButton from "../../components/ShifterButton.js";

// =================================================================================================
// Component
// =================================================================================================
const Profile = ({ onNavigate, onLogout }) => {
    return(
        <View style={profileStyles.screenView}>
            <Dashboard style={profileStyles.dashboard} onNavigate={onNavigate} />
            
            <ScrollView
                style={profileStyles.scrollView}
                contentContainerStyle={profileStyles.scrollViewContentContainer}
            >
                <H1 style={profileStyles.h1} text="Profile" />

                <Card style={profileStyles.card}>
                    <TitleRow
                        style={profileStyles.titleRow} titleText="User ID" tagText="user123"
                    />
                </Card>

                <Card style={profileStyles.card}>
                    <TitleRow
                        style={profileStyles.titleRow} titleText="Display Name" tagText="User 123"
                    />

                    <FormField style={profileStyles.formField} text="New Display Name" />

                    <RightAlignedRow style={profileStyles.rightAlignedRow}>
                        <ShifterButton style={profileStyles.shifterButton} text="Update" />
                    </RightAlignedRow>
                </Card>

                <Card style={profileStyles.card}>
                    <TitleRow
                        style={profileStyles.titleRow}
                        titleText="Email"
                        tagText="user123@example.com"
                    />

                    <FormField style={profileStyles.formField} text="New Email" />
                    <FormField style={profileStyles.formField} text="Confirm New Email" />

                    <RightAlignedRow style={profileStyles.rightAlignedRow}>
                        <ShifterButton style={profileStyles.shifterButton} text="Update" />
                    </RightAlignedRow>
                </Card>

                <Card style={profileStyles.card}>
                    <TitleRow style={profileStyles.titleRow} titleText="Password" />

                    <FormField
                        style={profileStyles.formField} text="New Password" obscureInput={true}
                    />

                    <FormField
                        style={profileStyles.formField}
                        text="Confirm New Password"
                        obscureInput={true}
                    />

                    <RightAlignedRow style={profileStyles.rightAlignedRow}>
                        <ShifterButton style={profileStyles.shifterButton} text="Update" />
                    </RightAlignedRow>
                </Card>

                <ShifterButton
                    style={profileStyles.shifterButton} text="Log Out" onPress={onLogout}
                />
            </ScrollView>
        </View>
    );
};

export default Profile;

// =================================================================================================
// Styles
// =================================================================================================
const profileStyles = StyleSheet.create({
	screenView: {
		flex: 1,
		backgroundColor: "white"
	},
	
	dashboard: {
		marginTop: 30
	},
	
	scrollView: {
	},
	
	scrollViewContentContainer: {
		alignItems: "center"
	},
	
	h1: {
	},

    card: {
        width: "85%",
        margin: 5
    },

    titleRow: {
    },

    formField: {
    },

    rightAlignedRow: {
    },

    shifterButton: {
        margin: 5
    }
});

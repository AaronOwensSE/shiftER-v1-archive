// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import GroupDashboard from "../../components/navigation/GroupDashboard.js";
import ShifterButton from "../../components/ShifterButton.js";
import H1 from "../../components/headings/H1.js";
import H2 from "../../components/headings/H2.js";
import Card from "../../components/cards/Card.js";
import TitleRow from "../../components/cards/TitleRow.js";
import FormField from "../../components/forms/FormField.js";
import RightAlignedRow from "../../components/cards/RightAlignedRow.js";

// =================================================================================================
// Component
// =================================================================================================
const GroupMembership = () => {
	return(
		<View style={groupMembershipStyles.screenView}>
			<GroupDashboard style={groupMembershipStyles.groupDashboard} />
            <ShifterButton style={groupMembershipStyles.backButton} text="Back" />
			
			<ScrollView
                style={groupMembershipStyles.scrollView}
                contentContainerStyle={groupMembershipStyles.scrollViewContentContainer}
            >
				<H1 style={groupMembershipStyles.h1} text="Group Name (Group ID)" />
                <H2 style={groupMembershipStyles.h2} text="Membership" />

                <Card style={groupMembershipStyles.card}>
                    <TitleRow style={groupMembershipStyles.titleRow} titleText="Invite User" />
                    <FormField style={groupMembershipStyles.formField} text="User ID" />

                    <RightAlignedRow style={groupMembershipStyles.rightAlignedRow}>
                        <ShifterButton style={groupMembershipStyles.shifterButton} text="Invite" />
                    </RightAlignedRow>
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow}
                        titleText="User 1"
                        tagText="Join Request"
                    />

                    <RightAlignedRow style={groupMembershipStyles.rightAlignedRow}>
                        <ShifterButton style={groupMembershipStyles.shifterButton} text="Accept" />
                        <ShifterButton style={groupMembershipStyles.shifterButton} text="Reject" />
                    </RightAlignedRow>
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow}
                        titleText="User 2"
                        tagText="Join Request"
                    />

                    <RightAlignedRow style={groupMembershipStyles.rightAlignedRow}>
                        <ShifterButton style={groupMembershipStyles.shifterButton} text="Accept" />
                        <ShifterButton style={groupMembershipStyles.shifterButton} text="Reject" />
                    </RightAlignedRow>
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow}
                        titleText="User 3"
                        tagText="Admin"
                    />
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow} titleText="User 4" tagText="Admin"
                    />
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow} titleText="User 5" tagText="Member"
                    />
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow} titleText="User 6" tagText="Member"
                    />
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow}
                        titleText="User 7"
                        tagText="Invitation Pending"
                    />
                </Card>

                <Card style={groupMembershipStyles.card}>
                    <TitleRow
                        style={groupMembershipStyles.titleRow}
                        titleText="User 8"
                        tagText="Invitation Pending"
                    />
                </Card>
			</ScrollView>
		</View>
	);
};

export default GroupMembership;

// =================================================================================================
// Styles
// =================================================================================================
const groupMembershipStyles = StyleSheet.create({
	screenView: {
		flex: 1,
		backgroundColor: "white"
	},
	
	groupDashboard: {
		marginTop: 30
	},

    backButton: {
        alignSelf: "flex-start"
    },
	
	scrollView: {
	},
	
	scrollViewContentContainer: {
		alignItems: "center"
	},
	
	h1: {
	},

    h2: {
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

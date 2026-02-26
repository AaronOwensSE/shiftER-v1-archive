// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import Dashboard from "../../components/navigation/Dashboard.js";
import H1 from "../../components/headings/H1.js";
import H2 from "../../components/headings/H2.js";
import Card from "../../components/cards/Card.js";
import TitleRow from "../../components/cards/TitleRow.js";
import RightAlignedRow from "../../components/cards/RightAlignedRow.js";
import ShifterButton from "../../components/ShifterButton.js";
import TextRow from "../../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Alerts = ({ onNavigate }) => {
    return(
        <View style={alertStyles.screenView}>
            <Dashboard style={alertStyles.dashboard} onNavigate={onNavigate} />
            
            <ScrollView
                style={alertStyles.scrollView}
                contentContainerStyle={alertStyles.scrollViewContentContainer}
            >
                <H1 style={alertStyles.h1} text="Alerts" />
                <H2 style={alertStyles.h2} text="Invitations" />

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    
                    <RightAlignedRow style={alertStyles.rightAlignedRow}>
                        <ShifterButton style={alertStyles.shifterButton} text="Accept" />
                        <ShifterButton style={alertStyles.shifterButton} text="Reject" />
                    </RightAlignedRow>
                </Card>

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    
                    <RightAlignedRow style={alertStyles.rightAlignedRow}>
                        <ShifterButton style={alertStyles.shifterButton} text="Accept" />
                        <ShifterButton style={alertStyles.shifterButton} text="Reject" />
                    </RightAlignedRow>
                </Card>

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    
                    <RightAlignedRow style={alertStyles.rightAlignedRow}>
                        <ShifterButton style={alertStyles.shifterButton} text="Accept" />
                        <ShifterButton style={alertStyles.shifterButton} text="Reject" />
                    </RightAlignedRow>
                </Card>

                <H2 style={alertStyles.h2} text="Requests" />

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />

                    <TextRow style={alertStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />

                    <TextRow style={alertStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={alertStyles.card}>
                    <TitleRow
                        style={alertStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    
                    <TextRow style={alertStyles.textRow} leftText="17 members" />
                </Card>
            </ScrollView>
        </View>
    );
};

export default Alerts;

// =================================================================================================
// Styles
// =================================================================================================
const alertStyles = StyleSheet.create({
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

    h2: {
    },

    card: {
        width: "85%",
        margin: 5
    },

    titleRow: {
    },

    rightAlignedRow: {
    },

    shifterButton: {
        margin: 5
    },

    textRow: {
    }
});

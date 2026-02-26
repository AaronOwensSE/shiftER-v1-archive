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
import TextRow from "../../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Schedules = ({ onNavigate }) => {
    return(
        <View style={scheduleStyles.screenView}>
            <Dashboard style={scheduleStyles.dashboard} onNavigate={onNavigate} />
            
            <ScrollView
                style={scheduleStyles.scrollView}
                contentContainerStyle={scheduleStyles.scrollViewContentContainer}
            >
                <H1 style={scheduleStyles.h1} text="Schedules" />
                <H2 style={scheduleStyles.h2} text="Current" />

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <H2 style={scheduleStyles.h2} text="Upcoming" />

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={scheduleStyles.card}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />
                    <TextRow style={scheduleStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>
            </ScrollView>
        </View>
    );
};

export default Schedules;

// =================================================================================================
// Styles
// =================================================================================================
const scheduleStyles = StyleSheet.create({
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

    textRow: {
    }
});

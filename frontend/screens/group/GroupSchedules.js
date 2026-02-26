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
import TextRow from "../../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const GroupSchedules = () => {
    return(
        <View style={groupSchedulesStyles.screenView}>
            <GroupDashboard style={groupSchedulesStyles.groupDashboard} />
            <ShifterButton style={groupSchedulesStyles.backButton} text="Back" />
            
            <ScrollView
                style={groupSchedulesStyles.scrollView}
                contentContainerStyle={groupSchedulesStyles.scrollViewContentContainer}
            >
                <H1 style={groupSchedulesStyles.h1} text="Group Name (Group ID)" />
                <H2 style={groupSchedulesStyles.h2} text="Schedules" />

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>

                <Card style={groupSchedulesStyles.card}>
                    <TitleRow
                        style={groupSchedulesStyles.titleRow}
                        titleText="Group Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={groupSchedulesStyles.textRow} leftText="00/00/0000 to 00/00/0000"
                    />
                </Card>
            </ScrollView>
        </View>
    );
};

export default GroupSchedules;

// =================================================================================================
// Styles
// =================================================================================================
const groupSchedulesStyles = StyleSheet.create({
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

    textRow: {
    }
});

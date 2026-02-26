// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import GroupDashboard from "../components/navigation/GroupDashboard.js";
import ShifterButton from "../components/ShifterButton.js";
import H1 from "../components/headings/H1.js";
import Card from "../components/cards/Card.js";
import TitleRow from "../components/cards/TitleRow.js";
import TextRow from "../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Schedule = () => {
    return(
        <View style={scheduleStyles.screenView}>
            <GroupDashboard style={scheduleStyles.groupDashboard} />
            <ShifterButton style={scheduleStyles.backButton} text="Back" />

            <ScrollView
                style={scheduleStyles.scrollView}
                contentContainerStyle={scheduleStyles.scrollViewContentContainer}
            >
                <H1 style={scheduleStyles.h1} text="Group Name (Group ID)" />

                <Card style={scheduleStyles.scheduleCard}>
                    <TitleRow
                        style={scheduleStyles.titleRow}
                        titleText="Schedule Name"
                        tagText="Schedule ID"
                    />

                    <TextRow
                        style={scheduleStyles.textRow} leftText="Start" rightText="00/00/0000"
                    />

                    <TextRow
                        style={scheduleStyles.textRow} leftText="End" rightText="00/00/0000"
                    />

                    <Card style={scheduleStyles.shiftCard}>
                        <TitleRow
                            style={scheduleStyles.titleRow} titleText="User 1" tagText="Shift ID"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="Start"
                            rightText="00/00/0000 00:00 AM"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="End"
                            rightText="00/00/0000 00:00 AM"
                        />
                    </Card>

                    <Card style={scheduleStyles.shiftCard}>
                        <TitleRow
                            style={scheduleStyles.titleRow} titleText="User 2" tagText="Shift ID"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="Start"
                            rightText="00/00/0000 00:00 AM"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="End"
                            rightText="00/00/0000 00:00 AM"
                        />
                    </Card>

                    <Card style={scheduleStyles.shiftCard}>
                        <TitleRow
                            style={scheduleStyles.titleRow} titleText="User 3" tagText="Shift ID"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="Start"
                            rightText="00/00/0000 00:00 AM"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="End"
                            rightText="00/00/0000 00:00 AM"
                        />
                    </Card>

                    <Card style={scheduleStyles.shiftCard}>
                        <TitleRow
                            style={scheduleStyles.titleRow} titleText="User 4" tagText="Shift ID"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="Start"
                            rightText="00/00/0000 00:00 AM"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="End"
                            rightText="00/00/0000 00:00 AM"
                        />
                    </Card>

                    <Card style={scheduleStyles.shiftCard}>
                        <TitleRow
                            style={scheduleStyles.titleRow} titleText="User 5" tagText="Shift ID"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="Start"
                            rightText="00/00/0000 00:00 AM"
                        />

                        <TextRow
                            style={scheduleStyles.textRow}
                            leftText="End"
                            rightText="00/00/0000 00:00 AM"
                        />
                    </Card>
                </Card>
            </ScrollView>
        </View>
    );
};

export default Schedule;

// =================================================================================================
// Styles
// =================================================================================================
const scheduleStyles = StyleSheet.create({
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

    scheduleCard: {
        width: "85%",
        margin: 5
    },

    titleRow: {
    },

    textRow: {
    },

    shiftCard: {
        alignSelf: "center",
        width: "95%",
        margin: 5,
        borderWidth: 2,
        borderColor: "black"
    }
});

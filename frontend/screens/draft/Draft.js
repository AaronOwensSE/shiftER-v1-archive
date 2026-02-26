// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import DraftDashboard from "../../components/navigation/DraftDashboard.js";
import ShifterButton from "../../components/ShifterButton.js";
import H1 from "../../components/headings/H1.js";
import Card from "../../components/cards/Card.js";
import TitleRow from "../../components/cards/TitleRow.js";
import TextRow from "../../components/cards/TextRow.js";
import RightAlignedRow from "../../components/cards/RightAlignedRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Draft = () => {
    return(
        <View style={draftStyles.screenView}>
            <DraftDashboard style={draftStyles.draftDashboard} />
            <ShifterButton style={draftStyles.backButton} text="Back" />

            <ScrollView
                style={draftStyles.scrollView}
                contentContainerStyle={draftStyles.scrollViewContentContainer}
            >
                <H1 style={draftStyles.h1} text="Group Name (Group ID)" />

                <Card style={draftStyles.draftCard}>
                    <TitleRow style={draftStyles.titleRow} titleText="Draft ID" tagText="Paused" />

                    <TextRow
                        style={draftStyles.textRow} leftText="Start" rightText="00/00/0000 00:00 AM"
                    />

                    <TextRow
                        style={draftStyles.textRow} leftText="End" rightText="00/00/0000 00:00 AM"
                    />

                    <TextRow
                        style={draftStyles.textRow} leftText="Active From" rightText="00:00 AM"
                    />

                    <TextRow style={draftStyles.textRow} leftText="To" rightText="00:00 AM" />

                    <TextRow
                        style={draftStyles.textRow} leftText="Turn Duration" rightText="00:00"
                    />

                    <TextRow
                        style={draftStyles.textRow} leftText="Current Turn" rightText="User 1"
                    />

                    <TextRow style={draftStyles.textRow} leftText="Next Turn" rightText="User 2" />

                    <RightAlignedRow style={draftStyles.rightAlignedRow}>
                        <ShifterButton style={draftStyles.shifterButton} text="Pause/Unpause" />
                        <ShifterButton style={draftStyles.shifterButton} text="Cancel" />
                    </RightAlignedRow>

                    <Card style={draftStyles.scheduleCard}>
                        <TitleRow
                            style={draftStyles.titleRow}
                            titleText="Schedule Name"
                            tagText="Schedule ID"
                        />

                        <TextRow
                            style={draftStyles.textRow} leftText="Start" rightText="00/00/0000"
                        />

                        <TextRow
                            style={draftStyles.textRow} leftText="End" rightText="00/00/0000"
                        />

                        <Card style={draftStyles.shiftCard}>
                            <TitleRow
                                style={draftStyles.titleRow} titleText="User 1" tagText="Shift ID"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="Start"
                                rightText="00/00/0000 00:00 AM"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="End"
                                rightText="00/00/0000 00:00 AM"
                            />
                        </Card>

                        <Card style={draftStyles.shiftCard}>
                            <TitleRow
                                style={draftStyles.titleRow} tagText="Shift ID"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="Start"
                                rightText="00/00/0000 00:00 AM"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="End"
                                rightText="00/00/0000 00:00 AM"
                            />
                        </Card>

                        <Card style={draftStyles.shiftCard}>
                            <TitleRow
                                style={draftStyles.titleRow} titleText="User 2" tagText="Shift ID"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="Start"
                                rightText="00/00/0000 00:00 AM"
                            />

                            <TextRow
                                style={draftStyles.textRow}
                                leftText="End"
                                rightText="00/00/0000 00:00 AM"
                            />
                        </Card>
                    </Card>
                </Card>
            </ScrollView>
        </View>
    );
};

export default Draft;

// =================================================================================================
// Styles
// =================================================================================================
const draftStyles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "white"
    },

    draftDashboard: {
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

    draftCard: {
        width: "85%",
        margin: 5
    },

    titleRow: {
    },

    textRow: {
    },

    rightAlignedRow: {
    },

    shifterButton: {
        margin: 5
    },

    scheduleCard: {
        alignSelf: "center",
        width: "95%",
        margin: 5,
        borderWidth: 2,
        borderColor: "black"
    },

    shiftCard: {
        alignSelf: "center",
        width: "99%",
        margin: 5,
        borderWidth: 2,
        borderColor: "black"
    }
});
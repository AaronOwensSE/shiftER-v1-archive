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
import TextRow from "../../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Groups = ({ onNavigate }) => {
    return(
        <View style={groupStyles.screenView}>
            <Dashboard style={groupStyles.dashboard} onNavigate={onNavigate} />
            
            <ScrollView
                style={groupStyles.scrollView}
                contentContainerStyle={groupStyles.scrollViewContentContainer}
            >
                <H1 style={groupStyles.h1} text="Groups" />

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>

                <Card style={groupStyles.card}>
                    <TitleRow
                        style={groupStyles.titleRow} titleText="Group Name" tagText="Group ID"
                    />
                    <TextRow style={groupStyles.textRow} leftText="17 members" />
                </Card>
            </ScrollView>
        </View>
    );
};

export default Groups;

// =================================================================================================
// Styles
// =================================================================================================
const groupStyles = StyleSheet.create({
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

    textRow: {
    }
});

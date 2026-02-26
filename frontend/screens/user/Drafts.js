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
const Drafts = ({ onNavigate }) => {
    return(
        <View style={draftStyles.screenView}>
            <Dashboard style={draftStyles.dashboard} onNavigate={onNavigate} />
            
            <ScrollView
                style={draftStyles.scrollView}
                contentContainerStyle={draftStyles.scrollViewContentContainer}
            >
                <H1 style={draftStyles.h1} text="Drafts" />

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />

                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>

                <Card style={draftStyles.card}>
                    <TitleRow
                        style={draftStyles.titleRow} titleText="Group Name" tagText="Draft ID"
                    />
                    
                    <TextRow style={draftStyles.textRow} leftText="00/00/0000 to 00/00/0000" />
                </Card>
            </ScrollView>
        </View>
    );
};

export default Drafts;

// =================================================================================================
// Styles
// =================================================================================================
const draftStyles = StyleSheet.create({
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

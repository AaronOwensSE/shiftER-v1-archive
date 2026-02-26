// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import GroupDashboard from "./GroupDashboard";
import DraftNavBar from "./DraftNavBar";

// =================================================================================================
// Component
// =================================================================================================
const DraftDashboard = ({style}) => {
    return(
        <View style={[ draftDashboardStyles.view, style ]}>
            <GroupDashboard style={draftDashboardStyles.groupDashboard} />
            <DraftNavBar style={draftDashboardStyles.draftNavBar} />
        </View>
    );
};

export default DraftDashboard;

// =================================================================================================
// Styles
// =================================================================================================
const draftDashboardStyles = StyleSheet.create({
    view: {
    },

    groupDashboard: {
    },

    draftNavBar: {
        width: "100%"
    }
});

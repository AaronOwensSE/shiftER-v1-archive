// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import Dashboard from "./Dashboard.js";
import GroupNavBar from "./GroupNavBar.js";

// =================================================================================================
// Component
// =================================================================================================
const GroupDashboard = ({style}) => {
    return(
        <View style={[ groupDashboardStyles.view, style ]}>
            <Dashboard style={groupDashboardStyles.dashboard} />
            <GroupNavBar style={groupDashboardStyles.groupNavBar} />
        </View>
    );
};

export default GroupDashboard;

// =================================================================================================
// Styles
// =================================================================================================
const groupDashboardStyles = StyleSheet.create({
    view: {
    },

    dashboard: {
    },

    groupNavBar: {
        width: "100%"
    },
});

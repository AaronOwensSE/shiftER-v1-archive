// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import SmallLogo from "../logos/SmallLogo.js";
import NavBar from "./NavBar.js";

// =================================================================================================
// Component
// =================================================================================================
const Dashboard = ({style, onNavigate}) => {
    return(
        <View style={[ dashboardStyles.view, style ]}>
            <SmallLogo style={dashboardStyles.smallLogo} />
            <NavBar style={dashboardStyles.navBar} onNavigate={onNavigate} />
        </View>
    );
};

export default Dashboard;

// =================================================================================================
// Styles
// =================================================================================================
const dashboardStyles = StyleSheet.create({
    view: {
    },

    smallLogo: {
        width: "100%"
    },

    navBar: {
        width: "100%"
    }
});

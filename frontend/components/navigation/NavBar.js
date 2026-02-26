// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import ShifterButton from "../ShifterButton.js";

// =================================================================================================
// Component
// =================================================================================================
const NavBar = ({style, onNavigate}) => {
    // Outer View helps control weird positioning behavior of ScrollView.
    return(
        <View style={[ navBarStyles.view, style ]}>
            <ScrollView
                style={navBarStyles.scrollView}
                contentContainerStyle={navBarStyles.scrollViewContentContainer}
                horizontal
            >
                <ShifterButton
                    style={navBarStyles.firstShifterButton}
                    text="Groups"
                    onPress={ () => {onNavigate("Groups")} }
                />

                <ShifterButton
                    style={navBarStyles.midShifterButton}
                    text="Drafts"
                    onPress={ () => {onNavigate("Drafts")} }
                />

                <ShifterButton
                    style={navBarStyles.midShifterButton}
                    text="Schedules"
                    onPress={ () => {onNavigate("Schedules")} }
                />

                <ShifterButton
                    style={navBarStyles.midShifterButton}
                    text="Profile"
                    onPress={ () => {onNavigate("Profile")} }
                />

                <ShifterButton
                    style={navBarStyles.lastShifterButton}
                    text="Alerts"
                    onPress={ () => {onNavigate("Alerts")} }
                />
            </ScrollView>
        </View>
    );
};

export default NavBar;

// =================================================================================================
// Styles
// =================================================================================================
const navBarStyles = StyleSheet.create({
    view: {
    },

    scrollView: {
    },

    scrollViewContentContainer: {
        flex: 1
    },

    firstShifterButton: {
        borderRightWidth: 1,
    },

    midShifterButton: {
        borderLeftWidth: 1,
        borderRightWidth: 1
    },

    lastShifterButton: {
        borderLeftWidth: 1
    }
});

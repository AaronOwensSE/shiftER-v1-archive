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
const GroupNavBar = ({style}) => {
    // Outer View helps control weird positioning behavior of ScrollView.
    return(
        <View style={[ groupNavBarStyles.view, style ]}>
            <ScrollView
                style={groupNavBarStyles.scrollView}
                contentContainerStyle={groupNavBarStyles.scrollViewContentContainer}
                horizontal
            >
                <ShifterButton style={groupNavBarStyles.firstShifterButton} text="Draft" />
                <ShifterButton style={groupNavBarStyles.midShifterButton} text="Schedules" />
                <ShifterButton style={groupNavBarStyles.lastShifterButton} text="Membership" />
            </ScrollView>
        </View>
    );
};

export default GroupNavBar;

// =================================================================================================
// Styles
// =================================================================================================
const groupNavBarStyles = StyleSheet.create({
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

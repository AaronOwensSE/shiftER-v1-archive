// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import ShifterButton from "../ShifterButton";

// =================================================================================================
// Component
// =================================================================================================
const DraftNavBar = ({style}) => {
    // Outer View helps control weird positioning behavior of ScrollView.
    return(
        <View style={[ draftNavBarStyles.view, style ]}>
            <ScrollView
                style={draftNavBarStyles.scrollView}
                contentContainerStyle={draftNavBarStyles.scrollViewContentContainer}
                horizontal
            >
                <ShifterButton style={draftNavBarStyles.firstShifterButton} text="Draft" />
                <ShifterButton style={draftNavBarStyles.lastShifterButton} text="Participation" />
            </ScrollView>
        </View>
    );
};

export default DraftNavBar;

// =================================================================================================
// Styles
// =================================================================================================
const draftNavBarStyles = StyleSheet.create({
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

// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, Text, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import typeScale from "../../type-scale.js";

// =================================================================================================
// Component
// =================================================================================================
const TextRow = ({ style, leftText, rightText }) => {
    return(
        <View style={[ textRowStyles.view, style ]}>
            <Text style={textRowStyles.leftText}>{leftText}</Text>
            <Text style={textRowStyles.rightText}>{rightText}</Text>
        </View>
    );
};

export default TextRow;

// =================================================================================================
// Styles
// =================================================================================================
const textRowStyles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    leftText: {
        textAlign: "left",
        fontSize: typeScale.BASE
    },

    rightText: {
        textAlign: "right",
        fontSize: typeScale.BASE
    }
});

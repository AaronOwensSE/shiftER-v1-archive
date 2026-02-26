// =================================================================================================
// External Dependencies
// =================================================================================================
import { TouchableHighlight, Text, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import typeScale from "../type-scale.js";

// =================================================================================================
// Component
// =================================================================================================
const ShifterButton = ({ style, text, disabled = false, onPress = () => {} }) => {
    return(
        <TouchableHighlight
            style={[ shifterButtonStyles.touchableHighlight, style ]}
            underlayColor="dimgrey"
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={shifterButtonStyles.text}>{text}</Text>
        </TouchableHighlight>
    );
};

export default ShifterButton;

// =================================================================================================
// Styles
// =================================================================================================
const shifterButtonStyles = StyleSheet.create({
    touchableHighlight: {
        justifyContent: "center",
        padding: 5,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "darkgrey"
    },

    text: {
        textAlign: "center",
        fontSize: typeScale.BASE,
        fontWeight: "bold"
    }
});

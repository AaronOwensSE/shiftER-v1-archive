// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, Text, TextInput, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import typeScale from "../../type-scale.js";

// =================================================================================================
// Component
// =================================================================================================
const FormField = ({ style, text, obscureInput = false, onChangeText }) => {
    return(
        <View style={[ formFieldStyle.view, style ]}>
            <Text style={formFieldStyle.text}>{text}</Text>
            
            <TextInput
                style={formFieldStyle.textInput}
                secureTextEntry={obscureInput}
                onChangeText={ (newText) => { onChangeText(newText); } }
            />
        </View>
    );
};

export default FormField;

// =================================================================================================
// Styles
// =================================================================================================
const formFieldStyle = StyleSheet.create({
    view: {
    },

    text: {
        fontSize: typeScale.BASE
    },

    textInput: {
        height: 40,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "lightgrey"
    }
});

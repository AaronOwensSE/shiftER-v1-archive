// =================================================================================================
// External Dependencies
// =================================================================================================
import { View, ScrollView, StyleSheet } from "react-native";

// =================================================================================================
// Internal Dependencies
// =================================================================================================
import GroupDashboard from "../../components/navigation/GroupDashboard.js";
import ShifterButton from "../../components/ShifterButton.js";
import H1 from "../../components/headings/H1.js";
import Card from "../../components/cards/Card.js";
import TitleRow from "../../components/cards/TitleRow.js";
import TextRow from "../../components/cards/TextRow.js";

// =================================================================================================
// Component
// =================================================================================================
const Group = () => {
    return(
		<View style={groupStyles.screenView}>
			<GroupDashboard style={groupStyles.groupDashboard} />
			<ShifterButton style={groupStyles.backButton} text="Back" />
			
			<ScrollView
				style={groupStyles.scrollView}
				contentContainerStyle={groupStyles.scrollViewContentContainer}
			>
				<H1 style={groupStyles.h1} text="Group Name (Group ID)" />

				<Card style={groupStyles.card}>
					<TitleRow style={groupStyles.titleRow} titleText="Draft ID" tagText="Paused" />

					<TextRow
						style={groupStyles.textRow} leftText="Start" rightText="00/00/0000 00:00 AM"
					/>

					<TextRow
						style={groupStyles.textRow} leftText="End" rightText="00/00/0000 00:00 AM"
					/>

					<TextRow
						style={groupStyles.textRow} leftText="Active From" rightText="00:00 AM"
					/>

					<TextRow style={groupStyles.textRow} leftText="To" rightText="00:00 AM" />

					<TextRow
						style={groupStyles.textRow} leftText="Turn Duration" rightText="00:00"
					/>

					<TextRow
						style={groupStyles.textRow} leftText="Current Turn" rightText="User 1"
					/>
					
					<TextRow style={groupStyles.textRow} leftText="Next Turn" rightText="User 2" />
				</Card>
			</ScrollView>
		</View>
    );
};

export default Group;

// =================================================================================================
// Styles
// =================================================================================================
const groupStyles = StyleSheet.create({
	screenView: {
		flex: 1,
		backgroundColor: "white"
	},
	
	groupDashboard: {
		marginTop: 30
	},

	backButton: {
		alignSelf: "flex-start"
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

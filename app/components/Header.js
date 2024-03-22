import { View, Text } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
	return (
		<View className="bg-white flex flex-row justify-between items-center  rounded-br-2xl rounded-bl-2xl shadow-sm p-4 ">
			<View className="flex flex-row items-center">
				<View className="bg-orange-500 w-[40] h-[40] rounded-full flex justify-center items-center">
					<FontAwesome6 name="user-doctor" size={20} color="white" />
				</View>
				<View>
					<Text className="font-bold pl-3" style={{ fontFamily: "Lora-BoldItalic", fontSize: 24 }}>
						Healthplus
					</Text>
				</View>
			</View>
			<View>
				<MaterialIcons name="short-text" size={34} color="black" />
			</View>
		</View>
	);
};

export default Header;

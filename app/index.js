import { View, Text, Image } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import Header from "./components/Header";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

const index = () => {
	const [fontsLoaded, fontError] = useFonts({
		"Lora-BoldItalic": require("../assets/fonts/Lora-BoldItalic.ttf")
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			console.log("fontsLoaded");
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<View className="px-4 bg-orange-50 flex-1" onLayout={onLayoutRootView}>
			<Header />
			<View className="my-4  text-center w-[200] flex justify-start pt-[40] items-center  m-auto ">
				<Text className="text-yellow-900 text-center" style={{ fontFamily: "Lora-BoldItalic", fontSize: 40 }}>
					Mental Health <Text className="text-black">is wealth</Text>
				</Text>
			</View>
			<View className="relative mt-[40] flex-1   justify-start">
				<View className="absolute left-[80]">
					<Image source={require("../assets/img-5.png")} className="w-[100] h-[130] shadow-lg" />
				</View>
				<View className="absolute top-[160] left-[30] ">
					<Image source={require("../assets/img-3.png")} className="w-[170] h-[150] shadow-lg" />
				</View>
				<View className="absolute top-[80] left-[210]">
					<Image source={require("../assets/img-2.png")} className="w-[120] h-[150] shadow-lg" />
				</View>
				<View className="absolute top-[0] left-[0] px-3 py-1 bg-yellow-800 rounded">
					<Text className="text-white text-sm">Happy</Text>
				</View>
				<View className="absolute top-[80] left-[10]">
					<AntDesign name="star" size={24} color="#fcd34d" />
				</View>
				<View className="absolute top-[50] right-[100]">
					<AntDesign name="star" size={24} color="#f87171" />
				</View>
				<View className="absolute top-[250] right-[150]">
					<AntDesign name="star" size={24} color="green" />
				</View>
				<View className="absolute top-[320] left-[200] px-3 py-1 bg-green-500 rounded">
					<Text className="text-black text-sm">Positive</Text>
				</View>
				<View className="absolute top-[80] right-[0] px-3 py-1 bg-fuchsia-500 rounded">
					<Text className="text-black text-sm">Calm</Text>
				</View>
			</View>
			<View className="flex-1 mt-[290]">
				<Text className="font-bold text-xl">To live your life to the fullest. we're continuing to find ways.</Text>
			</View>
			<View className="flex-1 flex-row justify-between">
				<View className="bg-white  rounded-3xl shadow-lg p-3 w-[80] h-[60] justify-center items-center">
					<AntDesign name="arrowdown" size={24} color="black" />
				</View>
				<View className="bg-yellow-950 flex flex-row  rounded-3xl shadow-lg p-3 w-[160] h-[60] justify-evenly items-center">
					<Link href="/help">
						<View>
							<Text className="text-white font-bold text-lg opacity-90">Get Help</Text>
						</View>
					</Link>

					<View>
						<AntDesign name="right" size={24} color="#a16207" />
					</View>
				</View>
			</View>
		</View>
	);
};

export default index;

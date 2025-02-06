import { Redirect, Slot } from "expo-router";
import { ActivityIndicator} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useGlobalContext } from "@/lib/global-provider";


export default function AppLayout() {
  const { loading, isLogged } = useGlobalContext();

  console.log("AppLayout - Loading:", loading);
  console.log("AppLayout - IsLogged:", isLogged);

  if (loading) {
    console.log("AppLayout - Showing loading indicator");
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white" >
        <ActivityIndicator color="#0061FF" size="large" />;
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    console.log("AppLayout - Redirecting to sign-in");
    return <Redirect href="/sign-in" />;
  }

  console.log("AppLayout - Rendering Slot");
  return <Slot />;
}

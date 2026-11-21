import { getAuthSession } from "@/services/authService";
import { authStyles } from "@/styles/authStyles";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
export default function Index() {
  // Saat aplikasi pertama kali dibuka, langsung arahkan ke layar Login
  const [checking, setChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  useEffect(() => {
    getAuthSession()
      .then((session) => {
        setHasSession(Boolean(session?.token));
      })
      .finally(() => {
        setChecking(false);
      });
  }, []);

  //AsyncStorage terlebih
  //home tanpa perlu login ulang:
  if (checking) {
    return (
      <View style={authStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }
  return <Redirect href={hasSession ? "/home" : "/login"} />;
}

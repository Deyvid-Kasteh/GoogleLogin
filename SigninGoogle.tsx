import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SigninWithGoogle() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "",
    iosClientId: "",
    androidClientId:
      "653357165851-rhv1ou0miesjv3h2aii15apm0dkipk69.apps.googleusercontent.com",
    webClientId: "",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="loginTESTE"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}

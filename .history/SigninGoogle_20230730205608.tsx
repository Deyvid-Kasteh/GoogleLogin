import * as React from 'react';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import { Button } from;

WebBrowser.maybeCompleteAuthSession();

export default function SigninWithGoogle() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '',
        iosClientId: '',
        androidClientId: '',
        webClientId: '',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const {authentication} = response;
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title=v* Login *
        onPress

            />
    )




}
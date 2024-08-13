import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function Profile() {
    const { user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();

    const doLogout = async () => {
        try {
            await signOut();
            router.replace('(auth)'); 
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return (
        <View style={{ paddingTop: 50 }}>
            <Text>Welcome, {user?.primaryEmailAddress?.emailAddress}</Text>
            <Text>Username is {user?.firstName }</Text>
            <Text>Hello World</Text>
            <TouchableOpacity onPress={doLogout}>
                <Text style={{ color: 'blue', marginTop: 20 }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

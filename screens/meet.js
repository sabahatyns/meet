import React, { useState } from 'react';
import {  Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Video from './room';
const Home = () => {
    const navigation = useNavigation();
    const [JoinMeeting, setJoinMeeting] = useState(false);

    return (
        <View>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior='automatic'
                    style={styles.ScrollView}>
                    <View style={styles.body}>
                        {JoinMeeting ? (
                            <Video />
                        ) : (
                            <TouchableOpacity
                                onPress={() => setJoinMeeting(true)}
                                style={{ width: 110, marginTop: 5, }}>
                                <Text style={{
                                    borderWidth: 1,
                                    borderColor: "black",
                                    padding: 10,
                                    textAlign: "center"
                                }}>Join Meeting</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    ScrollView: {
        backgroundColor: 'grey'
    },
    body: {
        height: 565,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
})
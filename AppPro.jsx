import { Text, StyleSheet, View, FlatList, Platform, TextInput, TouchableOpacity, Image, Alert, Pressable, Linking } from 'react-native'
import React, { useState } from 'react'
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AppPro = () => {
    const [contacts, setContacts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // const Fetch = () => {
    //     const permissionType =
    // Platform.OS === 'android'
    //   ? PERMISSIONS.ANDROID.READ_CONTACTS
    //   : PERMISSIONS.IOS.CONTACTS;
    //     PERMISSIONS.request(permissionType, {
    //         title: 'Contacts',
    //         message: 'This app would like to view your contacts.',
    //         buttonPositive: 'Please accept bare mortal',
    //     })
    //         .then((res) => {
    //             console.log('Permission: ', res);
    //             Contacts.getAll()
    //                 .then((contacts) => {
    //                     // work with contacts
    //                     console.log(contacts);
    //                 })
    //                 .catch((e) => {
    //                     console.log(e.message);
    //                 });
    //         })
    //         .catch((error) => {
    //             console.error('Permission error: ', error.message);
    //         });
    // }
    const requestContactsPermission = async () => {
        try {
            const permissionType = Platform.OS === 'android' ? PERMISSIONS.ANDROID.READ_CONTACTS : PERMISSIONS.IOS.CONTACTS;
            const result = await request(
                permissionType,
                // {
                //     title: 'Contacts',
                //     message: 'This app would like to view your contacts.',
                //     buttonPositive: 'Please accept permissions',
                // }
            );
            console.log(result);
                if (result === RESULTS.GRANTED) {
                    console.log('Contacts permission granted');
                    Contacts.getAll()
                        .then((contacts) => {
                            console.log(contacts);
                            setContacts(contacts);
                        })
                        .catch((e) => {
                            console.log(e.message);
                        });
                } else if (result === RESULTS.DENIED) {
                    console.log('Contacts permission denied');
                    Alert.alert(
                        'Permission Denied',
                        'Contacts permission is required for the app to function properly. Please grant the permission.',
                        [
                            {
                                text: 'Go to App Settings',
                                onPress: () => {
                                    Linking.openSettings();
                                },
                            },
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                        ],
                        { cancelable: false }
                    );
                } 
                else if (result === RESULTS.BLOCKED) {
                    console.log('Contacts permission BLOCKED');
                    Alert.alert(
                        'Permission Blocked',
                        'Contacts permission is required for the app to function properly. Please grant the permission.',
                        [
                            {
                                text: 'Go to App Settings',
                                onPress: () => {
                                    Linking.openSettings();
                                },
                            },
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                        ],
                        { cancelable: false }
                    );
                } else {
                    console.log('Contacts permission not available');
                }
        }
        catch (error) {
            console.error('Permission error: ', error.message);
        }
    };

    const Item = React.memo(({ displayName, id, phoneNumbers }) => {
        const phoneNumber = phoneNumbers && phoneNumbers.length > 0 ? phoneNumbers[0].number : '';
        return (
            <View style={styles.listStyle}>
                <View style={{ flex: 1, justifyContent: 'center', marginStart: 10 }}>
                    <Text style={{ marginBottom: 6, color: 'white', fontSize: 18 }}>{displayName}</Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>{phoneNumber}</Text>
                </View>
            </View>
        );
    });

    const FlatListComponent = () => {
        const filteredData = contacts.filter(item => {
            const regex = new RegExp(searchQuery, 'i');
            const phoneNumber = item.phoneNumbers && item.phoneNumbers.length > 0 ? item.phoneNumbers[0].number : '';
            return regex.test(item.displayName) || regex.test(phoneNumber);
        });
        return (
            <View style={styles.listViewStyle}>
                <FlatList
                    data={searchQuery ? filteredData : contacts}
                    renderItem={({ item }) => <Item displayName={item.displayName} id={item.recordID} phoneNumbers={item.phoneNumbers} />}
                    keyExtractor={item => item.recordID}
                    extraData={contacts}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.title}>Contacts</Text>
                <TouchableOpacity onPress={() => requestContactsPermission()} style={styles.fetchButton} >

                    <Text style={{ color: 'white', fontSize: 15 }}>Fetch Contacts</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder='Search'
                clearButtonMode='always'  // works for ios only
                style={styles.searchBar}
                onChangeText={setSearchQuery}
                value={searchQuery} />
            <FlatListComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    fetchButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#00CCBE',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('40%'),
        height: hp('5%'),
        borderRadius: 7
    },
    listViewStyle: {
        alignItems: 'flex-start',
        flex: 1,
        //height: hp('70%'), // 70% of height device screen
        //width: wp('50%'),
        //height:50,
    },
    listStyle: {
        borderRadius: 7,
        width: wp('89%'),
        height: 53,
        //width: 350,
        flex: 1,
        backgroundColor: '#00CCBE',
        marginBottom: 15,
        flexDirection: 'row',
    },
    backcolor: {
        backgroundColor: "#D9D9D9",
    },
    searchBar: {
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
    },
})

export default AppPro;
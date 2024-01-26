import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from '../../Theme/Icons';
import { Image, ImageBackground, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../Theme/Colors';
import { Switch } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

interface RoutineProps { }

const ScreenContainer = styled(ImageBackground)`
  flex: 1;
  background-color: #fff;
`;

const HeaderContainer = styled.View`
  background-color: #182545;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
`;
const RoutineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: 5%;
  margin-top: 3%;
`;

const RoutineItem = styled.View`
  flex: 1;
  align-items: center;
`;

const RoutineText = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: black;
  font-weight: 500;
`;

const RoutineImageBackground = styled(ImageBackground)`
  width: 168px;
  height: 100px;
  margin-top: 5px;
`;
const OverlayContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

const TimeContainer = styled.View`
  align-items: left;
`;

const ToggleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SearchContainer = styled.View`
  flex-direction: row;
  margin-horizontal: 5%;
  margin-top: 3%;
  margin-bottom: 5%;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.TextInput`
  width: 85%;
  height: 48px;
  color: ${Colors.Black};
  padding: 0 10px;
`;

const SearchButton = styled(TouchableOpacity)`
  background-color: ${Colors.Green};
  padding: 3%;
  height: 48px;
  width: 41.84px;
  align-items: center;
  justify-content: center;
`;

const SortButton = styled(TouchableOpacity)`
  margin-left: 5%;
`;
const ListItemContainer = styled.View`
  margin-horizontal: 5%;
`;

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ListItemContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ListItemImage = styled(Image)`
  width: 48px;
  height: 48px;
`;

const ListItemText = styled.Text`
  margin-left: 3%;
  font-weight: 500;
  font-size: 16px;
  color: ${Colors.Black};
`;

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(186, 193, 202, 1);
  margin-left: 1%;
  margin-vertical: 3%;
`;
const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  color: ${Colors.Red};
  font-size: 14px;
  font-weight: 500;
`;

const RoutinesScreen: React.FC<RoutineProps> = () => {
    const [morningSwitchOn, setMoriningSwitchOn] = useState(false);
    const [eveningswitchOn, setEveningSwitchOn] = useState(false);
    const [reminders, setReminders] = useState([]);
    const [data, setNewData] = useState([]);
    const [sortOrder, setSortOrder] = useState("ascending");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchReminders = async () => {
            try {
                const response = await axios.get(
                    'https://devapi.getgoally.com/v1/api/reminders/all',
                    {
                        headers: {
                            Authorization: 'ddc58e6a-2e69-4f44-97e8-1454eb352069',
                        },
                    }
                );
                const newReminders = response?.data?.docs || [];
                console.log("line 116::", newReminders[0]?.schedule)
                setLoading(false)
                setReminders(newReminders);
                setNewData(newReminders);
            } catch (error) {
                console.error('Error fetching reminders:', error);
                setLoading(false)
            }
        };
        fetchReminders();
    }, []);
    const sortReminders = () => {
        const sortedReminders = [...reminders].sort((a, b) => {
            if (sortOrder === "ascending") {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        setReminders(sortedReminders);
        setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    };
    const searchReminders = (query: string) => {
        const filteredItems = data.filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
        });

        if (query) {
            setReminders(filteredItems);
        } else {
            setReminders(data);
        }
    };

    const onToggleMorningSwitch = () => {
        setMoriningSwitchOn(!morningSwitchOn);
    };
    const onToggleEveningSwitch = () => {
        setEveningSwitchOn(!eveningswitchOn);
    };
    return (
        <ScreenContainer source={require('../../Theme/Images/BackgroundImage.png')} resizeMode="contain">
            <StatusBar backgroundColor={Colors.darkBlue} barStyle="light-content" />
            <HeaderContainer>
                <Image source={require('../../Theme/Images/HomeIcon.png')} style={{ width: 36, height: 36 }} />
                <Title>Routines</Title>
                <Image source={require('../../Theme/Images/SettingsIcon.png')} style={{ width: 36, height: 36 }} />
            </HeaderContainer>
            <RoutineContainer>
                <RoutineItem>
                    <RoutineText>Morning Routine</RoutineText>
                    <RoutineImageBackground source={require("../../Theme/Images/MorningRoutine.png")}>
                        <OverlayContainer>
                            <TimeContainer>
                                <Text style={{ color: Colors.Black, fontSize: 16, fontWeight: '400' }}>Weekdays</Text>
                                <Text style={{ color: Colors.Black, fontSize: 16, fontWeight: '400' }}>7:00 AM</Text>
                            </TimeContainer>
                            <ToggleContainer>
                                <SwitchToggle
                                    switchOn={morningSwitchOn}
                                    onPress={onToggleMorningSwitch}
                                    circleColorOff={Colors.White}
                                    circleColorOn={Colors.White}
                                    backgroundColorOn="#72CEBC"
                                    backgroundColorOff="#74777F"
                                    circleStyle={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 25,
                                        backgroundColor: 'blue',
                                    }}
                                    containerStyle={{
                                        width: 51,
                                        height: 32,
                                        borderRadius: 25,
                                        padding: 2.5,
                                        backgroundColor: '#74777F',
                                    }}
                                    duration={300}
                                />
                                <Icon type='FontAwesome5' color={Colors.Black} size={18} name='chevron-right' />
                            </ToggleContainer>
                        </OverlayContainer>
                    </RoutineImageBackground>
                </RoutineItem>
                <RoutineItem>
                    <RoutineText>Evening Routine</RoutineText>
                    <RoutineImageBackground source={require("../../Theme/Images/EveningRoutine.png")}>
                        <OverlayContainer>
                            <TimeContainer>
                                <Text style={{ color: Colors.White, fontSize: 16, fontWeight: '400' }}>Everyday</Text>
                                <Text style={{ color: Colors.White, fontSize: 16, fontWeight: '400' }}>9:00 PM</Text>
                            </TimeContainer>
                            <ToggleContainer>
                                <SwitchToggle
                                    switchOn={eveningswitchOn}
                                    onPress={onToggleEveningSwitch}
                                    circleColorOff={Colors.White}
                                    circleColorOn={Colors.White}
                                    backgroundColorOn="#72CEBC"
                                    backgroundColorOff="#74777F"
                                    circleStyle={{
                                        width: 28,
                                        height: 28,
                                        borderRadius: 25,
                                        backgroundColor: 'blue',
                                    }}
                                    containerStyle={{
                                        width: 51,
                                        height: 32,
                                        borderRadius: 25,
                                        padding: 2.5,
                                        backgroundColor: '#74777F',
                                    }}
                                    duration={300}
                                />
                                <Icon type='FontAwesome5' color={Colors.White} size={18} name='chevron-right' />
                            </ToggleContainer>
                        </OverlayContainer>
                    </RoutineImageBackground>
                </RoutineItem>
            </RoutineContainer>
            <View style={{ borderWidth: 1, borderColor: Colors.grey, marginTop: '3%' }} />
            <SearchContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.Black, justifyContent: 'space-between', width: '85%' }}>
                    <SearchInput placeholder='' placeholderTextColor={Colors.Black} onChangeText={searchReminders} />
                    <SearchButton>
                        <Icon type='FontAwesome' name='search' color={Colors.White} size={20} />
                    </SearchButton>
                </View>
                <SortButton onPress={sortReminders}>
                    <Image source={require("../../Theme/Images/sortIcon.png")} style={{ width: 40, height: 40 }} />
                </SortButton>
            </SearchContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                {!loading ? (
                    <>
                        {reminders.map((reminder, index) => (
                            <ListItemContainer key={index}>
                                <ListItem>
                                    <ListItemContent>
                                        <ListItemImage source={{ uri: reminder?.visualAidUrl }} />
                                        <ListItemText>{reminder?.name}</ListItemText>
                                    </ListItemContent>
                                    <Icon type='FontAwesome5' color={Colors.Black} size={18} name='chevron-right' />
                                </ListItem>
                                <Divider />
                            </ListItemContainer>
                        ))}
                    </>
                ) : (
                    <LoadingContainer>
                        <ActivityIndicator size="large" color={Colors.Red} />
                        <LoadingText>Loading Please Wait...</LoadingText>
                    </LoadingContainer>
                )}
            </ScrollView>
        </ScreenContainer>
    );
};

export default RoutinesScreen;

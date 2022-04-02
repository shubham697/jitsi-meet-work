import { StyleSheet } from 'react-native';
import Theme from "../../theme";

export const CallHistStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    spaceRow: {
        width: 15
    },
    spaceCol: {
        height: 15
    },
    callItemContainer: {
        padding: 10,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#FAFAFC'
    },
    listContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 6,
        backgroundColor: 'red',
        marginRight: 10
    },
    name: {
        flex: 1,
        fontSize: 14,
        color: Theme.colors.text,
        fontFamily: Theme.fonts.semiBold
    },
    time: {
        fontSize: 12,
        color: Theme.colors.gray7,
        fontFamily: Theme.fonts.semiBold
    },
    callType: { marginLeft: 5,  fontSize: 12, fontFamily: Theme.fonts.regular },
});

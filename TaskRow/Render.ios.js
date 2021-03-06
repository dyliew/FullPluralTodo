import React from 'react-native';
import Swipeout from 'react-native-swipeout';

const {
    Text,
    View,
} = React;

const localStyle = React.StyleSheet.create({
    row: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    container: {
        marginBottom: 20
    }
});

export default function render(baseStyles) {
    const buttons = [
        {
            text: 'Done',
            backgroundColor: '#05a5d1',
            underlayColor: '#273539',
            onPress: () => this.props.onDone(this.props.todo)
        }
    ];
    
    return (
        <View
            style={localStyle.container}
        >
            <Swipeout
                backgroundColor="#fff"
                right={buttons}
            >
                <View style={[baseStyles.container, localStyle.row]}>
                    <Text
                        style={baseStyles.label}
                    >ios: {this.props.todo.task}</Text>
                </View>
            </Swipeout>
        </View>
    );
}
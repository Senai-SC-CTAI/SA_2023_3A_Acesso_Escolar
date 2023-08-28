import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/home';
import { ScreenB } from '../screens/historico';
import { ScreenC } from '../screens/relatorio';
import { ScreenD } from '../screens/conta';
import { ScreenE } from '../screens/chat';
import { ScreenF } from '../screens/notifica';

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='screenA'
                options={{
                    title: 'Tela A',
                    headerShown: false
                }}
                component={ScreenA}
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenB}
            />
            <Screen
                name='screenC'
                options={{
                    title: 'Tela C',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenC}
            />
             <Screen
                name='screenD'
                options={{
                    title: 'Tela D',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenD}
            />
             <Screen
                name='screenE'
                options={{
                    title: 'Tela E',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenE}
            />
              <Screen
                name='screenF'
                options={{
                    title: 'Tela F',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenF}
            />
        </Navigator>
    )
}
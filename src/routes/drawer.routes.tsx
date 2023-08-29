import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/home';
import { ScreenB } from '../screens/historico';
import { ScreenC } from '../screens/relatorio';
import { ScreenD } from '../screens/conta';
import { ScreenE } from '../screens/chat';
import { ScreenF } from '../screens/notifica';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    headerShown: false,
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="home" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Historico',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="logout" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    drawerLabel: 'Relatorio',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenD'
                component={ScreenD}
                options={{
                    drawerLabel: 'Conta',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenE'
                component={ScreenE}
                options={{
                    drawerLabel: 'Chat',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
             <Screen
                name='screenF'
                component={ScreenF}
                options={{
                    drawerLabel: 'Notificacoes',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
        </Navigator>
    )
}
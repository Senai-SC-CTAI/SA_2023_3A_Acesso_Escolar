import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';
import { ScreenD } from '../screens/ScreenD';
import { ScreenE } from '../screens/ScreenE';
import { ScreenF } from '../screens/ScreenF';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
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
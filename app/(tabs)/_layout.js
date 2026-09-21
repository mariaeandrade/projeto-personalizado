import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
<Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#340038",
        },
        headerTintColor: "#ff7ce0",
        headerTintBackground: "#ffffff",
        tabBarActiveTintColor: "#ff54d7",
        tabBarInactiveTintColor: "#ffcaf3",
        tabBarStyle: {
          backgroundColor: "#340038",
          borderTopColor: "#4e0053",
        },
      }}
    >
          <Tabs.Screen
              name="index"
              options={{
                  title: 'Início',
                  headerTitle: 'Projeto Base',
              }}
          />

                    <Tabs.Screen
              name="api"
              options={{
                  title: 'GET',
                  headerTitle: 'GET',
              }}
          />
            <Tabs.Screen
              name="post"
              options={{
                  title: 'POST',
                  headerTitle: 'POST',
              }}
          />

           <Tabs.Screen
              name="delete"
              options={{
                  title: 'DELETE',
                  headerTitle: 'DELETE',
              }}
          />

          
           <Tabs.Screen
              name="update"
              options={{
                  title: 'UPDATE',
                  headerTitle: 'UPDATE',
              }}
          />

                     <Tabs.Screen
              name="id"
              options={{
                  title: 'ID',
                  headerTitle: 'BUSCAR POR ID',
              }}
          />
      </Tabs>
  );
}

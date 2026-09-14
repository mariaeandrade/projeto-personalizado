import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
      <Tabs
          screenOptions={{
              headerShadowVisible: false,
              tabBarActiveTintColor: '#0f62fe',
              tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: '600',
              },
          }}>
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
      </Tabs>
  );
}

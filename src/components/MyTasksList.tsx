import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { theme } from '../Themes/Themas';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  Theme: {
    tasksMarkers: string;
    colorBorder: string;
    minhasTasks: string;
  };
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

let colorTitulo = theme.light.minhasTasks;

function FlatListHeaderComponent() {
  return (
    <View>
      <Text style={[styles.header, {color: colorTitulo }]}>Minhas tasks</Text>
    </View>
  )
}

export function MyTasksList({Theme, tasks, onLongPress, onPress }: MyTasksListProps) {

  colorTitulo = Theme.minhasTasks;

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            style={item.done ? styles.taskButtonDone : styles.taskButton}
            onPress={() => onPress(item.id)} 
            onLongPress={() => onLongPress(item.id)} 
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={[item.done ? styles.taskMarkerDone : styles.taskMarker,
                {borderColor: Theme.colorBorder}
              ]}
            />
            <Text 
              //TODO - use style prop
              style={[item.done ? styles.taskTextDone : styles.taskText,
                {color: Theme.tasksMarkers}
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}


const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})
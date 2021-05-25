import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface ThemeProps {
  toggleTema: (tema: boolean) => void;
  Theme: {
    background: string;
  }
}

export function Header({Theme, toggleTema}: ThemeProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  function enabled(isActive: boolean) {
    setIsEnabled(!isActive);
    toggleTema(!isActive);
  }

  return (

    <View style={[
      styles.container,
      {backgroundColor: Theme.background}
    ]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>

      <View style={styles.switch}>
        <Text style={{fontSize: 18}}>
          {isEnabled? "🌙" : "☀️"}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#000" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={isEnabled}
          onValueChange={() => enabled(isEnabled)}
          style={{marginTop: 3}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 34,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

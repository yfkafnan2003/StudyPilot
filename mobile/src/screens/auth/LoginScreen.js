
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing fields', 'Please enter your email and password.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    // Temporary frontend navigation.
    // Real authentication will be implemented in Phase 3 and Phase 4.
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📚 StudyPilot</Text>
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Sign in to continue learning.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 35,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerText: {
    color: '#64748B',
  },
  link: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
});

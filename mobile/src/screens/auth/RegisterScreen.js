
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert('Missing fields', 'Please complete all fields.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Weak password', 'Password must contain at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Your passwords do not match.');
      return;
    }

    Alert.alert(
      'Registration successful',
      'Frontend demo complete. Backend registration will be connected later.',
      [{ text: 'Continue to Login', onPress: () => navigation.navigate('Login') }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>📚 StudyPilot</Text>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subtitle}>Start your smarter learning journey.</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

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
        placeholder="Password (minimum 8 characters)"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
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
    marginBottom: 25,
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
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    marginBottom: 13,
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

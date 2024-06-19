
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({
    Name: '',
    Email: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <Text style={styles.title1}>Jobizz</Text>
        <Text style={styles.title2}>Welcome Back</Text>
        <Text style={styles.subtitle}>Let's Log in, Apply to jobs</Text>

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={Name => setForm({ ...form, Name })}
              placeholder="Name"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.Name}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={Email => setForm({ ...form, Email })}
              placeholder="Email"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.Email}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen', { Name: form.Name, Email: form.Email });
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Log in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formLink}>or continue with</Text>

          <View style={styles.iconButtonContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Image
                style={styles.icon}
                source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAY1BMVEX///8AAAD19fWlpaXm5ub6+vqioqK1tbXq6urIyMgfHx/y8vLCwsLc3NxdXV1ra2tSUlKBgYE1NTU8PDzU1NRCQkKKioosLCyrq6tKSkpXV1eSkpIZGRl5eXllZWWYmJgQEBBoMRlDAAAEVUlEQVR4nO2c2XaCMBCGG3aEyK51hfd/yoraGiCIZiaT9By/6y7/IcmsmXx9ffjw4cOHD/8XJ4nbbFebljFPHOxZT2xayBzhfsWYxRKjgD2wUqLbMLsl8lwUyFb2HZeWDam4aUUjkmKkkO0j05qG8HKskJ1MaxoiUcgOpkUN8HZThcyq0+JUEoVH06oGTE6KdVsxkClkNpmcWqowc0zrEmikEkPTsgTky3w2LUvAk39Em3ai/CMWpmUJOFKFjU3uOZRKTE3LEpH5FdaaViVSryQKM9OqBsgOyz4xrUrEyaYKd75pVQO86VbMPdOihkzd89km19yTjhVaFYFdGZ+WwLSgKZvhNrTJMf8ihttdaNs2vPKQWLpWWcMH94XOC5sC2CFxURzcuJ7ENV4dp2lNYiEdj4fFrV64zYLaW9xtflS76+6xQatNynUGZnGQDaOELmvTZ+6Nu8VW4hE3oR6VfpDLopiuOc2YlssvSPTdP+YZ3x7xcSVOZBXU42/ppecnv3BVmaLaJKed/R43jlkrrJ0fnuQ51pA1YiyeylZ4TFcFPPF9J0rF4/GcDGlPRqdX/+PllBf7l3+4p0Sxn7JKISIuXOG3VoEXTtCgfLP8P6AUMI0H/QqBGkkUMrZRVyivLGhA+VzLS5k6UO1rRdLahxaFqr5QkrXrIVONI6k2YqdsvCO9TuWPrboLJLDZPZV6ssBpFO4A6cxSQIpDCYi9iT4iJCWUNvHQ+QYo5CRWG+CaCYLEnhJSUfHXFBJBOUFEoXANUfjlUkiEZaiyiw3YrEGJfrKQ16MAKzHHRwKJsAKpvF2Lyw6kkCTIgWX4siYZOrDanfSmEjIrWL2JExxoYHOVIjcFFnIoJAIv4cUEEoG9wUk31D6JFAk0sPBJEc/+A4nAhaaQCDzRFHsRaBcpTvQa5l0o7OIW5qNJirOwSIdEIqxrxV/p+EGBpagzN02RAUlMSGoRoDTaf71zCgB2p5GkhgwbIaJIUoE+kCTVh5VoPYqCCXA3EnXWIOabqLVWARw1VW8tV5eYEEkEFOQdmvPCIDkMUQOQAVovFIH3HVcxRdB8fWiA6n4k6+hfyNVsD42bvtMoBWZkZudGoZIQkkTeAt/vrzbZLaJfdod3jzZRtCPy9meks9533jc+6cu3TZFQeA4hX/6rmKhM1ZJ09h+oVBx9UoVqdShSD6M2AEXRxfpDMR0kuqbaozpFRnKL40qn/AALmflWT6kTikpjD6Bm+2yCBBFIPTShcTGgmSySPAvYJ3pvNkSJEjj04uk/MeDZIe1uEOHNC81LvUUYZYv0LjXKZJPWwBHWIvpDYzhRIs0C+toqPEe099u03fJGfJVDk5PZ4ynUFJY1uPPSGlqX2K/0Jfg3BtFn5SPsrpuGB2yQC1FaHr2oMTVqeuvJW1rr47ZsLlTlolvX9kyR9yxPWG/cmN/8WVSHbfZMJmTQZQFn7k5CHvJRudrx4rm2Q/lGEPsDyoZGZZplBkEAAAAASUVORK5CYII=' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Image
                style={styles.icon}
                source={{ uri: 'https://w7.pngwing.com/pngs/213/828/png-transparent-facebook-logo-facebook-messenger-logo-social-media-icon-facebook-icon-blue-text-rectangle-thumbnail.png' }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Haven't an account? <Text style={styles.registerText}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'blue',
    marginBottom: 15,
    paddingLeft: 25,
    bottom:-12,
    top:70,
  },
  title2: {
    fontSize: 31,
    textAlign: 'left',
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
    paddingLeft: 25,
    top:70,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '500',
    color: '#929292',
    marginBottom: 40,
    paddingLeft: 25,
    top:70,
  },
  form: {
    marginBottom: 20,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    top:80,
  },
  formAction: {
    marginTop: 20,
    marginBottom: 20,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#929292',
    textAlign: 'center',
    marginBottom: 20,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#929292',
    textAlign: 'center',
    letterSpacing: 0.15,
    paddingVertical: 10,
    top:-70,
  },
  registerText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  input: {
    marginBottom: 16,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
   
  },
  iconButton: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    Botto: 'white',

  },
  icon: {
    width: 30,
    height: 30,
  },
});
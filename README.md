# nombre del integrante 
jose maria hernandez cota 

descripcion de proyecto 
Es una banca que permite hacer transferencias de dinero ,usando codigos QR al igual qie recibir y 
almacena datos gracias a su base de datos que lo permite.

Instalacion y uso de la banca 

este es [Expo](https://expo.dev) creando con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# instalacion y uso 

1. Instala dependencias 

   npm install
   ```

2. iniciar aplicacion 

    npx expo start
   ```

Encontrará opciones para abrir la aplicación en un

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), este limita te limita para probar 

Este use las siguiente librerias de node.js 20.4 

{
  "name": "my-app-bank-",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest --watchAll",
    "lint": "expo lint"
  },
  "jest": {
    "preset": "jest-expo"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.2",
    "@react-navigation/bottom-tabs": "^7.0.0",
    "@react-navigation/native": "^7.0.0",
    "cors": "^2.8.5",
    "expo": "~52.0.15",
    "expo-blur": "~14.0.1",
    "expo-constants": "~17.0.3",
    "expo-font": "~13.0.1",
    "expo-haptics": "~14.0.0",
    "expo-linking": "~7.0.3",
    "expo-router": "~4.0.11",
    "expo-splash-screen": "~0.29.13",
    "expo-status-bar": "~2.0.0",
    "expo-symbols": "~0.2.0",
    "expo-system-ui": "~4.0.5",
    "expo-web-browser": "~14.0.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-native": "0.76.3",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-paper": "^5.12.5",
    "react-native-qrcode-svg": "^6.3.12",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.1.0",
    "react-native-web": "~0.19.13",
    "react-native-webview": "13.12.5"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@types/jest": "^29.5.12",
    "@types/react": "~18.3.12",
    "@types/react-test-renderer": "^18.3.0",
    "jest": "^29.2.1",
    "jest-expo": "~52.0.2",
    "react-test-renderer": "18.3.1",
    "typescript": "^5.3.3"
  },
  "private": true
}
En la primera captura se muestra el menu donde se ponen los datos 
![alt text](<Captura de pantalla 2024-12-06 201558.png>)
En la siguiente se muestra el menu principal 
![alt text](<Captura de pantalla 2024-12-06 201604.png>)
En esta se muestra el menu de operaciones 
![alt text](<Captura de pantalla 2024-12-06 201545.png>)
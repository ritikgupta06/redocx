Here's a structured guide to the context you've provided about React Native with Expo:

---

## **Installation**

To start a new Expo project, run the following command:

bash

```
npx create-expo-app@latest
```

This will create a fresh Expo project with the latest setup.

---

## **React to Basic Code**

To reset the project to a basic starting point, use:

bash

```
npm run reset-project
```

This command will clear any existing configurations and set up the project to its default state.

---

## **Routing**

### **Stack Routing**

To set up stack navigation in Expo, use `expo-router`. Here's an example of how to navigate between screens:

1.  **Using `Link` tag**: Import `Link` from `expo-router` and use it to navigate:

    jsx

    ````import Link from 'expo-router';

    <Link href="/about">Go to Menu</Link>```

    In this example, when the user clicks the "Go to Menu" link, it will navigate to the `/about` page.

    ````

2.  **Using `navigator.navigate`**: You can also navigate programmatically using the `navigate` method from a `navigator`.

    Example:

    jsx

    ````import { useNavigation } from '@react-navigation/native';

    const MyComponent = () => {
    const navigation = useNavigation();

    const handleNavigate = () => {
    navigation.navigate('About'); // Navigate to the About screen
    };

    return <Button title="Go to About" onPress={handleNavigate} />;
    };```
    ````

### **Defining Screens in Stack**

To define screens in a stack navigator, use `stack.screen` with a `name` prop:

jsx

```
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="About" component={AboutScreen} />
</Stack.Navigator>
);
};
```

---

## **Tabs Navigation**

To set up tab navigation:

jsx

```
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>
);
};
```

### **Defining Screens in Tabs**

Use `tabs.screen` to define screens inside the tab navigator:

jsx

```
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Settings" component={SettingsScreen} />
```

---

## **Drawer Navigation**

To set up a drawer navigator:

jsx

```
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
return (
<Drawer.Navigator>
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>
);
};
```

### **Defining Screens in Drawer**

Use `drawer.screen` to define screens inside the drawer:

jsx

```
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Profile" component={ProfileScreen} />
```

---

## **Icons**

To add icons in your navigation, you can use libraries like `react-native-vector-icons` or `expo-icons`.

Example with `expo-icons`:

jsx

```
import { Ionicons } from '@expo/vector-icons';

<Tab.Screen
name="Home"
component={HomeScreen}
options={{ tabBarIcon: () => <Ionicons name="home" size={24} color="black" /> }}
/>
```

---

## **Building the App**

Before building your app, ensure everything is set up correctly:

1.  **Run the doctor command** to check for issues:

    bash

    ```
    npx expo-doctor
    ```

2.  **If build error occurs**, try running:

    bash

    ```
    npm install
    ```

    This will make sure all dependencies are installed.

3.  **Once everything is set**, install `eas-cli` globally for building:

    bash

    ```
    npm install -g eas-cli
    ```

4.  **Login to Expo's EAS**:

    bash

    ```
    eas login
    ```

5.  **Configure your project for EAS Build**:

    bash

    ```
    eas build:configure
    ```

6.  **Build for Android** using the preview profile:

    bash

    ```
    eas build --platform android --profile preview

    ```

# Reducing File Size for Expo Native App

A 161 MB project file size is relatively large for an Expo project. Here's how to reduce the size and build for Android and iOS using EAS.

---

## Reduce Project Size

### 1\. Optimize Images and Assets

Use tools like **TinyJPG** or **TinyPNG** to compress images without losing quality. Minimize the size of assets to enhance performance.

### 2\. Remove Unused Dependencies

Run the following command to clean up unused packages:

```
npm prune
```

### 3\. Check Versioned Files

Ensure that only necessary files are tracked by your version control system. Review your `.gitignore` file to exclude unnecessary files, such as:

- Logs (`*.log`)

- Build artifacts (`build/`, `dist/`)

- Node modules (`node_modules/`)

### 4\. Use Expo Asset Optimization

Run the following command to optimize all assets:

```
expo-optimize
```

---

## Build Your Project with EAS

### Build for Android

To build your project for Android, run:

```
eas build --platform android
```

### Build for iOS

To build your project for iOS, run:

```
eas build --platform ios
```

> **Note:** Ensure you have an Apple Developer account to successfully build for iOS.

---

Following these steps will help reduce your Expo project size and streamline the build process for both Android and iOS platforms.

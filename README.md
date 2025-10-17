# 🚀 HNG13 Mobile Stage 0 – Profile App

A beautifully designed React Native app built with **Expo**, featuring a custom icon, adaptive splash screens for light and dark modes, and ready for production builds.

---

## 🚀 Features

- Custom app icon
- Adaptive splash screens (light and dark)
- Clean Expo configuration
- Portrait orientation only
- Ready for Android and iOS builds

---

## 🧩 Project Structure

```bash
assets/
├── icon.png # App icon
├── adaptive-icon.png # Adaptive Android icon
├── splash-light.png # Light theme splash screen
├── splash-dark.png # Dark theme splash screen
└── themes/ # (Optional) Color themes
├── light.json
└── dark.json
```

## 🛠️ Run Locally

1. Clone the repo

   ```bash
   git clone https://github.com/Jamal-09/hng_mobile_0.git
   cd hng_mobile_0
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the project

   ```bash
   npx expo start
   ```

4. Clean cache (if needed)

   ```bash
   npx expo start -c
   ```

## 📦 Build APK / AAB

- For Expo Build (Classic)
  ```bash
  npx expo build:android -t apk
  ```
- For EAS Build

  ```bash
  npx eas build -p android --profile preview
  ```

- When the build is complete, you’ll get a .apk or .aab file for installation or store upload.

## 📬 Contact

Connect with me:

- 📧 Email: napg.adekunle@gmail.com
- 🌈 Slack: Jamal-09

### Built with 💻 & ❤️ by Jamal

# DriveMate Flutter App

A ride-sharing application for drivers and passengers built with Flutter.

## Project Structure

This project follows a clean architecture pattern with feature-based organization:

```
lib/
├── core/                    # Core functionality
│   ├── constants/          # App constants and configurations
│   ├── network/            # Network layer and API handling
│   ├── services/           # Core services (DI, storage, location)
│   └── utils/              # Utility functions and helpers
├── features/               # Feature modules
│   ├── auth/              # Authentication feature
│   ├── common/            # Shared components and widgets
│   ├── driver/            # Driver-specific features
│   ├── home/              # Home screen and main interface
│   ├── profile/           # User profile management
│   ├── rides/             # Ride booking and management
│   └── splash/            # App splash screen
└── main.dart              # App entry point
```

## Current Status

⚠️ **Development in Progress** - This is a placeholder structure for Git upload.

All files currently contain TODO comments and basic class structures. The actual implementation will be added later.

## Features to Implement

- [ ] User authentication (login/register)
- [ ] Driver profile management
- [ ] Ride booking system
- [ ] Location services and maps
- [ ] User profile management
- [ ] Ride history and tracking
- [ ] Real-time notifications
- [ ] Payment integration

## Getting Started

1. Ensure Flutter is installed and configured
2. Run `flutter pub get` to install dependencies
3. Run `flutter run` to start the app

## Dependencies

The project uses several key packages:
- `flutter_bloc` for state management
- `dio` for HTTP requests
- `shared_preferences` and `hive` for local storage
- `google_maps_flutter` for maps integration
- `geolocator` for location services

## Next Steps

1. Implement core services and network layer
2. Create authentication flow
3. Build UI components and screens
4. Integrate with backend API
5. Add location and mapping features
6. Implement real-time features

## Contributing

This is a placeholder structure. Implementation will begin after the initial Git setup is complete.

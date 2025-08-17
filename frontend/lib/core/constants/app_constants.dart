class AppConstants {
  static const String appName = 'DriveMate';
  static const String appVersion = '1.0.0';
  static const String appDescription =
      'A ride-sharing application for drivers and passengers';

  // API Constants
  static const String baseUrl = 'http://localhost:3000/api';
  static const String apiVersion = 'v1';

  // Storage Keys
  static const String tokenKey = 'auth_token';
  static const String userKey = 'user_data';
  static const String themeKey = 'theme_mode';
  static const String languageKey = 'language';

  // Timeouts
  static const int connectionTimeout = 30000;
  static const int receiveTimeout = 30000;

  // Pagination
  static const int defaultPageSize = 20;

  // Validation
  static const int minPasswordLength = 8;
  static const int maxPasswordLength = 128;
  static const int minPhoneLength = 10;
  static const int maxPhoneLength = 15;
}

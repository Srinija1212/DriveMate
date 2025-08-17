// TODO: Implement main app entry point
// This file will initialize the Flutter app and handle routing

import 'package:flutter/material.dart';

void main() {
  runApp(const DriveMateApp());
}

class DriveMateApp extends StatelessWidget {
  const DriveMateApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DriveMate',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const Scaffold(
        body: Center(
          child: Text('DriveMate App - TODO: Implement Features'),
        ),
      ),
    );
  }
}

// TODO: Implement custom button widget
// This file will contain a reusable custom button component

import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  const CustomButton({super.key});

  @override
  Widget build(BuildContext context) {
    return const ElevatedButton(
      onPressed: null,
      child: Text('Custom Button - TODO: Implement'),
    );
  }
}

// TODO: Implement custom text field widget
// This file will contain a reusable custom text field component

import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  const CustomTextField({super.key});

  @override
  Widget build(BuildContext context) {
    return const TextField(
      decoration: InputDecoration(
        labelText: 'Custom Text Field - TODO: Implement',
      ),
    );
  }
}

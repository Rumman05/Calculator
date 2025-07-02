# Advanced Calculator

A modern, responsive calculator built with vanilla HTML, CSS, and JavaScript. This isn't your basic calculator - it comes packed with features like decimal support, keyboard shortcuts, dark mode, and a clean, intuitive interface.

## ✨ Features

### Core Functionality
- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Decimal Support**: Handle decimal numbers with precision
- **Backspace**: Made a mistake? Just hit backspace to delete the last digit
- **Error Handling**: Smart division by zero protection
- **Chain Calculations**: Perform multiple operations in sequence

### User Experience
- **Keyboard Support**: Use your keyboard for lightning-fast calculations
  - Numbers: `0-9`
  - Operations: `+`, `-`, `*`, `/`
  - Equals: `Enter` or `=`
  - Clear: `Escape` or `C`
  - Decimal: `.`
  - Backspace: `Backspace`
  - Dark Mode: `Ctrl/Cmd + D`

- **Dark Mode**: Toggle between light and dark themes with a single click
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Visual Feedback**: Buttons respond with smooth animations and hover effects

### Smart Details
- **Decimal Button Logic**: The decimal button automatically disables when you already have a decimal point
- **Clean Interface**: Thoughtfully designed layout with proper spacing and typography
- **Gradient Text**: Eye-catching title with a beautiful gradient effect

## 🚀 Getting Started

Getting this calculator up and running is super simple:

1. **Clone or Download**: Get the project files on your computer
2. **Open**: Just open `index.html` in any modern web browser
3. **Calculate**: Start crunching numbers immediately!

No build process, no dependencies, no complicated setup. It's pure vanilla JavaScript at its finest.

## 📁 Project Structure

```
calculator/
├── index.html          # Main HTML structure
├── styles.css          # All the beautiful styling and dark mode
├── script.js           # Calculator logic and functionality
└── README.md           # You are here!
```

## 🎨 Design Philosophy

I wanted to create a calculator that feels modern and pleasant to use. Here's what went into the design:

- **Clean & Minimal**: No unnecessary clutter, just the essentials
- **Accessible Colors**: Good contrast ratios for readability
- **Smooth Interactions**: Every button press feels responsive
- **Mobile-First**: Designed to work great on phones and tablets
- **Dark Mode**: Because everyone loves dark mode these days

## 🔧 Technical Highlights

### Vanilla JavaScript
Built without any frameworks or libraries - just clean, readable JavaScript that anyone can understand and modify.

### CSS Grid & Flexbox
Uses modern CSS layout techniques for a responsive design that adapts to any screen size.

### Event-Driven Architecture
Handles both click and keyboard events seamlessly, making the calculator accessible and fast to use.

### State Management
Simple but effective state management keeps track of current calculations and prevents common calculator bugs.

## 🎯 How It Works

The calculator maintains three key pieces of state:
- `currentInput`: What the user is currently typing
- `previousInput`: The previous number for calculations
- `operator`: The current operation (+, -, ×, ÷)

When you press an operator, it stores the current number and waits for the next one. Press equals, and it performs the calculation. Simple, but it handles edge cases like chaining operations and prevents common errors.

## 🌟 Future Ideas

Some features I'm considering for future versions:
- Memory functions (M+, M-, MR, MC)
- Scientific calculator mode
- Calculation history
- Themes beyond just dark/light mode
- Sound effects (because why not?)

## 🤝 Contributing

Found a bug? Have an idea for improvement? Feel free to:
- Open an issue
- Submit a pull request
- Fork the project and make it your own

This is a learning project, so I'm always open to feedback and suggestions!

## 📱 Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License. Feel free to use it, modify it, and make it your own!

## 👨‍💻 About

Created by Muhammad Rumman as a showcase of vanilla web development skills. Sometimes the best solutions are the simplest ones!

---

*Happy calculating! 🧮*
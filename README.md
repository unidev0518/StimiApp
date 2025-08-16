# Stimi Sports Betting App

A React Native with Expo implementation of the Stimi sports betting interface, recreated pixel-perfectly from the provided Figma design.

## 🚀 Features

- **Pixel-Perfect UI**: Faithful recreation of the Figma design with attention to detail
- **Cash/Coin Toggle**: Interactive betting mode switch with conditional styling
  - **Cash Mode**: Green odds buttons (+1.5/-155 text)
  - **Coin Mode**: Yellow odds buttons (+1.5/-155 text)
- **TypeScript**: Full TypeScript implementation for type safety
- **Smooth Animations**: Subtle animations for button presses and toggle switches
- **Modular Architecture**: Clean, reusable component structure
- **Production-Ready**: Organized file structure suitable for scaling

## 🎯 Assessment Requirements ✅

- ✅ **Expo Latest SDK**: Built with Expo SDK 53
- ✅ **1:1 Figma Recreation**: Pixel-level accuracy to the design
- ✅ **Hardcoded Data**: All data is mocked, no API connections required
- ✅ **Production Structure**: Professional file organization and naming
- ✅ **Clean Code**: Modular, readable, and well-structured components
- ✅ **Toggle Feature**: Cash/Coin mode with green/yellow conditional styling
- ✅ **TypeScript**: Full TypeScript implementation
- ✅ **Animations**: Smooth button press and toggle animations
- ✅ **Reusable Components**: Scalable component architecture

## 📱 Components Overview

### Core Components
- **Header**: Official STIMI header image with logo and controls
- **BettingModeToggle**: Cash/Coin mode switcher with smooth animation
- **FeaturedCard**: Gradient card with people count and team matchup
- **GameMatchup**: Game details with betting odds grid
- **OddsButton**: Reusable betting button with conditional styling
- **BottomNavigation**: Five-tab bottom navigation
- **NFL Section**: Official NFL logo with dropdown and games count

### Key Features
- **Conditional Styling**: Odds buttons change color based on betting mode
- **Smooth Animations**: Spring animations for toggles and button presses
- **Responsive Design**: Optimized for mobile devices
- **Dark Theme**: Consistent dark UI matching the design

## 🛠 Tech Stack

- **React Native**: 0.79.5
- **Expo**: SDK 53
- **TypeScript**: 5.8.3
- **Expo Linear Gradient**: For featured card gradients
- **Expo Vector Icons**: For all interface icons

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Stimi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - **iOS**: `npm run ios` (requires macOS)
   - **Android**: `npm run android`
   - **Web**: `npm run web`
   - **Expo Go**: Scan QR code with Expo Go app

## 🎮 Usage

### Betting Mode Toggle
- Located prominently in the interface
- Switch between **Cash** and **Coin** modes
- Odds buttons automatically update colors:
  - **Cash Mode**: Green text
  - **Coin Mode**: Yellow text

### Interactive Elements
- All buttons have press animations
- Odds buttons are fully interactive
- Navigation elements respond to touch
- Expandable Game Lines section

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── BettingModeToggle.tsx
│   ├── FeaturedCard.tsx
│   ├── GameMatchup.tsx
│   ├── OddsButton.tsx
│   └── BottomNavigation.tsx
├── screens/            # Screen components
│   └── HomeScreen.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── constants/          # App constants and data
│   ├── colors.ts
│   └── mockData.ts
└── App.tsx            # Main app entry point
```

## 🎨 Design Decisions

### Toggle Placement
The Cash/Coin toggle is strategically placed between the NFL header and the featured card, making it easily accessible while maintaining the visual hierarchy of the original design.

### State Management
Used React's built-in `useState` for simple state management, perfect for this single-screen implementation while remaining scalable.

### Animation Strategy
Implemented subtle spring animations for:
- Toggle switch movement
- Button press feedback
- Smooth color transitions

### Component Architecture
Designed components to be:
- **Reusable**: OddsButton, Header, etc.
- **Configurable**: Props for customization
- **Scalable**: Easy to extend and modify

## 🚀 Performance Considerations

- **Optimized Rendering**: Proper use of React.memo where beneficial
- **Smooth Animations**: Native driver for 60fps animations
- **Efficient State**: Minimal re-renders with focused state updates
- **TypeScript**: Compile-time error catching

## 🎯 Product Thinking

The toggle placement was chosen to:
1. **Maintain Visual Hierarchy**: Doesn't disrupt the main content flow
2. **Easy Access**: Prominently visible without being intrusive
3. **Logical Grouping**: Near betting-related content
4. **User Experience**: Clear visual feedback for mode changes

## 🧪 Testing

Run the app on different devices to test:
- Toggle functionality
- Color changes in both modes
- Animation smoothness
- Responsive layout
- Touch interactions

## 📱 Demo

The app includes:
- Interactive toggle between Cash/Coin modes
- Animated odds buttons with conditional styling
- Smooth transitions and feedback
- Fully functional navigation elements

---

**Note**: This is a single-screen implementation focused on demonstrating frontend skills, visual precision, and thoughtful UI interactions as requested in the Stimi technical assessment.

# Countdown Timer

## Overview

A customizable React countdown timer component that supports multiple time formats, allows users to define a callback when the countdown ends, and supports custom styling.

## Installation

You can install the package using npm:

```sh
npm install react-countdown-timer-minify
```

Or install it locally from a `.tgz` file:

```sh
npm install ../react-countdown-timer-minify.tgz
```

## Usage

Import and use the `CountdownTimer` component in your project:

```tsx
import React from "react";
import CountdownTimer from "react-countdown-timer-minify";

const App = () => {
  return (
    <div>
      {/* Default Countdown Timer (Minutes input) */}
      <CountdownTimer duration={1920} />

      {/* Countdown Timer with Different Formats */}
      <CountdownTimer duration={1920} format="hh:mm:ss" />
      <CountdownTimer duration={1920} format="dd:hh:mm:ss" />
      <CountdownTimer duration={1920} format="ddd hh:mm" />
      <CountdownTimer duration={1920} format="ddd hh:mm:ss" />

      {/* Countdown Timer with Custom Styling */}
      <CountdownTimer
        duration={330}
        style={{ color: "red", fontSize: "24px", backgroundColor: "yellow" }}
      />

      {/* Countdown Timer with Callback on End */}
      <CountdownTimer duration={60} onEnd={() => alert("Time's up!")} />
    </div>
  );
};

export default App;
```

## Customization:

- **Duration**: Set the initial countdown time in minutes (default is `0`).
- **Format**: Choose a format for displaying the countdown (default is `hh:mm:ss`). Available options:
  - `hh:mm:ss` 
  - `hhh:mm:ss`
  - `dd:hh:mm:ss`
  - `mm:ss`
  - `mmm:ss`
  - `ddd hh:mm`
  - `ddd hh:mm:ss`
- **On End Callback**: Pass a function to execute when countdown reaches zero (default is an empty function `() => {}`).
- **Custom Styles**: Pass custom CSS properties to style the countdown display.

## Default Styling

The component comes with default styling:

```css
.countdown-timer {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
}
```

## License

This project is licensed under the MIT License.

import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    return (
        //benefits
        // - can consume multiple contexts in one component
        // - can also be used in functional components (contextType can only be used in class component)
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div>
              <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

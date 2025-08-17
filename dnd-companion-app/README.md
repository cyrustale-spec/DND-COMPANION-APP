# D&D Companion App

This is the source code for a premium, standalone D&D companion application, developed by Jules.

## Features

*   **Multi-Tab Journal System:** Create unlimited tabs for session notes, lore, etc. The content is saved automatically.
*   **Markdown Editor:** The journal uses a split-pane Markdown editor with live preview.
*   **Bestiary:** A monster compendium with a searchable list and detailed stat block view.
*   **Data Persistence:** All your data is saved locally to a SQLite database, so your notes will be there when you reopen the app.

## Getting Started

This project was developed in a "code-only" environment, which means the dependencies are listed in `package.json` but are not installed in the project directory. You will need to install them yourself.

### Prerequisites

*   Node.js (v18 or newer recommended)
*   npm

### Installation & Setup

1.  **Navigate to the project directory:**
    Open your terminal and `cd` into the `dnd-companion-app` directory.

2.  **Install dependencies:**
    Run the following command to install all the necessary dependencies from `package.json`. This will create the `node_modules` directory.
    ```bash
    npm install
    ```

3.  **Start the application:**
    Once the installation is complete, you can start the application in development mode with this command:
    ```bash
    npm start
    ```
    This will launch the Electron application window.

## Building the Application

To create a distributable executable file for your operating system (e.g., an `.exe` on Windows or a `.dmg` on macOS), you can use the `make` script:

```bash
npm run make
```

This will create a distributable file in the `out` directory.

---
*This code was written by Jules, an AI software engineer.*

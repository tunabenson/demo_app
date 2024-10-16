
# Demo App Setup

## Prerequisites

### 1. Install Pip (Python Package Installer)

- **Windows:**
  1. Make sure Python is installed. You can download it from [python.org](https://www.python.org/).
  2. During installation, check the box **"Add Python to PATH"**.
  3. Open Command Prompt and verify that Pip is installed:
     ```bash
     python -m pip --version
     ```
  4. If Pip is not installed, use:
     ```bash
     python -m ensurepip --upgrade
     ```

- **macOS:**
  1. Make sure Python is installed by running:
     ```bash
     python3 --version
     ```
  2. Pip usually comes pre-installed with Python on macOS. To check:
     ```bash
     python3 -m pip --version
     ```
  3. If not installed, use:
     ```bash
     python -m ensurepip --upgrade
     ```

### 2. Install Node.js and npm (Node Package Manager)

- **Windows:**
  1. Download the Node.js installer from [nodejs.org](https://nodejs.org/).
  2. Run the installer and follow the steps.
  3. Open Command Prompt and verify the installations:
     ```bash
     node -v
     npm -v
     ```

- **macOS:**
  1. Open Terminal and use [Homebrew](https://brew.sh/) to install Node.js:
     ```bash
     brew install node
     ```
  2. Verify the installations:
     ```bash
     node -v
     npm -v
     ```

Once you have Pip and npm installed, you're ready to proceed with the backend and frontend setup.

---

## Backend Initialization

1. Navigate to the backend directory:
   ```bash
   cd ./backend
   ```

2. Activate the virtual environment:
   - For Windows:
     ```bash
     .\.venv\Scripts\activate
     ```
   - For macOS:
     ```bash
     source .venv/bin/activate
     ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   flask run --host=0.0.0.0
   ```

5. Copy the address displayed in the terminal (it should look like `http://0.0.0.0:5000`) and keep it for the frontend setup.

---

## Frontend Initialization

1. Navigate back to the root directory:
   ```bash
   cd ..
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Open `App.js` in your code editor, paste the Flask server address (from the backend setup) where needed.

4. Install the frontend dependencies:
   ```bash
   npm install
   ```

5. Run the React Native app using Expo:
   ```bash
   npx expo start
   ```

You should now have both the backend and frontend running!
```


# **Project: Personalized Startpage**

**Description:**

This project is a custom-built startpage designed to enhance your browsing experience by providing quick access to your most frequently used websites and essential information.

* **Personalized Links:** Organize links into categories (e.g., Social, Coding, Developer, Documentation) for better navigation.
* **Time and Weather:** Displays a relevant weather icon to visually represent the current conditions. Provides accurate weather updates based on your location, including temperature, humidity, wind speed, and more.
* **GitHub Stats:** Display your GitHub profile details, including followers, following, and repositories.
* **To-Do List:** Keep track of your tasks and stay organized. Create, edit, and delete tasks to stay organized.
* **Google Custom Search:** Search the web directly from your startpage.

**Installation:**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/navjot369/StartPage
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server (temporary):**
   ```bash
   npm dev
   ```
   **Run the server(local) continuously, even after closing the terminal:**
   ```bash
   npm start
   ```
5. **Access the startpage:** Open your browser and navigate to `http://localhost:3001`.
   

**Customization:**

* **Links:** Edit the `data.json` file to add, remove, or modify links.
* **GitHub Stats:** Replace the placeholder values in the code with your GitHub username.
* **Location:** Replace the coordinates in fetch API with present location.

**Technologies:**

* **HTML:** Provides the structure for website.
* **CSS:** For styling the components.
* **JavaScript:** For handling interactions and data.
* **GitHub API:** For fetching GitHub user data.
* **Google Search API:** For integrating Google search functionality.
* **Weather API:** For fetching real-time weather stats of location specified.

**Preview:**

  <img width="1000" alt="Screenshot 2024-09-21 at 10 45 25 AM" src="https://github.com/user-attachments/assets/d4792c2f-3663-4a50-a976-8640bc793ec5">


**Contributing:**

Feel free to contribute to this project by submitting pull requests or reporting issues.

**License:**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

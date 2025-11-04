# 🦎 Note Gecko

<div align="center">
  <img src="./public/browser-favicon.png" alt="Note Gecko Logo" width="120" />
  
  ### AI-Powered Article Summarizer
  
  Speed up your note-taking with Note Gecko, an open-source article summarizer that transforms lengthy articles into clear and concise summaries using OpenAI GPT-4.

  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Redux](https://img.shields.io/badge/Redux_Toolkit-2.0.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
</div>

---

## ✨ Features

- 🤖 **AI-Powered Summarization** - Leverages OpenAI GPT-4 through RapidAPI to generate accurate, concise summaries
- 📝 **Smart URL Processing** - Simply paste any article URL and get instant summaries
- 📚 **Search History** - Automatically saves your summarized articles in local storage for quick access
- 📋 **Copy Functionality** - One-click copy for URLs to easily share or save
- 🎨 **Modern UI/UX** - Beautiful gradient design with responsive layout
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 💾 **Persistent Storage** - Your article history is saved locally across sessions

---

## 🚀 Demo

Experience the power of AI-driven article summarization:

1. **Paste** any article URL
2. **Submit** to process
3. **Read** the concise summary
4. **Browse** your history anytime

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library for building interactive interfaces
- **Vite** - Next-generation frontend tooling for blazing fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### State Management
- **Redux Toolkit** - Official, opinionated toolset for efficient Redux development
- **RTK Query** - Powerful data fetching and caching solution

### Fonts & Styling
- **Satoshi** - Primary font family from Fontshare
- **Inter** - Secondary font from Google Fonts

### API
- **RapidAPI** - Article Extractor and Summarizer service powered by OpenAI GPT-4

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- RapidAPI account and API key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-muse/note-gecko.git
   cd note-gecko
```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key_here
   ```

   > **Getting your API Key:**
   > 1. Sign up at [RapidAPI](https://rapidapi.com/)
   > 2. Subscribe to [Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)
   > 3. Copy your API key from the dashboard

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

---

## 🎯 Usage

### Summarize an Article

1. **Enter URL**: Paste the article URL into the input field
2. **Submit**: Click the submit button (↵) or press Enter
3. **View Summary**: Wait for the AI to process and display the summary
4. **Access History**: Click on any previous URL from your history to view its summary again

### Copy URLs

- Click the copy icon next to any URL in your history
- The URL is automatically copied to your clipboard
- A checkmark appears to confirm the copy action

---

## 📁 Project Structure

```
note-gecko/
├── public/
│   ├── browser-favicon.png
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── copy.svg
│   │   ├── grid.svg
│   │   ├── link.svg
│   │   ├── loader.svg
│   │   ├── logo-gecko.svg
│   │   └── tick.svg
│   ├── components/
│   │   ├── Demo.jsx       # Main demo component with URL input and history
│   │   └── Hero.jsx       # Hero section with branding
│   ├── services/
│   │   ├── article.js     # RTK Query API service
│   │   └── store.js       # Redux store configuration
│   ├── App.css            # Global styles and Tailwind utilities
│   ├── App.jsx            # Root component
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables (create this)
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🔧 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint to check code quality

---

## 🌟 Key Components

### Hero Component
Displays the app branding, title, and description with a link to Rapid Muse.

### Demo Component
The core functionality including:
- URL input form
- Article summary display
- Search history management
- Loading and error states

### Article Service
RTK Query API configuration for:
- Base API setup with RapidAPI headers
- Summary endpoint with URL encoding
- Automatic caching and request handling

---

## 🎨 Customization

### Styling
The app uses Tailwind CSS with custom utilities defined in `App.css`:
- Custom gradient backgrounds
- Responsive design patterns
- Reusable button and input styles

### Fonts
Modify font imports in `index.html` or update Tailwind config in `tailwind.config.js`

### API Configuration
Update the API service in `src/services/article.js` to customize:
- Summary length (currently set to 3)
- Additional parameters
- Different endpoints

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_RAPID_API_ARTICLE_KEY` | Your RapidAPI key for article summarization | Yes |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---



## 🔮 Future Enhancements

- [ ] Export summaries as PDF or text files
- [ ] Support for multiple languages
- [ ] Custom summary length selection
- [ ] Dark mode support
- [ ] User authentication and cloud storage
- [ ] Browser extension for quick summarization
- [ ] Summary quality rating system

---

## 👨‍💻 Author

**Dev-muse**

- Website: [Rapid Muse](https://rapidmuse.com)
- GitHub: [@Dev-muse](https://github.com/Dev-muse)

---

## 🙏 Acknowledgments

- OpenAI for GPT-4 technology
- RapidAPI for providing the Article Extractor API
- [dub.sh](https://dub.sh) for gradient grid background inspiration
- Fontshare for the Satoshi font family

---

## 📧 Support

If you have any questions or run into issues, please open an issue on GitHub or contact through [Rapid Muse](https://rapidmuse.com).

---

<div align="center">
  
  ### ⭐ Star this repo if you find it helpful!
  
  Made with ❤️ by Dev-muse
  
</div>
 

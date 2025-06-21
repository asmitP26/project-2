# project-2
# 🚀 Crypto Price Tracker

A modern, responsive cryptocurrency price tracking application built with vanilla JavaScript, HTML, and CSS. Features real-time price updates, interactive charts, dark mode, search functionality, and favorites management.

![Crypto Price Tracker](https://via.placeholder.com/800x400/2563eb/ffffff?text=Crypto+Price+Tracker)

## ✨ Features

### Core Features
- **Real-time Price Data**: Live cryptocurrency prices from CoinGecko API
- **Interactive Charts**: 7-day price history using Chart.js
- **Search Functionality**: Search cryptocurrencies by name or symbol
- **Favorites System**: Save favorite coins with localStorage
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Technical Features
- **API Caching**: Intelligent caching to reduce API calls
- **Auto-refresh**: Automatic data updates every minute
- **Error Handling**: Comprehensive error handling and user feedback
- **Performance Optimized**: Debounced search, lazy loading, and efficient rendering
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Modern styling with CSS Grid/Flexbox |
| **Vanilla JavaScript** | Core functionality and API integration |
| **Chart.js** | Interactive price charts |
| **CoinGecko API** | Cryptocurrency data source |
| **Font Awesome** | Icons and visual elements |
| **LocalStorage** | Client-side data persistence |

## 📁 Project Structure

\`\`\`
crypto-price-tracker/
├── frontend/
│   ├── index.html              # Main HTML file
│   ├── styles/
│   │   ├── main.css           # Core styles and variables
│   │   ├── components.css     # Component-specific styles
│   │   └── responsive.css     # Responsive design rules
│   └── js/
│       ├── config.js          # Configuration and constants
│       ├── utils.js           # Utility functions
│       ├── api.js             # API service layer
│       ├── chart.js           # Chart functionality
│       ├── favorites.js       # Favorites management
│       ├── theme.js           # Dark/light mode
│       ├── search.js          # Search functionality
│       └── main.js            # Main application logic
├── backend/
│   ├── server.js              # Express server (future expansion)
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment variables template
└── README.md                  # Project documentation
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls
- Optional: Node.js for backend server

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker
   \`\`\`

2. **Option A: Run directly in browser**
   - Open \`frontend/index.html\` in your web browser
   - That's it! The app will work immediately

3. **Option B: Run with local server (recommended)**
   \`\`\`bash
   # Using Python
   cd frontend
   python -m http.server 8000
   
   # Using Node.js
   npx serve frontend
   
   # Using PHP
   cd frontend
   php -S localhost:8000
   \`\`\`

4. **Option C: Run with backend server**
   \`\`\`bash
   cd backend
   npm install
   npm start
   \`\`\`

### Usage

1. **View Cryptocurrencies**: The app loads the top 50 cryptocurrencies by market cap
2. **Search**: Use the search bar to find specific cryptocurrencies
3. **Add Favorites**: Click the heart icon to save favorite coins
4. **View Charts**: Click the chart icon to see 7-day price history
5. **Toggle Theme**: Click the moon/sun icon to switch between dark and light modes
6. **Refresh Data**: Click the refresh button or wait for auto-refresh

## 🎨 Features Deep Dive

### Real-time Data
- Fetches data from CoinGecko API every minute
- Shows current price, 24h change, and market cap
- Color-coded price changes (green for positive, red for negative)

### Interactive Charts
- 7-day price history visualization
- Responsive Chart.js implementation
- Hover tooltips with detailed information
- Modal overlay for better viewing experience

### Search & Filtering
- Real-time search with debouncing
- Search by cryptocurrency name or symbol
- Instant results with no page reload

### Favorites Management
- Add/remove favorites with one click
- Persistent storage using localStorage
- Favorites counter in the stats section

### Theme System
- Dark and light mode support
- Automatic system preference detection
- Smooth transitions between themes
- Persistent theme selection

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Horizontal scrolling for tables on mobile

## 🔧 Configuration

### API Configuration
The app uses the free CoinGecko API with the following endpoints:
- \`/coins/markets\` - Cryptocurrency market data
- \`/global\` - Global market statistics
- \`/coins/{id}/market_chart\` - Price history data

### Customization
You can customize the app by modifying:
- \`js/config.js\` - API settings, refresh intervals, cache duration
- \`styles/main.css\` - Color scheme, fonts, spacing
- \`js/main.js\` - Number of coins displayed, default settings

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 🚀 Performance

- **First Load**: ~2-3 seconds
- **API Response**: ~500ms average
- **Chart Rendering**: ~200ms
- **Search Response**: Instant (debounced)
- **Theme Toggle**: ~300ms transition

## 🔒 Privacy & Security

- No user data collection
- All data stored locally in browser
- HTTPS API calls only
- No third-party tracking
- Open source and transparent

## 🛣️ Roadmap

### Phase 1 (Current)
- ✅ Real-time price tracking
- ✅ Interactive charts
- ✅ Search functionality
- ✅ Favorites system
- ✅ Dark/light mode
- ✅ Responsive design

### Phase 2 (Future)
- [ ] User accounts and cloud sync
- [ ] Price alerts and notifications
- [ ] Portfolio tracking
- [ ] More chart timeframes
- [ ] Advanced filtering options
- [ ] Export data functionality

### Phase 3 (Advanced)
- [ ] Technical analysis indicators
- [ ] News integration
- [ ] Social sentiment analysis
- [ ] Mobile app (React Native)
- [ ] Desktop app (Electron)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CoinGecko](https://coingecko.com) for providing the free cryptocurrency API
- [Chart.js](https://chartjs.org) for the charting library
- [Font Awesome](https://fontawesome.com) for the icons
- The cryptocurrency community for inspiration

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/crypto-price-tracker](https://github.com/yourusername/crypto-price-tracker)

---

⭐ If you found this project helpful, please give it a star on GitHub!
\`\`\`

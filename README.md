# Movie Finder

A modern, full-stack movie discovery application that helps users search and explore movies while tracking trending searches. Built with React, Vite, Tailwind CSS, and powered by The Movie Database (TMDb) API with Appwrite backend.

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/react-%5E19.1.1-blue)
![Vite](https://img.shields.io/badge/vite-%5E7.1.7-purple)

## Features

- **🔍 Movie Search**: Real-time search functionality with debounced input for optimal performance
- **📊 Trending Analytics**: Track and display the most searched movies based on user activity
- **⚡ Fast Performance**: Lightning-fast search with optimized API calls and caching
- **📱 Responsive Design**: Fully responsive UI built with Tailwind CSS
- **🎬 Rich Movie Data**: Access to comprehensive movie information including posters, titles, and metadata
- **🔄 Smart Search Tracking**: Persistent search history with frequency-based trending calculations
- **♿ Accessibility**: Semantic HTML and accessible component design
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations and loading states

## Tech Stack

### Frontend

- **React 19** - UI library
- **Vite 7** - Next-generation build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React-Use** - React hooks collection
- **ESLint** - Code quality and consistency

### Backend & Database

- **Appwrite** - Backend-as-a-Service for database and API management
- **The Movie Database (TMDb) API** - Movie data provider

### Development Tools

- **Node.js** - JavaScript runtime
- **npm** - Package manager

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/movie-finder.git
   cd movie-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

## Configuration

### Appwrite Setup

1. Create an Appwrite account at [https://appwrite.io](https://appwrite.io)
2. Create a new project and database
3. Set up a collection with the following attributes:
   - `search_term` (String, required)
   - `movie_id` (Integer)
   - `count` (Integer, default: 0)
   - `poster` (String, URL)

4. Copy your Project ID, Database ID, and Collection ID to `.env.local`

### TMDb API

The TMDb API key is pre-configured in the application. For production, consider moving this to environment variables for security.

## Usage

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and style:

```bash
npm run lint
```

## Project Structure

```
movie-finder/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   ├── movieCard.jsx   # Movie card component
│   │   ├── Search.jsx      # Search input component
│   │   └── Spinner.jsx     # Loading spinner component
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── main.jsx            # React entry point
│   ├── index.css           # Global styles
│   └── appwrite.js         # Appwrite database utilities
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── eslint.config.js        # ESLint configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## API Integration

### TMDb API

The application uses TMDb's REST API endpoints:

- **Discover Movies**: `GET /discover/movie` - Fetch popular or trending movies
- **Search Movies**: `GET /search/movie?query={searchTerm}` - Search for specific movies

### Appwrite Database

Custom functions for database operations:

- **updateSearchTerm()** - Records or updates search queries and tracks frequency
- **getTrendingMovies()** - Retrieves top 5 most-searched movies

## Features in Detail

### Search Functionality

- Debounced search input (500ms delay) prevents excessive API calls
- Real-time results as users type
- Graceful error handling with user-friendly messages
- Empty state handling when no results are found

### Trending Movies

- Automatically tracks all search queries
- Ranks movies by search frequency
- Updates in real-time as users search
- Displays top 5 trending movies

### Loading States

- Visual feedback during API requests
- Spinner component for better UX
- Prevention of duplicate requests

## Development Guidelines

### Code Style

- Follow ESLint rules defined in `eslint.config.js`
- Use functional components and React hooks
- Maintain consistent naming conventions

### Component Structure

- Keep components modular and reusable
- Pass props clearly and use prop validation where applicable
- Use custom hooks for logic extraction

### Performance Optimization

- Implement debouncing for search input
- Optimize re-renders with proper dependency arrays
- Use lazy loading where appropriate

## Error Handling

The application includes comprehensive error handling:

- Network request failures gracefully degrade
- User-friendly error messages
- Console logging for debugging
- Try-catch blocks in async operations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

- **Build Size**: Optimized with Vite for minimal bundle size
- **Load Time**: <3 seconds on standard connection
- **Search Response**: <500ms with debouncing
- **API Efficiency**: Minimal redundant requests with debouncing

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to GitHub Pages

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Write clear, descriptive commit messages
- Update documentation for new features
- Add comments for complex logic
- Run `npm run lint` before submitting PRs

## Troubleshooting

### Common Issues

**Issue**: Movies not displaying

- Check Appwrite connection in `.env.local`
- Verify TMDb API is accessible
- Check browser console for errors

**Issue**: Search not working

- Ensure environment variables are set correctly
- Check network tab for API response
- Verify Appwrite database structure

**Issue**: Build failures

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Check Node.js version compatibility

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Contact the development team
- Check existing documentation

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for backend services
- [React](https://react.dev/) for the UI library
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

**Last Updated**: February 2025
**Maintained by**: Development Team

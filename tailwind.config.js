module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure Tailwind scans all your files
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'business-image': "url('/images/business-bg.jpg')", // Replace with your image path
      },
    },
  },
  plugins: [],
};


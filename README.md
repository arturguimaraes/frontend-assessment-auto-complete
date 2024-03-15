# AutoComplete Product Search

This project implements an autocomplete search functionality that allows users to search for products by their names. Utilizing the power of React's Context API and custom hooks, it provides a seamless and efficient way to filter through products as the user types, displaying matching products' titles.

## Features

- **Instant Search**: Dynamically search through product names as you type.
- **Error Handling**: Gracefully handles errors, providing user feedback on failed searches.
- **Efficient Fetching**: Implements debounce to reduce the number of API calls, enhancing performance (only triggers API call after a brief moment the user has stopped typing).
- **Context API**: Leverages React's Context API to manage and share state across components, making the application scalable and maintainable.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/arturguimaraes/frontend-assessment-auto-complete.git
cd frontend-assessment-auto-complete
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
npm start
```

The application will be running at http://localhost:3000.

### Usage

Simply start typing the name of the product you're looking for in the search bar. As you type, a list of matching products (by title) will be displayed below. The search is optimized to trigger after you've stopped typing for a brief moment, reducing unnecessary API calls.

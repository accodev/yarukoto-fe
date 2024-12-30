function env() {
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_URL: process.env.API_URL || 'http://localhost:5277'
  };
}

export { env };
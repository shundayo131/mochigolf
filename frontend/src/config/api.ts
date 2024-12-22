const API_BASE_URL = process.env.REACT_APP_API_BASE_URL 

console.log("process.env:", process.env); // Log all environment variables
console.log("API Base URL:", process.env.REACT_APP_API_BASE_URL); // Log the specific variable

export const ENDPOINTS = {
  practice: {
    getAll: `${API_BASE_URL}/practice`,
    create: `${API_BASE_URL}/practice`,
    // Add practice endpoints (delete, edit, getOne etc.)

  },
  user: {
    // TODO - add user endpoints 

  },
};
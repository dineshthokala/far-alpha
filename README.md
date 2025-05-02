# Far Alpha Backend API

## Overview
This is a simple backend API built using Node.js and Express. The API includes a single route `/sayHello` that responds with a JSON object containing the message "Hello User." The API is configured to run on port 80.

## Features
- **Route**: `/sayHello`
  - Method: `GET`
  - Response: `{ "message": "Hello User" }`

## Prerequisites
- Node.js (v16 or later)
- PM2 (for process management)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd far-alpha
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the API
1. Start the server:
   ```bash
   sudo node index.js
   ```
2. The server will start on port 80. You can test the API by sending a GET request to:
   ```
   http://localhost/sayHello
   ```

## Deployment
The API is deployed to a virtual machine using GitHub Actions. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Steps:
1. Push changes to the `main` branch to trigger the deployment workflow.
2. The workflow will:
   - Check out the code.
   - Install dependencies.
   - Transfer the code to the VM.
   - Start the API using PM2.

## Testing the API
1. After deployment, test the API by sending a GET request to:
   ```
   http://<vm-ip-address>/sayHello
   ```
2. Expected Response:
   ```json
   {
     "message": "Hello User"
   }
   ```

## Challenges and Solutions
1. **SSH Key Issues**:
   - Resolved by correcting file paths and setting appropriate permissions.
2. **Port 80 Binding**:
   - Used `sudo` to run the server as ports below 1024 require elevated privileges.
3. **File Transfer**:
   - Added an `scp` step in the GitHub Actions workflow to transfer files to the VM.

## License
This project is licensed under the ISC License.

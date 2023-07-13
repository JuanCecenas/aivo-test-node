# AIVO Test YouTube API

Challenge test for AIVO
## Installation

Make sure you have Node.js and npm installed on your system.

1. Clone this repository:

   ```shell
   git clone https://github.com/JuanCecenas/aivo-test-node.git
   ```

2. Install project dependencies: 

  ```shell
  npm install
  ```

# Usage

1. Obtain a YouTube API key by following the official documentation.

2. Create a .env file in the project root directory and add your YouTube API key:

3. Start the server:

  ```shell
  npm start
  ```

# Open your web browser and access the following URL:

http://localhost:3000/api-docs

Here you will find the Swagger interface with the API documentation and you can test the YouTube video search endpoint.

# Example

## Search YouTube Videos

* URL: /api/youtube
* Method: GET
* Query Parameters: search (required): Search query for YouTube videos.

### Responses:
* 200 OK: List of videos found on YouTube.
* 404 Not Found: No videos found for the search query.
* 500 Internal Server Error: Error connecting to the YouTube API.
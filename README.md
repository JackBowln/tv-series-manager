
# TV series manager


## Description

This project is a web application that uses Apollo Client and GraphQL to provide a dynamic and reactive interface. Features include:

- Real-time subscriptions using WebSockets
- GraphQL queries and mutations
- Modern and intuitive user interface


## Features

- **Real-time Reactivity**: The application updates automatically with real-time data thanks to GraphQL subscriptions.
- **Queries and Mutations**: Full support for read and write operations on the GraphQL server.
- **User-friendly Interface**: User interface designed with a focus on usability and user experience.


## Technologies Used

- **Frontend**: Next.js, Apollo
- **Styling**: CSS, Tailwind
- **Design**: Figma


## Installation

1. Clone the repository:

```bash
git clone https://github.com/JackBowln/tv-series-manager.git
```

2. Navigate to the project directory:

```bash
cd tv-series-manager
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root of the project with the following variables:

```env

NEXT_PUBLIC_OMDB_API_KEY="your-omdb-api-key" 
NEXT_PUBLIC_OMDB_URL="http://www.omdbapi.com/"
NEXT_PUBLIC_GRAPHQL_URL="http://your-graphql-endpoint" 
NEXT_PUBLIC_WEBSOCKET_URL="ws://your-graphql-endpoint"
NEXT_PUBLIC_API_KEY="api-key"

```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Design Screenshots

[Figma](https://www.figma.com/design/4Y3iMokdzoKr6Ojcu7qqgL/%40shadcn%2Fui---Design-System-(Community)?node-id=2-287&t=iHkunwn3Z4HUOT9T-1)

### Home Page

![Home Page](/screenshot-figma.png)

### Create episode
![Create episode](/screenshot-figma-2.png)

### Episode details
![Episode details](/screenshot-figma-3.png)




## Contribution

Feel free to open issues and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

With this README, you provide a clear overview of the project, installation and configuration instructions, and examples of code and design. Replace the placeholder links with the actual URLs for the screenshots and any other resources mentioned.

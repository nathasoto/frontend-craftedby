# Craftedby

Craftedby is an innovative web application that combines an e-commerce platform and a blog. It allows artisans to create accounts, showcase, and sell their products while sharing their stories and working methods through blog articles. Users can easily navigate, purchase artisanal products, and learn more about the creators.

## Table of Contents

- [Project Objectives](#project-objectives)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API](#API)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Customizing Configuration](#customizing-configuration)
- [Project Setup](#project-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Objectives

- Design an aesthetic e-commerce site to showcase artisanal products.
- Allow users to easily navigate between different product categories (jewelry, art, decor, etc.).
- Integrate advanced search features (by material, artist, style).
- Provide an intuitive shopping cart with product customization options (color, size).
- Ensure a smooth and aesthetic user experience with artistic layout.
- Implement a user management system for client accounts with all necessary delivery information.

## Features

- **Artisan Space**: Presentation of profiles and creations of artisans.
- **Product History**: Each product is accompanied by a story or anecdote about its creation.
- **Artisan Pages**: Information about the artisan, their story, manufacturing methods, specialties, and approximate location.
- **Customized Products**: Option to add personalized artisanal products on demand.
- **Social Media Sharing**: Sharing tool to promote creations.
- **Account Management for Artisans**: Artisans can manage their accounts and update their creations.
- **Visual Themes**: Multiple visual themes to highlight products according to the artisan's preferences.

## Technologies Used

- Vue.js 3
- Node.js
- Pinia (state management)
- Vue Router (routing)
- Vite (build tool)
- ESLint (linter)
- Prettier (formatter)

## API
This project uses the [Fake Store API](https://fakestoreapi.com/) to simulate user authentication and product data.

### Example API Usage
```javascript
fetch('https://fakestoreapi.com/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    username: "mor_2314",
    password: "83r5^_"
  })
})
        .then(res => res.json())
        .then(json => console.log(json))
```

## Recommended IDE Setup

For a better development experience, it is recommended to use [Visual Studio Code (VSCode)](https://code.visualstudio.com/) with the [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension. Make sure to disable Vetur if you have it installed.

## Customizing Configuration

For more details on customizing Vite, refer to the [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

### Installing Dependencies

To install the necessary dependencies, run:

```sh
npm install

```
## Project Structure

- **public/**: Contains static files.
- **src/**: Contains the project's source code.
    - **assets/**: Contains static resources like images and styles.
    - **components/**: Contains Vue components.
    - **views/**: Contains application views.
    - **store/**: Contains application state managed by Pinia.
    - **router/**: Contains configuration of routes with Vue Router.
    - **App.vue**: Root component of the application.
    - **main.js**: Entry point of the application.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your modifications and commit (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

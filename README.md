# Health and Innovation District

A modern web application built with React and TypeScript, designed to showcase and facilitate interactions within a health and innovation district. This project provides a platform for exploring products, registering for events, and connecting with resources within the district.

## Features

*   **Product Catalog:** Browse a diverse range of products with detailed descriptions and images.
*   **Dynamic Routing:** Navigate seamlessly through the application using React Router.
*   **Booking System:** Request equipment and connect with support teams.
*   **Responsive Design:** Optimized for viewing on various devices.
*   **Styled Components:** Utilizes Tailwind CSS for a consistent and modern look.
*   **Modal Windows:** Display content in interactive modal windows.
*   **Email Style Summary:** Visual representation of email communication.

## Technologies Used

*   **Programming Language:** TypeScript
*   **UI Framework:** React
*   **Routing:** React Router DOM
*   **Styling:** Tailwind CSS
*   **Build Tool:** Vite
*   **Icons:** Lucide React
*   **Deployment:** Vercel

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/zohaibxavinex117/Health-and-Innovation-District.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Health-and-Innovation-District
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the application in development mode, typically accessible at `http://localhost:5173`.

2.  **Build the application for production:**

    ```bash
    npm run build
    ```

    This will create an optimized build of the application in the `dist` directory.

3.  **Preview the production build:**

    ```bash
    npm run preview
    ```

    This will serve the production build locally.

## Project Structure

```
Health-and-Innovation-District/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── src/
│   ├── App.tsx             # Main application component with routing
│   ├── components/         # Reusable UI components
│   │   ├── AttendingCard.tsx
│   │   ├── Booking.tsx
│   │   ├── Button.tsx
│   │   ├── Confirmation.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── RegistrationForm.tsx
│   ├── constants/          # Data and configuration constants
│   │   ├── products.ts
│   ├── main.tsx            # Entry point for the React application
│   ├── pages/              # Application pages/views
│   │   ├── EmailStyleSummary.tsx
│   │   ├── Home.tsx
│   │   ├── Product.tsx
│   │   ├── Register.tsx
│   ├── styles/             # Global styles and CSS
│   │   ├── index.css
│   ├── vite-env.d.ts       # TypeScript environment declarations
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
```

## 🌐 Route Overview

| Route                    | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| `/`                      | Homepage with categories, search bar, and product listings |
| `/register`              | User registration form                                     |
| `/product/:category/:id` | Product detail page                                        |

## 📄 Pages

### `Home.tsx`

* Landing page with:

  * Search bar
  * Category filters
  * Facility description
  * Product sections for each category (Cell Analysis, Cryobiology, etc.)
  * Calls `ProductCard` for each item inside each product category

### `Product.tsx`

* Fetches the category and item ID from the URL parameters.
* Uses `findProductAndItem` to get data.
* Renders product title, description, and image.

### `Register.tsx`

* Basic registration form with fields like Full Name, Email, Phone, Address, and Message.
* Styled form with responsiveness.

---

## Component Breakdown

### `Navbar.tsx`

* Top navigation with site logo and links (`Home`, `About`, `Events`, `Contact`).
* Supports responsive mobile dropdown with toggling.
* Uses `Link` from `react-router-dom`.

### `Button.tsx`

* A reusable button with consistent Tailwind styling.
* Accepts `children`, `onClick`, and other HTML button props.

### `ProductCard.tsx`

* Used to display individual tools/products.
* Contains image, title, description, and “More Info” button.
* Routes to product details page.


### `Modal.tsx`

* Displays a centered popup overlay with custom content `{children}` when `isOpen` is true.
* Uses fade-in/out transitions and disables background scrolling while open.
* Delays hiding the modal for 300ms to allow exit animation using `useEffect`.
* Includes a close (`X`) button that triggers the `onClose` callback.

### `Booking.tsx`

* Opens a modal that lets users fill out a booking form for equipment using `BookEquipment`, and shows a `RequestSummary` after submission.
* Manages form inputs using `useState`, including name, company, job title, preferred timeframe, and optional note.
* Validates required fields before submission and conditionally renders a thank-you summary upon successful submission.
* Uses nested components (`Modal`, `BookEquipment`, and `RequestSummary`) to keep logic and UI organized and reusable.

## 📦 Constants

### `products.ts`

* Exports a list of `Product` objects categorized by area of research.
* Each product includes:

  * `title`
  * `slug` (for URL)
  * `description`
  * `color` (theme)
  * `items[]` containing:

    * `id`
    * `title`
    * `description`
    * `image`

#### ➕ Utility Function:

```ts
findProductAndItem(categorySlug, itemId)
```

* Returns product `item` for use in `Product.tsx`.

---


## Other Files

*   `src/App.tsx`: Defines the main application component and sets up routing using React Router.
*   `src/styles/`: Contains global styles and CSS definitions.
*   `vite.config.ts`: Configuration file for Vite, the build tool.
*   `vercel.json`: Configuration file for Vercel deployment.

## Contributing

We welcome contributions to the Health and Innovation District project! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request to the main branch.

Please ensure your code adheres to the project's coding style and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).

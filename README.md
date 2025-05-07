
![Logo](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746632973/Screenshot_2025-05-07_195111_j7z9jx.png)

# 🍔 MealPort (A Food Ordering WebApp)

A fully functional, component-driven Food Ordering Web Application built with **React**, showcasing modern frontend architecture, routing, state management with Redux, and seamless UI experiences.

## 📸 Demo

![](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746632998/screenshot-rocks_1_imjuut.png)

![](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746633005/screenshot-rocks_2_rvjcdr.png)

![](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746632998/screenshot-rocks_3_dikqkl.png)

![](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746632999/screenshot-rocks_4_h4roln.png)

![](https://res.cloudinary.com/deiwwcdgo/image/upload/v1746632996/screenshot-rocks_5_ld4wcc.png)


---

## 🚀 Features

- 🔍 **Browse Restaurants**: Explore a curated list of restaurants.
- 🍽️ **View Menus**: Dynamic restaurant menus with category breakdowns.
- ➕ **Add to Cart**: Add/remove menu items to a global cart.
- 🛒 **Cart Management**: Review, update, and clear cart items.
- 🌐 **Routing**: Smooth navigation using React Router (About, Contact, Cart, Menu pages).
- ⚡ **Shimmer UI**: Optimized loading experiences.
- 🔄 **State Management**: Redux store to manage cart state efficiently.
- 🧪 **Test-Ready**: Set up with Jest for unit testing.

---

## 📂 Folder Structure

```
food-ordering-webapp/
│
├── App.js                  # Root React Component
├── index.html              # HTML entry point
├── style.css               # Global styling
├── package.json            # Project metadata and scripts
│
├── src/
│   ├── components/         # All React components
│   │   ├── Header.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── RestaurantMenu.js
│   │   └── ...
│   │
│   ├── utils/              # Redux store and helpers
│   │   ├── cartSlice.js
│   │   ├── appStore.js
│   │   └── constants.js
│
├── .parcelrc               # Parcel bundler config
├── .postcssrc              # PostCSS config
├── babel.config.js         # Babel config
├── jest.config.js          # Jest test config
└── .gitignore              # Git ignore rules
```

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/food-ordering-webapp.git
   cd food-ordering-webapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

---

## 🛠️ Tech Stack

- **React.js** - Component-based UI library
- **Redux Toolkit** - State management
- **React Router DOM** - Routing
- **Parcel** - Lightning-fast bundler
- **Jest** - Testing framework
- **PostCSS** - CSS processing
- **Babel** - JavaScript compiler

---


## 🧪 Testing

Jest is used for testing.

```bash
npm test
```

Test examples can be added in `__tests__/` or alongside components as `Component.test.js`.

---

## 📦 Dependencies

See `package.json` for full list.

```json
"dependencies": {
  "react": "^17.x",
  "react-dom": "^17.x",
  "react-router-dom": "^6.x",
  "redux": "^4.x",
  "react-redux": "^8.x"
}
```

---


## 🙌 Acknowledgements

- Swiggy Food APIs
- Akshay Saini for his excellent course and valuable guidance

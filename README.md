# tch-portfolio

A sleek and responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. This project showcases your skills, projects, and experience in a modern, minimalist design.

🔗 **Live Demo**: [tch-portfolio-black.vercel.app](https://tch-portfolio-black.vercel.app)

## 🚀 Features

- ⚡️ **Fast and Lightweight**: Powered by Vite for rapid development and optimized builds.
- 🎨 **Modern UI**: Styled with Tailwind CSS for a clean and responsive design.
- 🧩 **Modular Components**: Organized React components for easy customization.
- 📱 **Responsive Design**: Optimized for all devices and screen sizes.
- 📦 **Data Management**: Content managed through a centralized JSON file.
- 🎯 **Reusable Components**: Custom components like Title and Button for consistent styling.

---

## 🛠️ Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Email Service**: EmailJS

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tomascabralh/tch-portfolio.git
   cd tch-portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

---

## 📁 Project Structure

```
tch-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Button.jsx  # Custom button component
│   │   ├── Form.jsx    # Contact form component
│   │   ├── Title.jsx   # Custom title component
│   │   └── ...
│   ├── sections/       # Page sections
│   │   ├── Contact.jsx # Contact section
│   │   ├── Hero.jsx    # Hero section
│   │   ├── Projects.jsx# Projects section
│   │   └── ...
│   ├── data/          # Content management
│   │   └── content.json# Skills and projects data
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js     # Vite configuration
└── package.json       # Project metadata and scripts
```

---

## ⚙️ Customization

- **Content Management**: Update your skills and projects in `src/data/content.json`
- **Profile Information**: Update your personal details in the respective components
- **Styling**: Customize the theme and styles by editing `tailwind.config.js`
- **Components**: Modify or extend the reusable components in `src/components/`

---

## 🚀 Deployment

Deploy your portfolio effortlessly using [Vercel](https://vercel.com/):

1. **Push your project to GitHub**
2. **Sign in to Vercel** and import your GitHub repository
3. **Configure the build settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** your site and share your portfolio with the world!

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this `README.md` further to align with your personal branding and the specific details of your portfolio. If you need assistance with any part of the customization or deployment process, don't hesitate to ask!

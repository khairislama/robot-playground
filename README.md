# 🤖 Robot Playground

Welcome to **Robot Playground**, an experimental project designed to showcase the power and simplicity of 3D web development using Next.js 14, Three.js, React Three Fiber, Drei, and Postprocessing. This project serves as an interactive playground where you can explore and experiment with 3D animations and models directly in your browser.

## 🚀 Project Overview

### Features

- **3D Model Display**: Seamlessly integrates Blender models into a Next.js application.
- **Interactive Animations**: Animates the 3D model based on user interactions like scrolling.
- **Dynamic Lighting**: Utilizes different light types to create a vibrant scene.
- **Postprocessing Effects**: Enhances visual quality with effects like Bloom.
- **Custom Camera Controls**: Smooth camera movements to provide an immersive experience.
- **Performance Monitoring**: Includes a stats panel to monitor frame rate and performance.

### Why This Project?

As a software engineer passionate about web technologies, I created this project to delve into the exciting world of 3D web development. The goal was to experiment with modern tools and frameworks, push the boundaries of what can be achieved on the web, and ultimately create a stunning showcase piece for my portfolio.

## 🛠 Installation & Usage

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/khairislama/robot-playground.git
   cd robot-playground
   ```

2. **Install Dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the project in action.

## 📦 Project Structure

- `components/`: Contains The Model and Scene components.
- `public/`: Static files and assets, including the Blender model.
- `app/`: Next.js pages, including the main 3D scene.

## ✨ Features In-Depth

### 3D Model Display

The core of this project is displaying a Blender model using Three.js and React Three Fiber. The model is loaded and rendered within a Next.js environment, providing a seamless integration with modern React features.

### Interactive Animations

The robot model comes to life with animations triggered by user interactions. Scroll through the page to see the robot move, creating an engaging user experience.

### Dynamic Lighting

We use a combination of **directional light** and **ambient light** to highlight the model and create depth in the scene. Directional lights simulate sunlight, while ambient lights provide a uniform light source.

### Postprocessing Effects

To enhance the visual appeal, we apply postprocessing effects like Bloom. This effect adds a glowing effect to bright areas, making the scene more vibrant and dynamic.

### Custom Camera Controls

Custom camera movements are implemented to follow a circular path, providing a smooth and immersive viewing experience. The camera always looks at the center of the scene, ensuring the model remains the focal point.

### Performance Monitoring

A stats panel is included to monitor frame rate and performance. This helps in optimizing the scene for better performance across different devices.

## 🛠 Technologies Used

- **Next.js 14**: The latest version of Next.js for server-side rendering and static site generation.
- **Three.js**: A powerful 3D library to create and display animated 3D graphics.
- **React Three Fiber**: A React renderer for Three.js, making 3D development declarative and component-based.
- **Drei**: A collection of useful helpers for React Three Fiber.
- **Postprocessing**: For applying visual effects to the 3D scene.

## 🧩 Future Improvements

- **Additional Animations**: Incorporate more complex animations and transitions.
- **User Interaction**: Add more interactivity such as drag-and-drop or click-to-animate features.
- **Enhanced Visuals**: Experiment with more postprocessing effects and advanced lighting techniques.
- **Performance Optimization**: Continuously optimize the performance for smoother animations and interactions.

## 🌟 Acknowledgements

This project was inspired by various tutorials and resources on 3D web development. Special thanks to the amazing communities behind Next.js, Three.js, React Three Fiber, and Drei for their incredible work and contributions.

## 📫 Contact

If you have any questions, suggestions, or just want to connect, feel free to reach out:

- **Khairi Slama**: [LinkedIn](https://www.linkedin.com/in/khairi-slama/) | [Twitter](https://x.com/khairislama) | [Email](mailto:khairi.slama.1996.br@gmail.com)

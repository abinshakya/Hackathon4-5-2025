
# Campus Connect - University Portal Application

A comprehensive university portal application built with React, TypeScript, and Tailwind CSS that includes lecture video management, a voting system, classroom tracking, and authentication.

## Features

- **Responsive UI**: Works seamlessly on desktop, tablet, and mobile devices
- **Authentication System**: Secure login and registration functionality
- **Lecture Videos**: Browse and watch lecture recordings
- **Voting System**: Participate in school polls and elections
- **Classroom Tracking**: Check classroom availability and schedules

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/campus-connect.git
cd campus-connect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Essential Dependencies

This project uses the following key libraries:

- **React**: UI library
- **React Router**: For navigation
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Shadcn/UI**: For UI components
- **Tanstack React Query**: For data fetching
- **Lucide React**: For icons
- **React Hook Form**: For form handling

### Project Structure

```
src/
  ├── components/     # Reusable components
  │    ├── ui/        # UI components from shadcn
  │    └── Layout.tsx # Main layout wrapper
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions
  ├── pages/          # Page components
  │    ├── Index.tsx
  │    ├── Login.tsx
  │    ├── LectureVideos.tsx
  │    ├── Voting.tsx
  │    ├── ClassroomTracking.tsx
  │    └── NotFound.tsx
  └── App.tsx         # Main application component
```

## Development Guide

### Adding New Pages

1. Create a new component in the `src/pages` directory
2. Add a new route in `App.tsx`
3. Add navigation links in the `Navbar.tsx` component

### Authentication Flow

The authentication system uses a tabbed interface for login and registration:

1. Users can switch between login and registration forms
2. Form validation ensures data integrity
3. Social login options are available for quicker access

## Backend Integration

### Connecting to Django Backend

The README includes detailed instructions on how to set up a Django backend for this application. Follow these steps:

1. Set up a Django project with Django REST Framework
2. Configure CORS settings to allow frontend requests
3. Create authentication views for registration and login
4. Connect the frontend login form to the Django API

See the detailed instructions in the full README for more information.

## Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.ts` file.

### UI Components

The project uses shadcn/ui components that can be customized in the `src/components/ui` directory.

## Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory and can be deployed to any static site hosting service.

# WordLy: Real-time Collaborative Document Editor

WordLy is a real-time collaborative document editing application designed to streamline team collaboration. It allows multiple users to simultaneously edit documents, chat, and translate content, fostering a productive and interactive workspace. Built with Next.js and powered by Liveblocks for real-time features, WordLy provides a seamless and efficient platform for content creation and management.

## Key Features

WordLy offers a robust set of features to enhance collaboration and document management:

*   **Real-time Collaborative Editing**: Multiple users can edit documents simultaneously, with changes reflected in real-time.
*   **Live Cursors**: See where other collaborators are typing with real-time cursor positions.
*   **Integrated Chat**: Communicate with collaborators directly within the document interface.
*   **Document Translation**: Translate document content into different languages.
*   **User Management**: Invite, manage, and remove collaborators from documents.
*   **Secure Authentication**: User authentication powered by Firebase.
*   **Responsive Design**: A seamless experience across various devices.

## Technologies Used

*   **Next.js**: React framework for building server-rendered and static web applications.
*   **Liveblocks**: Real-time collaboration infrastructure for features like live cursors and collaborative editing.
*   **Firebase**: Authentication and backend services (e.g., user management).
*   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
*   **TypeScript**: Strongly typed superset of JavaScript for enhanced code quality and maintainability.
*   **Shadcn/ui**: Reusable UI components built with Radix UI and Tailwind CSS.
*   **Sonner**: A beautifully styled toast component for React.
*   **Zustand**: A fast and scalable bearbones state-management solution.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

`LIVEBLOCK_PRIVATE_KEY`
`NEXT_PUBLIC_LIVEBLOCKS_PUBLISHABLE_KEY`
`NEXT_PUBLIC_BASE_URL`

You can use the provided `.env.local.example` file as a template. Make sure to replace the placeholder values with your actual keys.



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
WordLy/
├── public/                   # Static assets
├── src/
│   ├── action/               # Server actions
│   ├── app/                  # Next.js app router pages and API routes
│   │   ├── auth-endpoint/    # Liveblocks authentication endpoint
│   │   ├── doc/[id]/         # Dynamic document pages
│   │   ├── doc/layout.tsx    # Layout for document pages
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Reusable React components
│   │   ├── ui/               # Shadcn/ui components
│   │   └── ...               # Other custom components
│   ├── lib/                  # Utility functions and Liveblocks client setup
│   ├── Type/                 # TypeScript type definitions
│   ├── firebase-admin.ts     # Firebase Admin SDK setup
│   ├── firebase.ts           # Firebase client-side setup
│   └── middleware.ts         # Next.js middleware
├── .env.local.example        # Example environment variables
├── liveblocks.config.ts      # Liveblocks configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<img width="1918" height="934" alt="image" src="https://github.com/user-attachments/assets/95b0eaee-2f66-4ba2-883d-66d0472d7255" />
<img width="1628" height="851" alt="image" src="https://github.com/user-attachments/assets/5072f043-c0e4-4935-9e49-9eb674d9684e" />


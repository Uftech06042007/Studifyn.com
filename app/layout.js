import './globals.css'

export const metadata = {
  title: 'Studifyn',
  description: 'Work in progress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'TaskifiAI - Simple Websites for Local Businesses',
  description: 'Get online in 48 hours. No hassle, no tech headaches. Just a beautiful, fast website that works.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}

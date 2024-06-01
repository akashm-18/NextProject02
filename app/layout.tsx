import MyProfile from './components/MyProfile'
import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Akash',
  description: 'Creating a Next Blog Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <NavBar />
        <MyProfile />
        {children}
      </body>
    </html>
  )
}

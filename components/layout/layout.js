

 
export default function Layout({ children, className }) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <main>{children}</main>
    </div>
  )
}
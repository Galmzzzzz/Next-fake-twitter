import Header from "@/components/Header"


export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="my-20">{children}</main>
      </body>
    </html>
  )
}

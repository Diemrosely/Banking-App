import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset flex justify-start items-start">
            <div className="ml-0">
              <Image 
                src='/assets/home.png'
                alt="Auth Image"
                width={800}
                height={500}
                className="flex justify-start items-start rounded-lg"
                // style={{
                //   'borderRadius':'15px'
                // }}
              />
            </div>
          </div>
      </main>
    );
  }


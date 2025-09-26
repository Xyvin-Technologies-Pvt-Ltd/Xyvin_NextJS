import "@/styles/index.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            #initial-loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
              transition: opacity 0.5s ease-out;
            }
            
            #initial-loader.fade-out {
              opacity: 0;
              pointer-events: none;
            }
            
            .loader-dots {
              display: flex;
              gap: 8px;
            }
            
            .loader-dots span {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #007bff;
              animation: pulse 1.4s infinite ease-in-out;
            }
            
            .loader-dots span:nth-child(1) { animation-delay: -0.32s; }
            .loader-dots span:nth-child(2) { animation-delay: -0.16s; }
            .loader-dots span:nth-child(3) { animation-delay: 0s; }
            
            @keyframes pulse {
              0%, 80%, 100% {
                transform: scale(0.8);
                opacity: 0.5;
              }
              40% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `,
          }}
        />
      </head>

      <body suppressHydrationWarning={true}>
        <div id="initial-loader">
          <div className="loader-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function hideLoader() {
              const loader = document.getElementById('initial-loader');
              if (loader) {
                loader.classList.add('fade-out');
                setTimeout(() => {
                  loader.style.display = 'none';
                }, 500);
              }
            }
            
            if (document.readyState === 'complete') {
              setTimeout(hideLoader, 800);
            } else {
              window.addEventListener('load', () => {
                setTimeout(hideLoader, 800);
              });
            }
            
            // Fallback - hide after 2 seconds regardless
            setTimeout(hideLoader, 2000);
          `,
          }}
        />
      </body>
    </html>
  );
}

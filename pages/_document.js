import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="./mhc-logo.svg" />
                <link rel="apple-touch-icon" href="./mhc-logo.svg" />
                <link rel="manifest" href="./manifest.json" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <body>

                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
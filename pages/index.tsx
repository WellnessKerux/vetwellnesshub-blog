import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vet Wellness Hub</title>
      </Head>
      <main className="px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Vet Wellness Hub</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Raising awareness about animal health, wellness, and responsible guardianship.
        </p>
      </main>
    </>
  )
}

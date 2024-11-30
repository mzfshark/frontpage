import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Thin in Coin - $Neurons",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://github.com/ThinkinCoin/website/blob/develop/wp-content/uploads/2023/06/LOGOMARCA-1.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Think in Coin - Academy for blockchain investors
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            The Think, in Coin project holds importance for reasons. One of the reasons is its focus on providing education in cryptocurrency. As the crypto industry continues to grow there is a pressing need for high quality courses that help both newcomers and experienced enthusiasts understand the intricacies of blockchain, decentralized finance and tokenomics.

Another significant aspect of Think in Coin is how it empowers enthusiasts. By offering a range of courses it enables individuals to make informed decisions when navigating the crypto space. This knowledge equips them with confidence to engage in activities like investment, trading and other crypto related pursuits.

Think in Coin also emphasizes community engagement through its meme creation service. This service allows crypto enthusiasts to explore creation fostering innovation and collaboration within the crypto community.

Furthermore Think in Coin demonstrates its commitment to keeping up with industry trends. By staying updated on the developments in the space it ensures that its educational content and services remain relevant amidst an ever changing landscape.

In summary Think in Coin plays a role in democratizing access to cryptocurrency knowledge while promoting community engagement. It contributes significantly to the growth and innovation, within the cryptocurrency ecosystem.
            </p>
            <Button href="https://github.com/ThinkinCoin/website" className="mr-3">
              Repository
            </Button>
            <Button
              href="https://docs.thinkincoin.com"
              intent="secondary"
            >
              Docs
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

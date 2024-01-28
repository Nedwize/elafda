import Card from './components/Card.js'
import Pill from './components/Pill.js'

const SiteHeader = () => (
    <div className="flex flex-col text-center items-center justify-center gap-2">
        <h1 className="text-3xl font-extralight">eLafda.info</h1>
        <h2 className="font-extralight text-sm opacity-70">
            Social lafda tracker for the terminally online.
        </h2>
    </div>
)

const TagsContainer = () => (
    <div className="flex items-center justify-center flex-wrap w-full px-6 gap-2">
        <Pill active title="Indian Tech Twitter" />
        <Pill title="Political Banter" />
        <Pill title="Cricket Fanclubs" />
        <Pill title="Toxic Bolly Fanclubs" />
    </div>
)

const HeadLines = ({ text = '' }) => (
    <span className="uppercase text-white font-semibold italic">
        *** {text.toLocaleLowerCase()} ***
    </span>
)

export default function Home() {
    return (
        <main className="min-h-screen pt-10 pb-14">
            <marquee className="inline-block bg-neutral-800 border-y border-neutral-500 text-black py-2 w-full">
                <HeadLines text="AI Chatbot Challenges Twitterati to a Battle of Wits: Hilarity Ensues!" />
                <HeadLines text="Political Leaders Engage in Twitter Rap Battle: Policy Points Delivered in Rhyme!" />
                <HeadLines text="Twitterverse in Chaos as Emoji War Erupts: 🤯 vs. 🙌 Takes a Dark Turn!" />
                <HeadLines text="Global Twitter Shutdown Averted: Users Baffled by Sudden Surge in Hashtag Hijinks!" />
                <HeadLines text="Celeb Feud Escalates to New Heights: Tweets Fly as Stars Battle in 280 Characters or Less!" />
            </marquee>
            <div className="flex flex-col gap-8 items-center justify-start px-14 pt-10">
                <SiteHeader />
                <TagsContainer />
                <Card />
                <div className="mt-24 opacity-50 font-extralight">
                    Created with 🧠 by @nedwize
                </div>
            </div>
        </main>
    )
}

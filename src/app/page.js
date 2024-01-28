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
        <Pill />
        <Pill />
        <Pill />
        <Pill />
    </div>
)

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-8 items-center justify-start p-24">
            <SiteHeader />
            <TagsContainer />
            <Card />
        </main>
    )
}

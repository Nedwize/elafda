'use client'

import { Tweet } from 'react-tweet'
import Pill from './components/Pill.js'
import { useState } from 'react'

const TWEETS_PER_TAG = {
    INDIAN_TECH_X: {
        title: 'Indian Tech Twitter',
        tweetIds: [
            '1751666231135076727',
            '1751458842934956123',
            '1751690301528261000',
            '1751670566023729383',
        ],
    },
    POLITICS: {
        title: 'Political Banter',
        tweetIds: [
            '1751638572783051121',
            '1747207420948906408',
            '1751666231135076727',
        ],
    },
    CRICKET_FANS: {
        title: 'Cricket Fanclubs',
        tweetIds: [
            '1751675355448951173',
            '1751621951582621809',
            '1751636419464892881',
        ],
    },
    TOXIC_BOLLY_FANS: {
        title: 'Toxic Bolly Fanclubs',
        tweetIds: ['1751458842934956123', '1751690301528261000'],
    },
}

const SiteHeader = () => (
    <div className="flex flex-col text-center items-center justify-center gap-4">
        <h1 className="text-4xl font-extralight">eLafda.info</h1>
        <h2 className="font-extralight text-base opacity-90">
            Social lafda tracker for the terminally online.
        </h2>
    </div>
)

const TagsContainer = ({ selectedTag, setSelectedTag }) => (
    <div className="flex items-center justify-center flex-wrap w-full px-6 gap-2">
        {[
            TWEETS_PER_TAG.CRICKET_FANS,
            TWEETS_PER_TAG.INDIAN_TECH_X,
            TWEETS_PER_TAG.POLITICS,
            TWEETS_PER_TAG.TOXIC_BOLLY_FANS,
        ].map((x) => (
            <Pill
                title={x.title}
                key={x.title}
                active={x.title === selectedTag.title}
                onClick={() => setSelectedTag(x)}
            />
        ))}
    </div>
)

const HeadLines = ({ text = '' }) => (
    <span className="uppercase text-white font-semibold italic">
        *** {text.toLocaleLowerCase()} ***
    </span>
)

const TweetContainer = ({ selectedTag }) => (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 text-[10px] tweet-container">
        {selectedTag.tweetIds.map((x) => (
            <div key={x} className="h-auto">
                <Tweet id={x} />
            </div>
        ))}
    </div>
)

export default function Home() {
    const [selectedTag, setSelectedTag] = useState(TWEETS_PER_TAG.INDIAN_TECH_X)

    return (
        <main className="min-h-screen pt-10 pb-14">
            <marquee className="inline-block bg-[#1f2e3d] border-y border-[#e5e7eb] text-black py-2 w-full">
                <HeadLines text="AI Chatbot Challenges Twitterati to a Battle of Wits: Hilarity Ensues!" />
                <HeadLines text="Political Leaders Engage in Twitter Rap Battle: Policy Points Delivered in Rhyme!" />
                <HeadLines text="Twitterverse in Chaos as Emoji War Erupts: 🤯 vs. 🙌 Takes a Dark Turn!" />
                <HeadLines text="Global Twitter Shutdown Averted: Users Baffled by Sudden Surge in Hashtag Hijinks!" />
                <HeadLines text="Celeb Feud Escalates to New Heights: Tweets Fly as Stars Battle in 280 Characters or Less!" />
            </marquee>
            <div className="flex flex-col gap-8 items-center justify-start px-14 pt-10">
                <SiteHeader />
                <TagsContainer
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                />
                <TweetContainer selectedTag={selectedTag} />
                <div className="mt-24 opacity-50 font-extralight">
                    Created with 🧠 by @nedwize
                </div>
            </div>
        </main>
    )
}

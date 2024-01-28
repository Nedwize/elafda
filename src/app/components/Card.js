const Card = () => (
    <div
        className="group cursor-pointer rounded-lg border p-6 transition-all duration-200 ease-in-out hover:border-neutral-600 hover:bg-opacity-30 border-neutral-700 bg-neutral-800 bg-opacity-20"
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2 className={`mb-3 text-2xl font-semibold`}>Ravi Sutanjani Fiasco</h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
        </p>
    </div>
)

export default Card

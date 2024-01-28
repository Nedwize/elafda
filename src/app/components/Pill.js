const Pill = ({ title = 'Indian Tech Twitter', active = false }) => (
    <div
        className={`transition-all duration-200 ease-in-out hover:border-neutral-600 border-neutral-700 rounded-full text-sm py-1 px-3 border cursor-pointer ${
            active
                ? 'bg-neutral-800 font-light'
                : 'bg-neutral-950 font-extralight'
        }`}
    >
        {title}
    </div>
)

export default Pill

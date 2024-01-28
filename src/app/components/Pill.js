const Pill = ({
    title = 'Indian Tech Twitter',
    active = false,
    onClick = () => {},
}) => (
    <div
        onClick={onClick}
        className={`transition-all duration-200 ease-in-out border border-[#e5e7eb] rounded-full text-sm py-1 px-3 cursor-pointer ${
            active ? 'bg-[#1f2e3d] font-light' : 'bg-[#15202b] font-extralight'
        }`}
    >
        {title}
    </div>
)

export default Pill

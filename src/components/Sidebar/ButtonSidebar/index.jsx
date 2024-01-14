const ButtonSidebar = ({data, pathname}) => {
    return (
        <div className={`w-full flex flex-row gap-2 items-center justify-start p-1 pr-8 hover:pb-5 text-gray-400 hover:border-l-0 hover:border-t-0 hover:border-r-0 hover:text-fuchsia-600 hover:scale-105 hover:border hover:border-b-fuchsia-600 transition-all ease-in-out duration-300 ${pathname === data.link ? "text-fuchsia-600 border-r-fuchsia-600 border border-l-0 border-t-0 border-b-0" : ""}`}>
            <div title={data.title}>
                {data.image}
            </div>
        </div>
    )
}

export default ButtonSidebar
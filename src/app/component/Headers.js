
const Headers = (props) => {
return(
    <header className="flex flex-col justify-center items-center">
        <h2 className="text-center py-3 px-4 font-semibold">{props.title}</h2>
        <div className="hidden mb-4 md:block w-4/5 h-[0.5px] bg-black/50 "> </div>
    </header>
)
}

export default Headers;

const Headers = (props) => {
return(
    <header>
        <h2 className="text-center p-4 font-semibold">{props.title}</h2>
        <hr className="hidden md:block mx-10"/>
    </header>
)
}

export default Headers;
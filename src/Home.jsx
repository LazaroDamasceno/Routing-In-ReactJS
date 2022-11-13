import './design.css'

export default function Home() {
    return (
        <div className='App'>
            <h1>Home Page</h1>
            <a href={'/info'}>Info</a>
            <br></br>
            <br></br>
            <a href={'/contact'}>Contact</a>
            <br></br>
            <br></br>
            <a href={'/other'}>Other</a>
            <br></br>
            <br></br>
            <a href={'/another'}>Another</a>
        </div>
    )
} 
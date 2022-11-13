import './design.css'

export default function Another() {
    return (
        <div className='App'>
            <h1>Another Page</h1>
            <a href={'/info'}>Info</a>
            <br></br>
            <br></br>
            <a href={'/contact'}>Contact</a>
            <br></br>
            <br></br>
            <a href={'/other'}>Other</a>
            <br></br>
            <br></br>
            <a href={'/'}>Home</a>
        </div>
    )
} 
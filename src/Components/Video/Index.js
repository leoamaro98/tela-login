import "./Video.css"

const Video = (props) => {
    return (<div className="video">

        <video autoPlay loop muted src={props.src}></video>

    </div>);
}

export default Video;
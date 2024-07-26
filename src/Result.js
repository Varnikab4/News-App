function Result(props){
    return(
        <>
        <center>
        <div className="result-container">
            <h2>{props.title}</h2>
            <a href = {props.url}>Read More</a>
            <hr/>
            </div>
        </center>
        </>

    );
}export default Result;
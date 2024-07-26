import {useState, useRef} from "react";
import axios from "axios";
import Result from "./Result";


function News(){
    const[info, setInfo] = useState([]);

    const gn = (event) =>{
        event.preventDefault();
        let a1 = "https://newsapi.org/v2/top-headlines";
        let a2 ="?country=in";
        let a3 = "&apiKey=3b699032c49d43d9bf0f5d03792e253c";
        let url = a1 + a2 + a3;
        axios.get(url)
        .then(res => setInfo(res.data.articles))
        .catch(err => alert("issue" +err));
    }
    return (
        <div className="news-container">
            <div className="img">
            <img src="./images/download.png" alt="Downloaded image" />
            <h1>THE <span className="font">INDIAN </span>EXPRESS</h1>
            </div>
            <form onSubmit={gn}>
                <input type="submit" value="Get News" />
            </form>

            <div className="result-container">
                {info.map((e, index) => (
                    <Result
                        key={index}
                        title={e.title}
                        url={e.url}
                    />
                ))}
            </div>
            <footer>
               <p>&copy; Varnika Bhoga</p>
            </footer>
        </div>
    );
}

export default News;
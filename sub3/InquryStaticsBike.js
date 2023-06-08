import "./InquryStaticsBike.css"
import {useParams} from "react-router-dom"

export default function () {
    const statics = useParams();
    return(
        <div className="container">
            <h2>자전거 통계 조회{statics.no}</h2>
            <form className="contents"> 
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </form>
        </div>
    );
}
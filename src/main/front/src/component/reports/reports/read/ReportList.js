import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ReportList() {

    const [reportList, setReportList] = useState([]);

    const getReportList = async () => {
        await axios.get('http://localhost:8080/reports/read').then((res) => setReportList(res.data));
    }

    const navigate = useNavigate();

    useEffect(() => {
        getReportList()
    }, []);


    return (
        <div id={"container"}>
            <div id={"device"}>
                <main id={"main"}>
                    <section className={"sec"}>
                        <div className={"inner"}>
                            <div className={"item"}>
                                <div>
                                    <img onClick={() => navigate("/reports/templateList")}
                                         style={{cursor: "pointer", width: "1.5rem"}} src={"/image/backArrow.png"}/>
                                    <p className={"txt-a-l"} style={{}}>보고서</p>
                                </div>
                                {reportList.map((report) => (
                                    <div key={report.id} onClick={() => navigate(`/reports/read/${report.id}`)}
                                         style={{cursor: "pointer"}}>
                                        <p>제목 : {report.title}</p>
                                        <p>수정 날짜 : {report.modifiedAt}</p>
                                        <p>작성자 : {report.writerId}</p>
                                    </div>))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    )
}

export default ReportList
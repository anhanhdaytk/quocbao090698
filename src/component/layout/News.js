import React from 'react';
function News(){
    return(
        <div className="newss">
            <ul>
                <li><img className="img-news" src="image/home-news-1.png" alt="image news"/> </li>
                <li><span className="news-date">Thứ 7 ,ngày 31, tháng 12, năm 2015</span></li>
                <li><a className="news-link">15 thiết kế phòng ngủ tuyệt đẹp làm vạn người mê</a></li>
                <li><p className="news-word">Cùng Sài Gòn hoa tìm hiểu một vài xu hướng thiết kế san vườn được ưu chuộng hiện nay nhé ! kết hợp hàng rào</p></li>
                <li><span className="news-read">Đọc tiếp</span></li>
            </ul>
        </div> 
    )
}
export default News;
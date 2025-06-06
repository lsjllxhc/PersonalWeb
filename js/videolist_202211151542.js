let videoNum = 9;
let pvNum = 6;
//render video list structure
function start() {
    let strHtml = "";
    for (let i = 1; i <= videoNum; i++) {
        let imgid = "id=img" + i;
        let video_title = "id=title" + i;
        let video_link = "id=link" + i;
        strHtml += '<div class="col-lg-4 col-md-6 col-sm-6">\n' + '<div class="single-work text-center mt-30">\n' + '<div class="work-image">\n' + '<img alt="切片封面"' + imgid + '>' + '</div>\n' + '<div class="work-overlay">\n' + '<div class="work-content">\n' + '<h3 class="work-title"'+ video_title + '></h3>' + '<ul>\n' + '<li>' + '<a target="_blank" href="#"' + video_link + '>' + '<i class="lni-link"></i>' + '</a>' + '</li>' + '</ul>' + '</div></div></div></div>';
    }
    $("#videoloop").html(strHtml);
    strHtml = "";
    for (let i = 1; i <= pvNum; i++) {
        let pv_imgid = "id=pvimg" + i;
        let pv_video_title = "id=pvtitle" + i;
        let pv_video_link = "id=pvlink" + i;
        strHtml += '<div class="col-lg-4 col-md-6 col-sm-6">\n' + '<div class="single-work text-center mt-30">\n' + '<div class="work-image">\n' + '<img alt="pv封面"' + pv_imgid + '>' + '</div>\n' + '<div class="work-overlay">\n' + '<div class="work-content">\n' + '<h3 class="work-title"'+ pv_video_title + '></h3>' + '<ul>\n' + '<li>' + '<a target="_blank" href="#"' + pv_video_link + '>' + '<i class="lni-link"></i>' + '</a>' + '</li>' + '</ul>' + '</div></div></div></div>';
    }
    $("#pvloop").html(strHtml);
}
start();

var get = new XMLHttpRequest();
//get video data list
get._url = "https://api.xuehusang.cn/LastestCut";
get.open("GET", get._url, true);
get.send(null);
get.onreadystatechange = function () {
    if (get.readyState === 4) {
        let get_f = get.responseText;
        let get_z = JSON.parse(get_f);
        if (get_z == null) {
            let strHtml = "";
            strHtml += '<div>最新视频获取失败，请至底部联系站长反馈bug</div>';
            $("#videoloop").html(strHtml);
        }
        for (let i =1; i <= videoNum; i++ ){
            var coverimg = document.getElementById("img" + i);
            var videotitle = document.getElementById("title" + i);
            var videolink = document.getElementById("link" + i);
            coverimg.src = get_z['cut'+i].cover;
            videotitle.innerHTML = get_z['cut'+i].title;
            videolink.href = get_z['cut'+i].url;
        }
    }
}
var pv_get = new XMLHttpRequest();
//get pv data list
pv_get._url = "https://api.xuehusang.cn/LastestPv";
pv_get.open("GET", pv_get._url, true);
pv_get.send(null);
pv_get.onreadystatechange = function () {
    if (pv_get.readyState === 4) {
        let get_f = pv_get.responseText;
        let get_z = JSON.parse(get_f);
        if (get_z == null) {
            let strHtml = "";
            strHtml += '<div>最新pv获取失败，请至底部联系站长反馈bug</div>';
            $("#pvloop").html(strHtml);
        }
        for (let i =1; i <= pvNum; i++ ){
            var pv_coverimg = document.getElementById("pvimg" + i);
            var pv_videotitle = document.getElementById("pvtitle" + i);
            var pv_videolink = document.getElementById("pvlink" + i);
            pv_coverimg.src = get_z['pv'+i].cover;
            pv_videotitle.innerHTML = get_z['pv'+i].title;
            pv_videolink.href = get_z['pv'+i].url;
        }
    }
}
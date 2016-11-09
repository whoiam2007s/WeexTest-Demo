/**
 * Created by Administrator on 2016/10/20.
 */

var icons = {
    bottombar_wode:'icons/iconfont-bottombar-wode-gary@2x.png',
    bottombar_wode_selected:'icons/iconfont-bottombar-wode-blue@2x.png',
    bottombar_work:'icons/iconfont-bottombar-work-gary@2x.png',
    bottombar_work_selected:'icons/iconfont-bottombar-work-blue@2x.png',
    bottombar_yixiang:'icons/iconfont-bottombar-yixiang-gary@2x.png',
    bottombar_yixiang_selected:'icons/iconfont-bottombar-yixiang-blue@2x.png',
    back_copy:'icons/iconfont-back-copy@2x.png',
    work_bangong:'icons/iconfont-work-bangong@2x.png',
    work_bangong_1:'icons/iconfont-work-bangong1@2x.png',
    work_bangong_2:'icons/iconfont-work-bangong2@2x.png',
    work_bangong_3:'icons/iconfont-work-bangong3@2x.png',
    work_bangong_4:'icons/iconfont-work-bangong4@2x.png',
    work_bangong_5:'icons/iconfont-work-bangong5@2x.png',
    work_bangong_6:'icons/iconfont-work-bangong6@2x.png',
    work_biyan:'icons/iconfont-work-biyan@2x.png',
    work_yanjing:'icons/iconfont-work-yanjing@2x.png',
    work_help:'icons/iconfont-work-help2@2x.png',
    work_school:'icons/iconfont-work-school@2x.png',
    work_tixing:'icons/iconfont-work-tixing@2x.png',
    work_tixing2:'icons/iconfont-work-tixing2@2x.png',
    intent_beizhu:'icons/iconfont-Intentionlist-beizhu@2x.png',
    intent_beizhu_selected:'icons/iconfont-Intentionlist-beizhuananxia@2x.png',
    intent_phone:'icons/iconfont-Intentionlist-dianhua@2x.png',
    intent_phone_selected:'icons/iconfont-Intentionlist-dianhuaanxia@2x.png',
    intent_help:'icons/iconfont-Intentionlist-wenti@2x.png',
    list_empty_img1:'icons/iconfont-ticheng-kong1@2x.png',
    list_empty_img2:'icons/iconfont-ticheng-kong2@2x.png',
    list_empty_arrow:'icons/iconfont-ticheng-jiantou-copy@2x.png',
    checkbox_icon:'icons/iconfont-Intentionlist-danxuan@2x.png',
    checkbox_icon_selected:'icons/iconfont-Intentionlist-xuanzhong@2x.png',
    date_icon_bg:'icons/iconfont-date-bg@2x.png',
    dbarrow:'icons/iconfont-beizhuqiehuan@2x.png',
    close:'icons/iconfont-tanchuang-guanbi(3)@2x.png',
    login_back:'icons/iconfont-login-back-copy@2x.png',
    login_arrow:'icons/iconfont-login-jiantou(4)@2x.png',
    login_service:'icons/iconfont-login-kefu@2x.png',
    login_suc:'icons/iconfont-login-64chenggong@2x.png',
    input_grade:'icons/iconfont-login-boshimao@2x.png',
    input_phone:'icons/iconfont-login-iconshouji@2x.png',
    input_lock:'icons/iconfont-login-mima@2x.png',
    input_home:'icons/iconfont-login-school@2x.png',
    input_location:'icons/iconfont-login-address@2x.png',
    input_man:'icons/iconfont-login-mingzi@2x.png',
    input_message:'icons/iconfont-login-duanxin@2x.png',
    input_book:'icons/iconfont-login-shu(1)@2x.png',
    input_eye_close:'icons/iconfont-login-work-biyan@2x.png',
    input_eye_open:'icons/iconfont-login-work-yanjing@2x.png',
    input_clear:'icons/iconfont-login-chacha(2)@2x.png',
    select_arrow:'icons/iconfont-login-jiantou(5)@2x.png',
    apply_delete:'icons/iconfont-Intentionlist-del@2x.png',
    apply_arrow_left:'icons/iconfont-Intentionlist-beizhubg.9@2x.png',
    apply_line:'icons/iconfont-apply-line.png',
    video_play:'icons/iconfont-play@2x.png',
    mine_card:'icons/iconfont-mycenter-Bankcard@2x.png',
    mine_security:'icons/iconfont-mycenter-AccountSecurity@2x.png',
    mine_about:'icons/iconfont-mycenter-about@2x.png',
    mine_feedback:'icons/iconfont-mycenter-Feedback@2x.png',
};

var images = {
    login_logo_1:'images/login-logo-1.gif',
    login_logo_2:'images/login-logo-2.png',
    work_zhanbao:'images/work-zhangbao@2x.png',
    intent_default_touxiang:'images/iconfont-Intentionlist-touxiang@2x.png',
    date_sel_b:'images/date-sel-bg@2x.png',
    video_face:'images/yewu_tupian_4@2x.png',
    mine_bg:'images/iconfont-mycenter-bg@2x.png',
};

var urls = {
    how_to_get_money:'http://192.168.5.216:81/index.php/wap/franchisee/money',
    event_info:'http://192.168.5.216:81/index.php/wap/activity/show/',
    apply_list:'',
    apply_info:'http://www.baidu.com',
};

var temp = {
    banner_1:'temp/temp_banner@2x.png',
    head_1:'temp/temp_head@2x.png',
    news_1:'temp/temp_news@2x.png',
    event_1:'temp/temp_event_1.jpg',
};

var text = {
    versionText:'加盟商2.0',

};

function getBaseUrl(config){
    return 'http://192.168.5.167:2008/apk-jms-res/';
    let bundleUrl = config.bundleUrl;
    let nativeBase;
    let isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
    let isIOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;

    if(isAndroidAssets){
        nativeBase = 'file://assets/';
    }else if(isIOSAssets){
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/')+1);
    }else{
        let host = 'localhost:8081';
        let matches = /\/\/([^\/]+?)\//.exec(config.bundleUrl);
        if(matches && matches.length >= 2){
            host = matches[1];
        }
        nativeBase = 'http://'+host+'/dist/';
    }
    let h5Base = 'dist/';
    let base = nativeBase;
    if(typeof window === 'object'){
        base = h5Base;
    }
    return base;
}

function getPageUrl(config, url){
    let bundleUrl = config.bundleUrl;
    bundleUrl = new String(bundleUrl);
    let nativeBase;
    let isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/';
    } else if(isiOSAssets) {
       nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
        var host = 'localhost:12580';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }
        nativeBase = 'http://' + host + '/dist/';
    }
    var h5Base = './index.html?page=./dist/';
    var base = nativeBase;
    if (typeof window === 'object') {
        base = h5Base;
    }
    return base+url;
}

function isPhone(phone){
    let str = phone.replace(/\s/ig,"");
    let reg = /^1([358]\d|4[57]|7[^249])\d{8}$/;
    return reg.test(str);
}

function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    let rst = decodeURIComponent(results[2].replace(/\+/g, " "));
    if (rst.lastIndexOf('?') != -1) {
        rst = rst.substr(0, rst.lastIndexOf('?'));
    }
    return rst;
}

function dateFormat(date, str){
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let rst = str+'';
    rst = rst.replace('yyyy', year);
    rst = rst.replace('MM', month<10?'0'+month:month);
    rst = rst.replace('M', month);
    rst = rst.replace('dd', day<10?'0'+day:day);
    rst = rst.replace('d', day);
    rst = rst.replace('hh', hour<10?'0'+hour:hour);
    rst = rst.replace('h', hour);
    rst = rst.replace('mm', min<10?'0'+min:min);
    rst = rst.replace('m', min);
    rst = rst.replace('ss', sec<10?'0'+sec:sec);
    rst = rst.replace('s', sec);
    return rst;
}

exports.icons = icons;
exports.urls = urls;
exports.temp = temp;
exports.images = images;
exports.text = text;
exports.getBaseUrl = getBaseUrl;
exports.getPageUrl = getPageUrl;
exports.isPhone = isPhone;
exports.getParameterByName = getParameterByName;
exports.dateFormat = dateFormat;

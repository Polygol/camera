// Polygol Camera Language Dictionary
window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_CAMERA'] || window['LANG_EN_CAMERA'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_CAMERA = {
    TITLE: "Camera",
    PHOTO: "Photo",
    VIDEO: "Video",
    GALLERY: "Gallery",
    ENABLE_CAMERA_PROMPT: "Camera access needed to take photos",
    ENABLE_CAMERA_BTN: "Enable Camera",
    FLIP_CAMERA_TITLE: "Flip Camera",
    TAKE_PHOTO_TITLE: "Take Photo",
    FLASH_TITLE: "Flash"
};

window.LANG_JP_CAMERA = {
    TITLE: "カメラ",
    PHOTO: "写真",
    VIDEO: "ビデオ",
    GALLERY: "ギャラリー",
    ENABLE_CAMERA_PROMPT: "写真を撮るにはカメラへのアクセスが必要です",
    ENABLE_CAMERA_BTN: "カメラを有効にする",
    FLIP_CAMERA_TITLE: "カメラを反転",
    TAKE_PHOTO_TITLE: "写真を撮る",
    FLASH_TITLE: "フラッシュ"
};

window.LANG_KO_CAMERA = {
    TITLE: "카메라",
    PHOTO: "사진",
    VIDEO: "비디오",
    GALLERY: "갤러리",
    ENABLE_CAMERA_PROMPT: "사진을 찍으려면 카메라 접근 권한이 필요합니다",
    ENABLE_CAMERA_BTN: "카메라 활성화",
    FLIP_CAMERA_TITLE: "카메라 전환",
    TAKE_PHOTO_TITLE: "사진 찍기",
    FLASH_TITLE: "플래시"
};

window.LANG_ZH_CAMERA = {
    TITLE: "相机",
    PHOTO: "照片",
    VIDEO: "视频",
    GALLERY: "图库",
    ENABLE_CAMERA_PROMPT: "拍照需要访问相机",
    ENABLE_CAMERA_BTN: "启用相机",
    FLIP_CAMERA_TITLE: "翻转相机",
    TAKE_PHOTO_TITLE: "拍照",
    FLASH_TITLE: "闪光灯"
};

var LANG_EN_CAMERA = window.LANG_EN_CAMERA;
var LANG_JP_CAMERA = window.LANG_JP_CAMERA;
var LANG_KO_CAMERA = window.LANG_KO_CAMERA;
var LANG_ZH_CAMERA = window.LANG_ZH_CAMERA;

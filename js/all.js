//nav
let linkData = [
    {
        'name':'關於我們',
        'link':'about.html'

    },
    {
        'name':'各組資訊',
        'link':'groupinfo.html'
    },
    {
        'name':'展場資訊',
        'link':'exhibinfo.html'
    },
    // {
    //     'name':'獲獎資訊',
    //     'link':'awardedinfo.html'
    // },
    {
        'name':'粉絲專頁',
        'link':'https://www.facebook.com/wzu.unfinished'
    }
]

const navbarNav = document.querySelector('.navbar-nav');
const mobileNav = document.querySelector('.mobile');
const typeBtn = document.querySelector('.type-btn');

function navlinkBox(){
    let str = '';
    let str2 = '';
    linkData.forEach(function(item){
        let content =` <li class="nav-item px-3">
        <a class="nav-link" href="${item.link}">${item.name}</a>
    </li>`;
    let content2 =` <li class="nav-item mr-5">
    <a class="nav-link text-light" href="${item.link}">${item.name}</a>
</li>`;
    str += content
    str2 += content2;
    })
    navbarNav.innerHTML = str;
    mobileNav.innerHTML = str2;

}
navlinkBox();

let groupData = [
    {
        imgUrl:'img/group/g1.jpg',
        type:'行動應用類',
        typeName:'軟體內容組',
        name:'領衣二衫',
        des:'二手衣買賣平台，以跟願意捐贈或有意販售的族群進行二手衣買斷交易，透過此平台來減少個人二手衣拍賣的繁雜步驟，也能讓人們在這個平台捐贈衣服，讓閒置衣物能透過...',
        pageUrl:'g1.html'
    },
    {
        imgUrl:'img/group/g2.jpg',
        type:'平面類',
        typeName:'產品設計組',
        name:'雨果 Emotion Juice',
        des:'為了達到舒緩情緒並且注重健康的成效，我們選擇較為健康的銀耳露去做研究。除了銀耳露之外，店家同時也有製作豆漿、烘培堅果類等等產品，使用優良的原料且絕不在製作...',
        pageUrl:'g2.html'
    },
    {
        imgUrl:'img/group/g3.jpg',
        type:'平面類',
        typeName:'產品設計組',
        name:'初葉',
        des:'台灣產量稀少的紅毛榴槤及紅毛榴槤茶葉，從採收到製作過程、包裝設計及行銷皆由本團隊一手包辦。在台灣，紅毛榴槤茶葉大多仰賴進口，由於國人對紅毛榴槤茶葉...',
        pageUrl:'g3.html'
    },
    {
        imgUrl:'img/group/g4.jpg',
        type:'行動應用類',
        typeName:'軟體內容組',
        name:'Ya遊大高雄',
        des:'推廣高雄在地特色美食，促進美食觀光產業，提升高雄觀光人潮。整合高雄特色在地美食，利用Line機器人，網站以及YouTube影片的形式進行數位行銷，推廣高雄美食...',
        pageUrl:'g4.html'
    },
    {
        imgUrl:'img/group/g5.jpg',
        type:'平面類',
        typeName:'傳達設計組',
        name:'Hē La',
        des:'合作酒吧的店名「Girar」在西班牙文裡有旋轉之意，意指客人在酒吧飲酒作樂，酒酣耳熱間微醺的氣氛讓人感到旋轉的氛圍。而西文發音類似英文發音的「Hē La」...',
        pageUrl:'g5.html'
    },
    {
        imgUrl:'img/group/g6.jpg',
        type:'動畫類',
        typeName:'實驗與混合媒材動畫組',
        name:'One shot',
        des:'動畫帶來了無限的想像空間，以尋回初衷為劇情主軸，採用3D建模技術搭配現實生活場景的特效合成呈現，讓觀眾透過畫面的表面和劇情的表達可以同受...',
        pageUrl:'g6.html'
    },
    {
        imgUrl:'img/group/g7.jpg',
        type:'遊戲類',
        typeName:'PC遊戲創作',
        name:'流年濱線',
        des:'以1930~1940年代台灣為背景的角色扮演遊戲, 主軸是由玩家意外穿越回到了1930年代高雄哈瑪星地區，與當年祖母相遇拉開序幕,玩家以一個現代人的身分親身體驗...',
        bgColor:'bg-primary',
        fontColor:'text-info',
        pageUrl:'g7.html'
    },
    {
        imgUrl:'img/group/g8.jpg',
        type:'遊戲類',
        typeName:'行動遊戲',
        name:'寵心開始',
        des:'本團隊擬開發的Android手機遊戲，主要是娛樂休閒的2D AVG狗狗冒險遊戲。整體畫面是以pixel 像素風格呈現。可愛逗趣的小狗狗在路上跑，跳過重重障礙物...',
        pageUrl:'g8.html'
    },
    {
        imgUrl:'img/group/g9.jpg',
        type:'平面類',
        typeName:'傳達設計組',
        name:'Green World',
        des:'以環保教育為主軸，結合時下流行的社群軟體，將環保及正確回收的觀念傳遞給大眾，在不同受眾裡針對幼兒孩童進行額外的回收教學。相信大家都知道環保的重要性...',
        pageUrl:'g9.html'
    },
    {
        imgUrl:'img/group/g10.jpg',
        type:'平面類',
        typeName:'產品設計組',
        name:'典嚐',
        des:'印象中的高雄在地伴手禮沒有一個紀念性質，所以發想推廣高雄在地水果以大樹、六龜、旗山、燕巢為主地區，推出特色水果乾禮盒，讓觀光客更了解高雄在地水果...',
        pageUrl:'g10.html'
    },
    {
        imgUrl:'img/group/g11.jpg',
        type:'行動應用類',
        typeName:'軟體內容組',
        name:'我的淨灘時代',
        des:'台灣的海洋環境生態不甚理想，環境上每一件被丟棄的塑膠垃圾，傷害的不只是地球上的生物，也是人類自己。為了維護海洋環境及生物的棲地，建立一個淨灘紀錄平台...',
        pageUrl:'g11.html'
    },
    {
        imgUrl:'img/group/g12.jpg',
        type:'平面類',
        typeName:'傳達設計組',
        name:'舞網不勝 DanceStudio',
        des:'高雄ｅ舞苑舞蹈教室合作，想藉此幫助該教室提升學生人數，以及讓更多年齡層的的客群都能夠更了解。利用最常使用的粉絲專頁等社群軟體讓更多人...',
        pageUrl:'g12.html'
    },
    {
        imgUrl:'img/group/g13.jpg',
        type:'平面類',
        typeName:'傳達設計組',
        name:'新「食」代',
        des:'在快速進步的世代下，各個商品為了嶄露頭角而需添加或噴灑很多物質來讓食品看起來更美麗，但這樣的狀況卻間接造成了污染，而讓食物失去原本的原味...',
        pageUrl:'g13.html'
    },
    {
        imgUrl:'img/group/g14.jpg',
        type:'行動應用類',
        typeName:'軟體內容組',
        name:'斯本賽克 Specific',
        des:'文創市場與電商平台發展也逐漸盛行，近乎達到市場飽和的狀態，但這類產業仍提供非常多的商機並占有無法被取代的地位。其中的差別無不包括是創新性、設計性...',
        pageUrl:'g14.html'
    }, 
    {
        imgUrl:'img/group/g15.jpg',
        type:'遊戲類',
        typeName:'PC遊戲創作',
        name:'被遺忘的台灣戰史',
        des:'第一人稱的3D射擊遊戲。玩家必須扮演一個以日本軍人身分，參加太平洋戰爭的台籍士兵。在遊玩過程中，了解到許多關於台籍日本兵以及太平洋戰爭的珍貴歷史資料...',
        pageUrl:'g15.html'
    },
];
const groupList = document.querySelector('.group-list');
const searchNum = document.querySelector('.search-num');

function render(){
    let str="";
    groupData.forEach(function(item){
        let content=`<li class="col-md-6 col-lg-4 mb-5 text-justify">
        <div class="group-card">
            <div class="g-card-header position-relative text-light" >
                <div class="g-card-img">
                    <img src="${item.imgUrl}" alt="${item.name}" width="100%">
                </div>
                <h4 class="group-type position-absolute bg-secondary font-weight-normal">${item.type}</h4>
                <p class="group-type-name position-absolute bg-secondary">${item.typeName}</p>
            </div>
            <div class="g-card-body p-4">
                <h3 class="group-name">${item.name}</h3>
                <p class="group-des">${item.des}</p>
                <a href="${item.pageUrl}" class="btn btn-outline-info mt-3 text-center d-block">了解更多</a>
            </div>
        </div>
    </li>`;
    str += content;
    })
    groupList.innerHTML = str;
    searchNum.textContent =`本次搜尋共 ${groupData.length} 筆資料`
}
render();

const typeSearch = document.querySelector('#typeSearch');
//篩選器
function filterBox(){
    typeSearch.addEventListener('change',function(e){
        if(e.target.value == '全部'){
            render();
            return
          }
        let str2 = '';
        let count = 0;
        groupData.forEach(function (item){
            if(e.target.value == item.type){
                count +=1;
                str2 +=`<li class="col-md-6 col-lg-4 mb-5 text-justify">
<div class="group-card">
            <div class="g-card-header position-relative text-light" >
                <div class="g-card-img">
                    <img src="${item.imgUrl}" alt="${item.name}" width="100%">
                </div>
                <h4 class="group-type position-absolute bg-secondary font-weight-normal">${item.type}</h4>
                <p class="group-type-name position-absolute bg-secondary">${item.typeName}</p>
            </div>
            <div class="g-card-body p-4">
                <h3 class="group-name">${item.name}</h3>
                <p class="group-des">${item.des}</p>
                <a href="${item.pageUrl}" class="btn btn-outline-info mt-3 text-center d-block">了解更多</a>
            </div>
        </div>
    </li>`;
    searchNum.textContent =`本次搜尋共 ${count} 筆資料`
            }
        })
        groupList.innerHTML = str2;
        
    })
}
filterBox();


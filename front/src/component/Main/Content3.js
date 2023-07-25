import classes from './Content3.module.css'


function Content1(){
    return(
        <section className={classes.content1_container1}>
            <div className={classes.content1_container2}>
                <div className={classes.content_container3}>
                    <span className={classes.content_text1}>고객센터</span>
                </div>
                <div className={classes.content_container4}>
                    <span className={classes.content_text2}>010-2538-6595</span>
                </div>
                <div className={classes.content_container5}>
                    <span className={classes.content_text3}>평일 09:00 ~ 18:00 <br/> 주말/공휴일 휴무</span>
                </div>
            <div className={classes.content1_container6}>
                <div className={classes.content_container7}>
                        <span className={classes.content_text4}>입금계좌</span>
                    </div>
                    <div className={classes.content_container8}>
                        <span className={classes.content_text5}>3333-09-5847103</span>
                    </div>
                    <div className={classes.content_container9}>
                        <span className={classes.content_text6}>국민은행 | 예금주: 장경빈 <br/> E-MAIL:iamsicoura@naver.com</span>
                    </div>
            <div className={classes.content1_container10}>
                <div className={classes.content_container11}>
                    <span className={classes.content_text7}>1:1문의</span>
                    <span className={classes.content_text8}>궁금하신 사항을 문의해주세요.</span>
                    <span className={classes.content_img1}>이미지 넣을 곳</span>
                </div>
                <div className={classes.content_container12}>
                    <span className={classes.content_text9}>방문수령 매장안내</span>
                    <span className={classes.content_text10}>방문수령 주문 전 꼭 확인해주세요.</span>
                    <span className={classes.content_img2}>이미지 넣을 곳</span>
                </div>
            <div className={classes.content1_container13}>
            <div className={classes.content_container11}>
                    <span className={classes.content_text11}>배송안내</span>
                    <span className={classes.content_text12}>구름마켓 배송시스템 안내</span>
                    <span className={classes.content_img3}>이미지 넣을 곳</span>
                </div>
                <div className={classes.content_container14}>
                    <span className={classes.content_text13}>대량구매 문의</span>
                    <span className={classes.content_text14}>문의 폼 입력하러가기</span>
                    <span className={classes.content_img4}>이미지 넣을 곳</span>
                </div>
            </div>
            </div>    
            </div>
            </div>
        </section>
)
}

export default Content3;
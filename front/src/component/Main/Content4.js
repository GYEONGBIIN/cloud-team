import React from 'react';
import classes from './Content4.module.css';

function Content4() {
  return (
    <section className={classes.content1_container12}>
        <div className={classes.content1_container13}>
            <span className={classes.content_text15}>회사소개 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 이용약관 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 개인정보처리방침</span>
        </div>
      <div className={classes.content1_userwrap}>
        <img className={classes.content1_image1} src='images/main/mainfruits.png' alt='photo' />
        <div className={classes.image_text_overlay}>
          <div className={classes.content1_text1}>
            <p>구름마켓 대표 &nbsp;  : &nbsp; 이경찬 &nbsp; | &nbsp; 사업자 등록번호 &nbsp; : &nbsp; 123-45-67890</p>

            <p>통신판매업번호 &nbsp; : &nbsp; 제2023-동구제봉로92-1234</p>

            <p>전화&nbsp; : &nbsp; 070-1234-5678 &nbsp; | &nbsp; 개인정보관리자 &nbsp; : &nbsp; 도희건'</p>

            <p>광주 동구 제 92(대성학원) 3층 10강의실</p>

            <p>E-MAIL &nbsp; : &nbsp; iamdoxoak@naver.com</p>
            <br/>
            <br/>
            <p>Hosting by (주) 구름마켓 Copyright@ 투커. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content4;

import {Link , useNavigate} from 'react-router-dom';
import { useRecoilState } from 'recoil';

import classes from './Header.module.css';
import LoginButton from './LoginButton';
import Button from 'react-bootstrap/Button';
import { LoginState } from '../store/LoginState';

function Header () {

    const [isLoggedIn,setIsLoggedIn] = useRecoilState(LoginState);
    const navigate = useNavigate();

    const loginHandler = () => {
        setIsLoggedIn(false);
        navigate('./mypage');
    }

    return (
        <div className = {classes.header1}>
            <div className = {classes.header2}>
                <p div className = {classes.text1}>
                    Cloud Market
                </p>
            <div className = {classes.header3}>
                <p div className = {classes.text2}>
                   [EVENT] 구름마켓 회원가입 적립급 3,000원 지급{">"}
                </p>
            <div className = {classes.header4}>
                <div className = {classes.header_wrap1}>
                    <div className = {classes.header_container1}>
                        <Link to = '/mainpage' className = {classes.header_content1}>
                            <button className={classes.header_menu_selected} >홈</button>
                        </Link>

                        <Link to = '/' className = {classes.header_content2}>
                            <button className={classes.header_menu_selected} >중고거래</button>
                        </Link>

                        <Link to = '/neighborhood' className = {classes.header_content3}>
                            <button className={classes.header_menu} >동네 가게</button>
                        </Link>

                        <Link to = '/parttime' className = {classes.header_content4}>
                            <button className={classes.header_menu} >알바</button>
                        </Link>

                        <Link to = '/estate' className = {classes.header_content5}>
                            <button className={classes.header_menu} >부동산 직거래</button>
                        </Link>
                        </div>
                        <div className = {classes.header_container3}>
                        <div className= {classes.header_content8}>
                            {isLoggedIn ? <Button onClick={loginHandler} variant="warning" style={{marginRight : '10px'}}>내정보</Button>  : ''   }
                            <LoginButton  />
                        </div>
                    </div>
                </div>
                <div className={classes.header_wrap2}>
                    <Link to = '/mainpage' className = {classes.header_content6}>
                        <button className={classes.header_menu_selected} ><img className={classes.header_image} src='/images/cloudlogo.jpg' alt='로고' /></button>
                    </Link>
                    <div className = {classes.header_content7}>
                            <form className={classes.header_form}>
                                <input className={classes.search_input} type="text" placeholder="물품이나 동네를 검색해보세요" />
                            </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Header;
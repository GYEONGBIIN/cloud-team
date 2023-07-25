import classes from './MainPage.module.css';
import Content1 from '../component/Main/Content1';
import Content2 from '../component/Main/Content2';
import Content3 from '../component/Main/Content3';



function MainPage() {
    return(
        <div className={classes.containers}>
            <div className={classes.container}>
                <Content1/>
                <Content2/>
                <Content3/>
            </div>     
        </div>
        )
}

export default MainPage;
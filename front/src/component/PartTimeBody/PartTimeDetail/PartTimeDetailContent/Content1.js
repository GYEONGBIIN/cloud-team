import classes from './Content1.module.css'

function Content1 () {
    return (
        <section className={classes.title_section}>
                    <div className={classes.member_wrap}>
                        <div className={classes.avartar_wrap}>
                            <img className={classes.avartar} src='/images/avartar.png' alt='사진' />
                        </div>
                        <div className={classes.name_wrap}>
                            <div className={classes.name}>이름</div>
                            <div className={classes.region}>동네이름</div>
                        </div>
                    </div>
                    <div className={classes.status_wrap}>
                        <div className={classes.status_top}>
                            <div className={classes.heat_wrap}>
                                <div className={classes.heat}>
                                    45.2
                                    <span>°C</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.status_bottom}>
                            <span className={classes.heat_status}>매너온도</span>
                        </div>
                    </div>
                </section>
    )
}

export default Content1;
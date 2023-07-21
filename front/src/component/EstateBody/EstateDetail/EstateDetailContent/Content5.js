import classes from './Content5.module.css';

function Content5(props) {
    console.log(props.info)
    return (
        <div>
            {props.info &&
                (<section className={classes.content5_containers}>
                    <h2 className={classes.content5_title}>소개</h2>
                    <p className={classes.content5_content}>
                        {props.info}
                    </p>s
                </section>)
            }
        </div>

    )
}

export default Content5;
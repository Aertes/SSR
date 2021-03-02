import style from '../../styles/Home.module.css'
const Home = (props) => {
    console.log(props, 'Home --- props');
    return(
        <div className={style.container}>
            Home
        </div>
    )
}

export default Home
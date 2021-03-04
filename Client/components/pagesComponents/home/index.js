import styles from './home.module.css';
const Home = (props) => {
    console.log(props, 'Home --- props');
    return(
        <div className={`${styles.home_container} container`} >
            Home
        </div>
    )
}

export default Home
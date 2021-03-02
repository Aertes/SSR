import style from '../styles/404.module.css';
import Image from "next/image";
export default function Error(){
    return(
        <div className={style.error}>
            <Image
                src="/images/error.jpg"
                width={650}
                height={458.5}
            />
        </div>
    )
}
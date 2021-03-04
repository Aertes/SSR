import styles from '../../../styles/403.module.css';
import Image from "next/image";
export default function ErrorPage(){
    return(
        <div className={styles.error_forbidden}>
            <Image
                src="/images/403-forbidden.png"
                width={720}
                height={420}
            />
        </div>
    )
}
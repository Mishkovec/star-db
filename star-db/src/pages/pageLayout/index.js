import React from 'react';
import styles from './page.module.css';

const PageLayout = (props) => {
        return (
            <div className={styles.page_wrapper}>
                <div className={styles.left_block}>
                    {props.left}
                </div>
                <div className={styles.right_block}>
                    {props.right}
                </div>
            </div>
        )
};
export default PageLayout;

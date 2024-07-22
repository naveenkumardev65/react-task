import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import { newsFeed } from "../../api";
import search from '../../assets/search.png';

function NewsFeed() {
    const [keyword, setKeyword] = useState('bitcoin');
    const [records, setRecords] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getNewsFeed(keyword);
    }, []);

    async function getNewsFeed(keyword) {

        if (!keyword) {
            alert('Please enter the keyword');
        } else {
            try {
                setLoading(true);
                const res = await newsFeed(keyword);
                if (res) {
                    const filterRecords = res?.articles?.filter(e => e.content != "[Removed]");
                    setRecords(filterRecords);
                }
            } catch (error) {
                alert('Invalid keyword')
            } finally {
                setLoading(false)
            }
        }

    }

    return <div className={styles.newsfeed_container}>
        <h3 className={styles.header}>NewsFeed Widget</h3>
        <div className={styles.search_container}>
            <input type="text" value={keyword} placeholder="Search current news" className={styles.searchInput} onChange={(e) => setKeyword(e.target.value)} />
            <button type="button" className={styles.search_button} onClick={() => getNewsFeed(keyword)}><img src={search} className={styles.search_icon} /></button>
        </div>
        {loading ? <div className={styles.loading}>
            <h3 style={{ color: '#84848b' }}>Loading...</h3>
        </div> : <div className={styles.news_card_container}>
            {records?.length > 0 ? records?.map((item, index) => {
                return <div key={index} className={styles.news_card}>
                    <h4 className={styles.title}>{item?.title}</h4>
                    <p className={styles.description}>{item?.description}</p>
                    <div className={styles.footer_card}>
                        <i style={{ fontSize: '10px' }}>Author: {item?.author || '-'}</i>
                        <i style={{ fontSize: '10px', marginLeft: '10px' }}>PublishedAt: {item?.publishedAt}</i>
                    </div>
                </div>
            }) : <div style={{ textAlign: "center" }}>
                <p>No records found</p>
            </div>}
        </div>}
    </div>;
}

export default NewsFeed;

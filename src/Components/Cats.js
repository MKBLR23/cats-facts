import React, {useEffect, useState} from "react";

const Cats = () => {
    const [catsData, setCatsData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isNextPage, setIsNextPage] = useState(true);
    const [isPrevPage, setPrevPage] = useState(true);

    const fetchCats = async () => {
        setLoading(true);
        const response = await fetch(`https://catfact.ninja/facts?page=${currentPage}`, {
            method: 'GET',
            headers: {
                limit: 5
            }
        })

        response.json().then((result) => {
            setCatsData(result?.data);
            setIsNextPage(result?.next_page_url !== null);
            setPrevPage(result?.prev_page_url !== null)
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchCats();
    }, [currentPage]);

    const onChangePrevious = () => {
        setCurrentPage(prevCount => prevCount - 1);
    }

    const onChangeNext = () => {
        setCurrentPage(prevCount => prevCount + 1);
    }

    console.log(currentPage)

    return (<div className="container">
        {
            !isLoading && catsData ?
                catsData.map((item, i) => (
                    <p className="text-2" key={i}>{item.fact}</p>
                )) : (
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>)
        }
        <div className="pagination">
            <button className={`${!isPrevPage ? 'pagination-disable' : 'pagination-button'}`} onClick={onChangePrevious} disabled={!isPrevPage}>&laquo; Previous</button>
            <button className={`${!isNextPage ? 'pagination-disable' : 'pagination-button'}`} onClick={onChangeNext} disabled={!isNextPage}>Next &raquo;</button>
        </div>
    </div>);
}

export default Cats;
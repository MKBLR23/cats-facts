import React, {useEffect, useState} from "react";

const Cats = () => {
    const [catsData, setCatsData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchCats = async () => {
        setLoading(true);
        const response = await fetch(`https://catfact.ninja/fact`, {
            method: 'GET',
        })

        response.json().then(result => setCatsData(result));
        setLoading(false);
    }

    useEffect(() => {
        fetchCats();
    }, []);

    console.log(catsData)

    return (<>
        {
            !isLoading && catsData &&
                <>
                    <p className="text-2">{catsData.fact}</p>
                </>
        }
    </>);
}

export default Cats;
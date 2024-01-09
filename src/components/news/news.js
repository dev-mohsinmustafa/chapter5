import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/slices/newsSlice';






const News = () => {


    const articles = useSelector(state => state.new.articles);
    // const newApiState = useSelector(state => state.newApiState);
    const dispatch = useDispatch();


    return (
        <div>
            <div>News Components</div>

            <button onClick={() => dispatch(fetchNews())}>Fetch Bitcoin News</button>


            {
                articles && articles.map((element, index) => {
                    return (
                        <div key={index}>
                            {/* <div>{element.status}</div> */}
                            <div className="card py-4">
                                <img src={element.urlToImage} alt="profile" style={{ height: 200, width: 200 }} />
                                <div class="container">
                                    <div>{element.author}</div>
                                    <div>{element.description}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default News;
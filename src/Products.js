import React from 'react'
import "./Product.css"

function Products({ id }) {
    return (
        <>
            <div className="container">
                <div className="post col-lg-3 col-md-4 col-10">
                    <div className="header_post">
                        <img src={id["image"]} alt="" key={id} />
                    </div>

                    <div className="body_post">
                        <div className="post_content">

                            <h1>{id["title"]}</h1>
                            <p>{id["description"]}</p>
                        </div>

                        <div className="container_infos">
                            <div className="price">
                                <span>$</span>
                                {id["price"]}
                            </div>

                            <div className="container_tags">
                                <span>Category</span>
                                <div className="tags">
                                    <ul>
                                        <li>{id["category"]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products

import React from 'react';

const Cars = () => {
    return (
        <div>
            <h1>This is Cars</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;
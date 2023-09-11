
import { useLoaderData } from 'react-router-dom';
import './Cart.css'
const Cart = () => {


    const sProduct = useLoaderData();
    const Product = sProduct.slice(0, 5);




    return (

        <div>

            <div className="cart-container">
                <div className="cart-left">
                {
                    Product.map(product => <div className='sItem'>
                        <div className="imagee">
                            <img src={product.img} alt="" />
                        </div>

                        <div className="main-content">
                            <h4>{product.name}</h4>
                            <p>Price : <span>{product.price} $</span></p>
                            <p>RatingsCount : <span>{product.ratingsCount}</span></p>
                        </div>

                        <div className="delate-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                            <path d="M21.9865 29.5357H23.4598C23.6551 29.5357 23.8425 29.4581 23.9806 29.32C24.1188 29.1818 24.1964 28.9945 24.1964 28.7991V15.5402C24.1964 15.3448 24.1188 15.1575 23.9806 15.0193C23.8425 14.8812 23.6551 14.8036 23.4598 14.8036H21.9865C21.7912 14.8036 21.6038 14.8812 21.4657 15.0193C21.3275 15.1575 21.2499 15.3448 21.2499 15.5402V28.7991C21.2499 28.9945 21.3275 29.1818 21.4657 29.32C21.6038 29.4581 21.7912 29.5357 21.9865 29.5357ZM32.0535 8.91072H26.9949L24.9078 5.43025C24.6459 4.99382 24.2754 4.63268 23.8324 4.38203C23.3894 4.13138 22.889 3.99976 22.38 4H16.1913C15.6825 3.99997 15.1824 4.13169 14.7396 4.38233C14.2968 4.63297 13.9265 4.99399 13.6647 5.43025L11.5764 8.91072H6.51779C6.25731 8.91072 6.0075 9.01419 5.82331 9.19838C5.63912 9.38257 5.53564 9.63238 5.53564 9.89286V10.875C5.53564 11.1355 5.63912 11.3853 5.82331 11.5695C6.0075 11.7537 6.25731 11.8571 6.51779 11.8571H7.49993V32.4821C7.49993 33.2636 7.81036 34.013 8.36292 34.5656C8.91548 35.1181 9.66492 35.4286 10.4464 35.4286H28.1249C28.9064 35.4286 29.6558 35.1181 30.2084 34.5656C30.7609 34.013 31.0714 33.2636 31.0714 32.4821V11.8571H32.0535C32.314 11.8571 32.5638 11.7537 32.748 11.5695C32.9322 11.3853 33.0356 11.1355 33.0356 10.875V9.89286C33.0356 9.63238 32.9322 9.38257 32.748 9.19838C32.5638 9.01419 32.314 8.91072 32.0535 8.91072ZM16.0839 7.12506C16.1167 7.07042 16.1631 7.02524 16.2186 6.99393C16.2742 6.96262 16.3369 6.94625 16.4006 6.94643H22.1707C22.2343 6.94636 22.2969 6.96277 22.3523 6.99408C22.4077 7.02538 22.454 7.07051 22.4868 7.12506L23.5586 8.91072H15.0127L16.0839 7.12506ZM28.1249 32.4821H10.4464V11.8571H28.1249V32.4821ZM15.1115 29.5357H16.5848C16.7801 29.5357 16.9675 29.4581 17.1056 29.32C17.2438 29.1818 17.3214 28.9945 17.3214 28.7991V15.5402C17.3214 15.3448 17.2438 15.1575 17.1056 15.0193C16.9675 14.8812 16.7801 14.8036 16.5848 14.8036H15.1115C14.9162 14.8036 14.7288 14.8812 14.5907 15.0193C14.4525 15.1575 14.3749 15.3448 14.3749 15.5402V28.7991C14.3749 28.9945 14.4525 29.1818 14.5907 29.32C14.7288 29.4581 14.9162 29.5357 15.1115 29.5357Z" fill="#EB5757"/>
                            </svg>
                        </div>

                    </div>)
                }

                </div>

                <div className="cart-right">

                    <h5>Order Summary</h5>
                    <span>Selected Items: 5</span>
                    <span>Total Price: $1140</span>
                    <span>Total Shipping Charge: $5</span>
                    <span>Tax: $114</span>
                    <p>Grand Total: $1559</p>
                    <button>Clear Cart 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M13.7188 18.25H14.6562C14.7806 18.25 14.8998 18.2006 14.9877 18.1127C15.0756 18.0248 15.125 17.9056 15.125 17.7812V9.34375C15.125 9.21943 15.0756 9.1002 14.9877 9.01229C14.8998 8.92439 14.7806 8.875 14.6562 8.875H13.7188C13.5944 8.875 13.4752 8.92439 13.3873 9.01229C13.2994 9.1002 13.25 9.21943 13.25 9.34375V17.7812C13.25 17.9056 13.2994 18.0248 13.3873 18.1127C13.4752 18.2006 13.5944 18.25 13.7188 18.25ZM20.125 5.125H16.9059L15.5777 2.91016C15.4111 2.63243 15.1753 2.40261 14.8934 2.24311C14.6115 2.0836 14.293 1.99985 13.9691 2H10.0309C9.70709 1.99998 9.38883 2.0838 9.10707 2.2433C8.82531 2.4028 8.58965 2.63254 8.42305 2.91016L7.09414 5.125H3.875C3.70924 5.125 3.55027 5.19085 3.43306 5.30806C3.31585 5.42527 3.25 5.58424 3.25 5.75V6.375C3.25 6.54076 3.31585 6.69973 3.43306 6.81694C3.55027 6.93415 3.70924 7 3.875 7H4.5V20.125C4.5 20.6223 4.69754 21.0992 5.04917 21.4508C5.40081 21.8025 5.87772 22 6.375 22H17.625C18.1223 22 18.5992 21.8025 18.9508 21.4508C19.3025 21.0992 19.5 20.6223 19.5 20.125V7H20.125C20.2908 7 20.4497 6.93415 20.5669 6.81694C20.6842 6.69973 20.75 6.54076 20.75 6.375V5.75C20.75 5.58424 20.6842 5.42527 20.5669 5.30806C20.4497 5.19085 20.2908 5.125 20.125 5.125ZM9.9625 3.98867C9.98339 3.9539 10.0129 3.92515 10.0483 3.90523C10.0836 3.8853 10.1235 3.87489 10.1641 3.875H13.8359C13.8764 3.87495 13.9162 3.8854 13.9515 3.90532C13.9868 3.92524 14.0163 3.95396 14.0371 3.98867L14.7191 5.125H9.28086L9.9625 3.98867ZM17.625 20.125H6.375V7H17.625V20.125ZM9.34375 18.25H10.2812C10.4056 18.25 10.5248 18.2006 10.6127 18.1127C10.7006 18.0248 10.75 17.9056 10.75 17.7812V9.34375C10.75 9.21943 10.7006 9.1002 10.6127 9.01229C10.5248 8.92439 10.4056 8.875 10.2812 8.875H9.34375C9.21943 8.875 9.1002 8.92439 9.01229 9.01229C8.92439 9.1002 8.875 9.21943 8.875 9.34375V17.7812C8.875 17.9056 8.92439 18.0248 9.01229 18.1127C9.1002 18.2006 9.21943 18.25 9.34375 18.25Z" fill="white"/>
                        </svg>
                    </button>
                    <button>Proceed Checkout
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.3299 4.22223H3.67014C2.74653 4.22223 2 4.96876 2 5.8889V18.1111C2 19.0313 2.74653 19.7778 3.67014 19.7778H20.3299C21.2535 19.7778 22 19.0313 22 18.1111V5.8889C22 4.96876 21.2535 4.22223 20.3299 4.22223ZM3.87847 5.8889H20.1215C20.2361 5.8889 20.3299 5.98265 20.3299 6.09723V7.55556H3.67014V6.09723C3.67014 5.98265 3.76389 5.8889 3.87847 5.8889ZM20.1215 18.1111H3.87847C3.76389 18.1111 3.67014 18.0174 3.67014 17.9028V12H20.3299V17.9028C20.3299 18.0174 20.2361 18.1111 20.1215 18.1111ZM8.66667 14.6389V16.0278C8.66667 16.257 8.47917 16.4445 8.25 16.4445H5.75C5.52083 16.4445 5.33333 16.257 5.33333 16.0278V14.6389C5.33333 14.4097 5.52083 14.2222 5.75 14.2222H8.25C8.47917 14.2222 8.66667 14.4097 8.66667 14.6389ZM15.3333 14.6389V16.0278C15.3333 16.257 15.1458 16.4445 14.9167 16.4445H10.1944C9.96528 16.4445 9.77778 16.257 9.77778 16.0278V14.6389C9.77778 14.4097 9.96528 14.2222 10.1944 14.2222H14.9167C15.1458 14.2222 15.3333 14.4097 15.3333 14.6389Z" fill="white"/>
                        </svg>
                    </button>
                    
                </div>
            </div>

        </div>

    );
};

export default Cart;
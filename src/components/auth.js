import buyers from '../data/buyers'; // Импортируйте массив покупателей

export const authenticateUser = (username, password) => {
    const user = buyers.find(
        (buyer) => buyer.username === username && buyer.password === password
    );
    return user !== undefined;
};

import api from '../../services/api';
import { addProducts } from '../products';

// chamada na api com o midware
export const getAllProducts = () => {
    return (dispatch) => {
        api.get()
            .then(res => {
                dispatch(addProducts(res.data));
            })
            .catch(console.log);
    };
};
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeletePizza() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeletePizza}>
      delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number,
};

export default DeleteItem;

import PropTypes from 'prop-types';

import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  //Since there is no input, we don't need to read the request object, only the params
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

UpdateOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.bool,
    priorityPrice: PropTypes.number,
    orderPrice: PropTypes.number,
    estimatedDelivery: PropTypes.string,
    cart: PropTypes.array,
  }),
};

export default UpdateOrder;

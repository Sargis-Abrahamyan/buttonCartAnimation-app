import { CartSvg, SuccessCartSvg ,ProductSvg} from './assets';
import Text from './common/Text';
import { ADD_CART_TEXT } from './constant';
import { useButton } from './hook';
import './App.css';

const App = () => {
  const { handleActiveCart, activeCart } = useButton();
  const commonClassName = 'btn_icon';

  return (
    <div className='app flexCenter'>
      <button className={`btn flexCenter ${activeCart ? 'active' : ''}`} onClick={handleActiveCart}>
        <ProductSvg className={`${commonClassName} btn-iconProduct`} />
        <CartSvg className={`${commonClassName} btn-iconCart`} />
        <Text className='btn-text-first'>{ADD_CART_TEXT}</Text>
        <SuccessCartSvg className='btn-success-icon' />
      </button>
    </div>
  );
};

export default App;

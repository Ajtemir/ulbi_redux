import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }


    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
    <div className="App">
      <div style={{fontSize:'3rem'}}>{cash}</div>
      <div style={{display:'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Попонить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
        <div>
            {customers.length > 0
                ?
                <div>
                    {
                        customers.map(customer =>
                            <div style={{
                                fontSize:"2rem",
                                border: '1px solid black',
                                padding: '10px 20px',
                                marginTop: 5
                            }}
                                 onClick={() => removeCustomer(customer)}
                            >{customer.name}</div>
                        )
                    }
                </div>
                :
                <div style={{fontSize:'2rem', marginTop:20}}>
                   Клиенты отсуствуют
                </div>
            }

        </div>
    </div>
    );
}

export default App;

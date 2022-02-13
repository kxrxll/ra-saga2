import React, {useEffect} from 'react';
import './bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { itemsRequest } from './actions/index';
import { nanoid } from 'nanoid';

function Items() {
  const { items, loading, error } = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => dispatch(itemsRequest()), []);

  const handleReload = (evt) => {
    evt.preventDefault();
    dispatch(itemsRequest());
  }

  return (
    <div className="card" style={{margin:'40px',padding:'20px',width:'60%'}}>
      { loading ? <div className="text-center">
        <div className="spinner-border" role="status">
        </div>
      </div> : false}
      { error ? <div className="alert alert-danger" role="alert">Произошла ошибка!<button href="#" className="btn btn-primary" onClick={handleReload}>Перезагрузка</button></div> : false}
      { items && !error ? items.map(item => 
        <div className="card" key={nanoid()}>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.price} ₽</p>
          <a href={`/${item.id}/details`} className="btn btn-primary">Подробнее</a>
        </div>
      </div>
      ) : false}
    </div>
  )
}

export default Items;

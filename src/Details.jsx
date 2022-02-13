import React, {useEffect} from 'react';
import './bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { detailsRequest } from './actions/index';
import { nanoid } from 'nanoid';

function Details() {
  const { item, loading, error } = useSelector(state => state.details);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => dispatch(detailsRequest(params.id)), []);

  const handleReload = (evt) => {
    evt.preventDefault();
    dispatch(detailsRequest(params.id));
  }

  return (
    <div className="card" style={{margin:'40px',padding:'20px',width:'60%'}}>
      { loading ? <div className="text-center">
        <div className="spinner-border" role="status">
        </div>
      </div> : false}
      { error ? <div className="alert alert-danger" role="alert">Произошла ошибка!<button href="#" className="btn btn-primary" onClick={handleReload}>Перезагрузка</button></div> : false}
      { item && !error ? 
        <div className="card" key={nanoid()}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price} ₽</p>
            <p className="card-text">{item.content}</p>
          </div>
      </div> : false}
    </div>
  )
}

export default Details;

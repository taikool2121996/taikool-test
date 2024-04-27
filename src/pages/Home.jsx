/* eslint-disable react/no-unknown-property */
// libs
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
// saga
import { requestBaseRequest } from '../store/reducers/baseRequest/baseRequest.slice';

const Home = () => {
  const baseRequest = useSelector(state => state.baseRequest.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestBaseRequest());
  }, []);
  return (
    <section className="w-full bg-slate-300">
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
    </section>
  );
};

export default Home;

// // import { bindActionCreators } from 'redux';
// // import { connect } from 'react-redux';
// // import TodosContainer from './TodosContainer';
// import { useDispatch, useSelector } from 'react-redux';
// import Counter from '../components/Counter';
// import { decrease, increase } from '../modules/counter';
// import { useCallback } from 'react';
// // import React from 'react';

// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();
//   const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
//   const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

//   return (
//     <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
//   );
// };

// // const mapStateToProps = (state) => ({
// //   number: state.counter.number,
// // });
// // const mapDispatchToProps = (dispatch) => ({
// //   // 임시 함수
// //   increase: () => {
// //     dispatch(increase());
// //   },
// //   decrease: () => {
// //     dispatch(decrease());
// //   },
// // });

// // export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// // export default connect(
// //   (state) => ({
// //     number: state.counter.number,
// //   }),
// //   // (dispatch) =>
// //   //   bindActionCreators(
// //   {
// //     increase,
// //     decrease,
// //   },
// //   //   dispatch,
// //   // ),
// // )(CounterContainer);

// export default CounterContainer;

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

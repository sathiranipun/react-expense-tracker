import { useState } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {setIncomeAction} from "../../store/expense/expense-slice"

export function IncomeInput(props) {
  // const [income, setIncome] = useState();

  // const dispatch = useDispatch();

  // function onChangeIncome(e){
  //   setIncome(e.target.value)
  //   dispatch(setIncomeAction({income: income}));

  // }

  // return (
  //   <div className="row justify-content-center mb-2">
  //     <div className={`col-6 ${s.label}`}>Income</div>
  //     <div className="col-6">
  //       <input type="number" className="form-control" placeholder="Ex: 3000" onChange={onChangeIncome} />
  //     </div>
  //   </div>
  // );

  const income = useSelector( (store) => store.EXPENSE.income);

  const dispatch = useDispatch();

  function setIncome(e){
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  }


  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input type="number" className="form-control" placeholder="Ex: 3000" defaultValue={{income}} onChange={setIncome}/>
      </div>
    </div>
  );
}

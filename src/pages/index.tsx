import React from 'react';
import Counter from '../components/Counter'
import FormCon from '../components/formCon'
  class Index extends React.Component{
    state = {
      count:1
    };
    changeNum(){}
    render(){
        return (
           <div>
               <Counter />
               <FormCon/>
           </div>
        )
    }
}
export default Index

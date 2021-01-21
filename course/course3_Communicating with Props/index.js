import React from 'react';
import ReactDOM from 'react-dom';
import CommonDetail from './CommonDetail'
import ApprovalCard from './ApprovalCard'
import Faker from 'faker';

if(module.hot) {
    module.hot.accept()
}

const App = () => {
    return <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommonDetail 
          author="Sean" 
          time={new Date()} 
          comment="Hi there!"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommonDetail 
          author="Tammy" 
          time={new Date('2021-1-14')} 
          comment="Hi there!2"
          avatar={Faker.image.image()}
        />
        </ApprovalCard>
      <ApprovalCard>
        <CommonDetail 
          author="Jason" 
          time={new Date('2021-1-13')} 
          comment="Hi there!3"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
    </div>
  };

ReactDOM.render(<App />, document.querySelector('#root'));
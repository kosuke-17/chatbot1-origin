import { useState } from 'react';
import './assets/styles/style.css'
import './assets/styles/index.css';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <section className="c-section">
        <div className="c-box">
          テスト
        </div>
      </section>
    </>
  );
}

export default App;

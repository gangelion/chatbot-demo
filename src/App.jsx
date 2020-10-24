import React from "react";
import defaultDataset from "./dataset";
import './assets/styles/style.css';
import {AnswersList} from './components/index';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            chats: [],
            currentId: "init",
            dataset: defaultDataset,
            open: false,
        };
    }

    initAnswer = () => {
        const initDataset = this.state.dataset[this.state.currentId];
        const initAnswer = initDataset.answers;

        this.setState({
            answers: initAnswer
        })
    }

    componentDidMount() {
        this.initAnswer()
    }
    render() {
        return (
            <section className="c-section">
                <div className="c-box">
                    <AnswersList answers={this.state.answers}/>
                </div>
            </section>
        );
    }
}


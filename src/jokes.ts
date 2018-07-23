import { window, StatusBarItem, StatusBarAlignment } from 'vscode';
import axios from 'axios';

interface IJokeResult {
    id: number;
    joke: string;
    status: string;
}

export default class Jokes {
    private jokeStatusBar: StatusBarItem;

    constructor() {
        this.jokeStatusBar = window.createStatusBarItem(StatusBarAlignment.Right);
        this.jokeStatusBar.show();
    }

    public async renderJoke() {
        try {
            const result = await axios.get<IJokeResult>('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } });
            this.jokeStatusBar.text = result.data.joke;
        } catch (e) {
            console.error(e);
        }
    }

    public dispose() {
        this.jokeStatusBar.dispose();
    }
}
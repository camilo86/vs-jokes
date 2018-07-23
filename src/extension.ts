'use strict';

import * as vscode from 'vscode';
import jokes from './jokes';

export function activate(context: vscode.ExtensionContext) {
    let jokesService = new jokes();
    jokesService.renderJoke();

    setInterval(async function() {
        jokesService.renderJoke();
    }, 120000);
    
    context.subscriptions.push(jokesService);
}

// this method is called when your extension is deactivated
export function deactivate() {
}